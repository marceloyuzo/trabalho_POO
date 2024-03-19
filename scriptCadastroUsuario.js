const url = new URL(document.location.href);

if (url.search == "") {
  document.getElementById("botaoSalvar").addEventListener("click", function () {
    // Obtendo os valores dos campos de entrada
    var id = document.getElementById("idInput").value;
    var nome = document.getElementById("nomeInput").value;
    var cpf = document.getElementById("cpfInput").value;
    var telefone = document.getElementById("telefoneInput").value;
    var endereco = document.getElementById("enderecoInput").value;
    var email = document.getElementById("emailInput").value;
    var senha = document.getElementById("senhaInput").value;

    // Criando um objeto com os dados do usuário
    var usuario = {
      id: id,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco,
      email: email,
      senha: senha,
    };
    // Enviando os dados para o backend
    fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          alert("Usuário cadastrado com sucesso!");
          window.location.href = "cadastroUsuarios.html";
        } else {
          console.error("Erro ao cadastrar usuário.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
  });
} else {
  const id = url.searchParams.get("id");
  let usuarioGET = [];

  async function getUsuario() {
    try {
      const response = await API.get(`/usuarios/${id}`);
      usuarioGET = response.data;
      var iid = document.getElementById("idInput");
      var inome = document.getElementById("nomeInput");
      var icpf = document.getElementById("cpfInput");
      var itelefone = document.getElementById("telefoneInput");
      var iendereco = document.getElementById("enderecoInput");
      var iemail = document.getElementById("emailInput");
      var isenha = document.getElementById("senhaInput");

      iid.value = usuarioGET.idUsuario;
      inome.value = usuarioGET.nome;
      icpf.value = usuarioGET.cpf;
      itelefone.value = usuarioGET.telefone;
      iendereco.value = usuarioGET.endereco;
      iemail.value = usuarioGET.email;
      isenha.value = usuarioGET.senha;
    } catch (error) {
      console.error("Erro ao obter usuario:", error);
    }
  }

  getUsuario();

  document.getElementById("botaoSalvar").addEventListener("click", function () {
    // Obtendo os valores dos campos de entrada
    var nome = document.getElementById("nomeInput").value;
    var cpf = document.getElementById("cpfInput").value;
    var telefone = document.getElementById("telefoneInput").value;
    var endereco = document.getElementById("enderecoInput").value;
    var email = document.getElementById("emailInput").value;
    var senha = document.getElementById("senhaInput").value;

    // Criando um objeto com os dados do usuário
    var usuario = {
      id: usuarioGET.idUsuario,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco,
      email: email,
      senha: senha,
    };
    // Enviando os dados para o backend
    fetch(`http://localhost:8080/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          alert("Usuário cadastrado com sucesso!");
          window.location.href = "cadastroUsuarios.html";
        } else {
          console.error("Erro ao cadastrar usuário.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
  });
}
