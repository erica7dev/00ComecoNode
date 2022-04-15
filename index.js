const express = require("express"); //importando o express
const app = express(); 

app.get("/",function(req,res){
    res.send("<h1>Erica</h1>"); //exibe na tela
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"]; //exigindo canal na consulta

    if(canal){
        res.send(canal); 
    }else{
        res.send("Nenhum canal fornecido!");
    }
})

app.get("/blog/:artigo?",function(req, res){

    var artigo = req.params.artigo;//query params ?canal=bolodechocolate

    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
        res.send("<h3>Deu certo/h3>");
    }
})

app.get("/ola/:nome/:prof", function(req, res){
    // REQ => DADOS enviados pelo USER
    // RES => RESPOSTA DO SERVIDOR
    var nome = req.params.nome;
    var prof = req.params.prof;
    res.send("<h1>A " + nome +  " é " + prof + " </h1>");
});



app.listen(9090,(err)=>{
    if(err){
        console.log("Tente novamente!");
    }else{
        console.log("tudo certo!");
    }
})