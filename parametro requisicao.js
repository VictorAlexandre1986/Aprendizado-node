const express = require("express")
const app = express()

//Para usar o formulário
app.use(express.urlencoded({extended:true}))

//url ->localhost:8000
app.get("/formulario", function(req,res){
    res.send(
        `
            <form action="/processamento" method="POST">
                Nome do cliente: <input type="text" name="nome">
                Sobrenome do cliente: <input type="text" name="sobrenome">
                <button>Salvar</button>
            </form>
        `
    );
});

app.post("/processamento", function(req,res){
    const variavel = req.body.nome;
    const variavel2 = req.body.sobrenome;
    const nome_completo = `${variavel}  ${variavel2}`;
    res.send(nome_completo);
})


//url -> localhost:8000?nome="VictorAlexandre"
app.get("/", function(req,res){
    const variavel = req.query;
    res.send(variavel.nome);
})

//url -> localhost:8000/VictorAlexandre/Braga
app.get("/:nome?/:sobrenome?", function(req,res){
    const variavel = req.params;
    res.send(variavel);
})



app.listen(port=8000, function(){
    console.log("Servidor rodando ")
})
