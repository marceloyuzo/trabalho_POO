// Importando os módulos Express e mysql
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Criando uma instância do aplicativo Express
const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow only requests from this origin
    methods: "GET,POST", // Allow only specified HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allow only specified headers
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST"); // Métodos permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization"); // Cabeçalhos permitidos
  next();
});

// Configurando os parâmetros da conexão MySQL
const connection = mysql.createConnection({
  host: "127.0.0.1", // Endereço do servidor MySQL
  user: "root", // Nome de usuário MySQL
  password: "wasd", // Senha do usuário MySQL
  database: "lojamoveis", // Nome do banco de dados MySQL
  port: 3306,
});

// Estabelecendo a conexão com o MySQL
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL: ", err);
    return;
  }
  console.log("Conexão bem-sucedida ao MySQL");
});

app.get("/pedidos", (req, res) => {
  // Exemplo de consulta ao banco de dados
  connection.query(
    "SELECT idPedido, ValorTotal, formaPagamento FROM Pedido",
    (error, results, fields) => {
      if (error) {
        console.error("Erro ao executar a consulta: ", error);
        return;
      }
      res.json(results); // Retorna os resultados da consulta como JSON
    }
  );
});

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciando o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
