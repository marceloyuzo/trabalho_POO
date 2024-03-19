let usuarios = [];
let usuariosFiltrados = [];

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getUsuario() {
  try {
    const response = await API.get("/usuarios");
    usuarios = response.data;

    inserirLinha(usuarios);
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

async function deleteUsuario(idUsuario) {
  try {
    const response = await API.delete(`/usuarios/${idUsuario}`);
    console.log("Usuario deletado.");

    getUsuario();
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

getUsuario();

const inputUser = document.getElementById("inputUser");

inputUser.oninput = (e) => {
  console.log(e.target.value);
  usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(e.target.value.toLowerCase())
  );

  inserirLinha(usuariosFiltrados);
};

function inserirLinha(usuarios) {
  var checkContainer = document.querySelector(".colunaCheck");
  var idContainer = document.querySelector(".colunaID");
  var nomeContainer = document.querySelector(".colunaNome");
  var cpfContainer = document.querySelector(".colunaCPF");

  checkContainer.innerHTML = `<label class="hidden">In</label>`;
  idContainer.innerHTML = `<label><strong>ID</strong></label>`;
  nomeContainer.innerHTML = `<label><strong>Nome</strong></label>`;
  cpfContainer.innerHTML = `<label><strong>CPF</strong></label>`;

  for (let i = 0; i < usuarios.length; i++) {
    var checkElement = document.createElement("div");
    checkElement.className = "linhaCheck";
    var checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = "usuarioCheckbox";
    checkbox.id = usuarios[i].idUsuario;
    checkElement.appendChild(checkbox);
    checkContainer.appendChild(checkElement);

    var idElement = document.createElement("div");
    idElement.className = "linhaID";
    idElement.innerHTML = usuarios[i].idUsuario;
    idContainer.appendChild(idElement);

    var nomeElement = document.createElement("div");
    nomeElement.className = "linhaNome";
    nomeElement.innerHTML = usuarios[i].nome;
    nomeContainer.appendChild(nomeElement);

    var cpfElement = document.createElement("div");
    cpfElement.className = "linhaCPF";
    cpfElement.innerHTML = usuarios[i].cpf;
    cpfContainer.appendChild(cpfElement);
  }
}

const botaoExcluirUsuario = document.getElementById("botaoExcluirUsuario");

botaoExcluirUsuario.onclick = function () {
  const idUsuarioSelecionado = document.querySelectorAll('input[type="radio"]');
  idUsuarioSelecionado.forEach((radio) => {
    if (radio.checked) {
      deleteUsuario(radio.id);
    }
  });
};

const botaoNovoUsuario = document.getElementById("botaoNovoUsuario");

botaoNovoUsuario.onclick = function () {
  window.location.href = "cadastroUsuariosForms.html";
};

const botaoEditarUsuario = document.getElementById("botaoEditarUsuario");

botaoEditarUsuario.onclick = function () {
  const idUsuarioSelecionado = document.querySelectorAll('input[type="radio"]');
  idUsuarioSelecionado.forEach((radio) => {
    if (radio.checked) {
      window.location.href = `cadastroUsuariosForms.html?id=${radio.id}`;
    }
  });
};
