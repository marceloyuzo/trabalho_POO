const url = new URL(document.location.href);
const id = url.searchParams.get("id");
var produtos = [];

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getProduto() {
  try {
    const response = await API.get(`/produtos/${id}`);
    produtos = response.data;

    const produtoInfo = document.getElementsByClassName("produto")[0];

    produtoInfo.children[0].innerHTML = produtos.nomeProduto;
    produtoInfo.children[1].children[0].src = produtos.foto;
    produtoInfo.children[2].children[1].innerHTML = produtos.descricao;
    produtoInfo.children[1].children[1].children[0].innerHTML = `R$ ${produtos.valorUnitario.toFixed(
      2
    )}`;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

getProduto();

const comprarBotao = document.getElementById("comprarBotao");

comprarBotao.onclick = function () {
  window.location.href = `formaPagamento.html?id=${produtos.idProduto}`;
};

const botaoExcluirPedido = document.getElementById("botaoExcluirPedido");

botaoExcluirPedido.onclick = function () {
  const idUsuarioSelecionado = document.querySelectorAll('input[type="radio"]');
  idUsuarioSelecionado.forEach((radio) => {
    if (radio.checked) {
      deleteUsuario(radio.id);
    }
  });
};

const botaoNovoPedido = document.getElementById("botaoNovoPedido");

botaoNovoPedido.onclick = function () {
  window.location.href = "cadastroUsuariosForms.html";
};

const botaoEditarPedido = document.getElementById("botaoEditarPedido");

botaoEditarPedido.onclick = function () {
  const idUsuarioSelecionado = document.querySelectorAll('input[type="radio"]');
  idUsuarioSelecionado.forEach((radio) => {
    if (radio.checked) {
      window.location.href = `cadastroUsuariosForms.html?id=${radio.id}`;
    }
  });
};
