const formulario = document.querySelector("form");
const botaoCadastrar = document.querySelector("#cadastrarBotao");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const icpf = document.querySelector(".cpf");
const iendereco = document.querySelector(".endereco");
const itelefone = document.querySelector(".telefone");
const isenha = document.querySelector(".senha");
const isenhaConfirmar = document.querySelector(".senhaConfimar");

function verificarCadastro() {
  const cpf = icpf.value;
  const email = iemail.value;

  fetch(`http://localhost:8080/usuarios?cpf=${cpf}&email=${email}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao verificar cadastro");
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        alert("Usuário já esta cadastrado.");
      } else {
        cadastrar();
      }
    })
    .catch((error) => {
      console.error("Erro ao verificar cadastro", error);
    });
}

function cadastrar() {
  fetch("http://localhost:8080/usuarios", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      cpf: icpf.value,
      nome: inome.value,
      endereco: iendereco.value,
      telefone: itelefone.value,
      email: iemail.value,
      senha: isenha.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }
      return response.json();
    })
    .then((data) => {
      alert("Usuário cadastrado com sucesso:", data);
      // Redirecionar para o menu inicial
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function limpar() {
  inome.value = "";
  iemail.value = "";
  icpf.value = "";
  iendereco.value = "";
  itelefone.value = "";
  isenha.value = "";
  isenhaConfirmar.value = "";
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  verificarCadastro();
  limpar();
});
