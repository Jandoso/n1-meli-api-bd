const express = require("express")
<<<<<<< HEAD
const app = express();
const mongoose = require('mongoose');
=======
const mongoose = require("mongoose")
>>>>>>> b7dedaf6c2c1f30c75e5032b470ba07493734053
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso");
});

//String de conexão com o mongodb
//porta padrão do mongo: 27017
//banco de dados utilizado: reprograma

<<<<<<< HEAD
//mongoose.connect("mongodb://localhost:27017/reprograma",  { useNewUrlParser: true });
=======
mongoose.connect("mongodb://admin:reprograma1@ds225902.mlab.com:25902/reprogramameli",  { useNewUrlParser: true });
>>>>>>> b7dedaf6c2c1f30c75e5032b470ba07493734053

//representação da conexão com o banco de dados 
//let db = mongoose.connection;

//após a conexão, caso ocorra algum erro, será logado o erro
//db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exebida essa mensagem
// db.once("open", function (){
//   console.log("conexão feita com sucesso.")
// })

//rotas
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

<<<<<<< HEAD
// app.use(express.json());

=======
>>>>>>> b7dedaf6c2c1f30c75e5032b470ba07493734053
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app
