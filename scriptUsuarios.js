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

getUsuario();

const inputUser = document.getElementById("inputUser");

console.log(inputUser);

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

  checkContainer.innerHTML = ``;
  idContainer.innerHTML = ``;
  nomeContainer.innerHTML = ``;
  cpfContainer.innerHTML = ``;

  for (let i = 0; i < usuarios.length; i++) {
    var checkElement = document.createElement("div");
    checkElement.className = "linhaCheck";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "usuarioCheckbox";
    checkbox.value = usuarios[i].idUsuario;
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
