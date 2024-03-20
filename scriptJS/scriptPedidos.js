let pedidos = [];
let pedidosFiltrados = [];

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getPedido() {
  try {
    const response = await API.get("/pedidos");
    pedidos = response.data;

    inserirLinha(pedidos);
  } catch (error) {
    console.error("Erro ao obter pedidos:", error);
  }
}

async function deletePedido(idPedido) {
  try {
    const response = await API.delete(`pedidos/${idPedido}`);
    console.log("Pedido deletado.");

    getPedido();
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

getPedido();

const inputOrder = document.getElementById("inputOrder");

inputOrder.oninput = (e) => {
  console.log(pedidos[2].previsaoEntrega); // MUDAR O TIPO DE CONSULTA SE QUISER
  pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.previsaoEntrega.includes(e.target.value.toLowerCase())
  );

  inserirLinha(pedidosFiltrados);
};

function inserirLinha(pedidos) {
  var checkContainer = document.querySelector(".colunaCheckP");
  var idContainer = document.querySelector(".colunaIDP");
  var valorContainer = document.querySelector(".colunaValor");
  var estimativaContainer = document.querySelector(".colunaEstimativa");
  var criadoContainer = document.querySelector(".colunaCriado");
  var pagamentoContainer = document.querySelector(".colunaPagamento");

  checkContainer.innerHTML = `<label class="hidden">In</label>`;
  idContainer.innerHTML = `<label><strong>ID</strong></label>`;
  valorContainer.innerHTML = `<label><strong>Valor Total</strong></label>`;
  estimativaContainer.innerHTML = `<label><strong>Estimativa Entrega</strong></label>`;
  criadoContainer.innerHTML = `<label><strong>Data Criado</strong></label>`;
  pagamentoContainer.innerHTML = `<label><strong>Forma de Pagamento</strong></label>`;

  for (let i = 0; i < pedidos.length; i++) {
    var checkElement = document.createElement("div");
    checkElement.className = "linhaCheckP";
    var checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = "pedidoCheckbox";
    checkbox.id = pedidos[i].idPedido;
    checkElement.appendChild(checkbox);
    checkContainer.appendChild(checkElement);

    var idElement = document.createElement("div");
    idElement.className = "linhaIDP";
    idElement.innerHTML = pedidos[i].idPedido;
    idContainer.appendChild(idElement);

    var valorElement = document.createElement("div");
    valorElement.className = "linhaValor";
    valorElement.innerHTML = pedidos[i].valorTotal.toFixed(2);
    valorContainer.appendChild(valorElement);

    var estimativaElement = document.createElement("div");
    estimativaElement.className = "linhaEstimativa";
    estimativaElement.innerHTML = pedidos[i].previsaoEntrega;
    estimativaContainer.appendChild(estimativaElement);

    var criadoElement = document.createElement("div");
    criadoElement.className = "linhaCriado";
    criadoElement.innerHTML = pedidos[i].dataCriado;
    criadoContainer.appendChild(criadoElement);

    var pagamentoElement = document.createElement("div");
    pagamentoElement.className = "linhaPagamento";
    if (pedidos[i].formaPagamento == 0) {
      pagamentoElement.innerHTML = `Cartão de Crédito`;
    } else if (pedidos[i].formaPagamento == 1) {
      pagamentoElement.innerHTML = `Boleto Bancario`;
    } else if (pedidos[i].formaPagamento == 2) {
      pagamentoElement.innerHTML = `PIX`;
    }
    pagamentoContainer.appendChild(pagamentoElement);
  }
}

const botaoExcluirPedido = document.getElementById("botaoExcluirPedido");

botaoExcluirPedido.onclick = function () {
  const idPedidoExcluir = document.querySelectorAll('input[type="radio"]');
  idPedidoExcluir.forEach((radio) => {
    if (radio.checked) {
      deletePedido(radio.id);
    }
  });
};

const botaoNovoPedido = document.getElementById("botaoNovoPedido");

botaoNovoPedido.onclick = function () {
  window.location.href = "cadastroPedidosForms.html";
};

const botaoEditarPedido = document.getElementById("botaoEditarPedido");

botaoEditarPedido.onclick = function () {
  const idUsuarioSelecionado = document.querySelectorAll('input[type="radio"]');
  idUsuarioSelecionado.forEach((radio) => {
    if (radio.checked) {
      window.location.href = `cadastroPedidosForms.html?id=${radio.id}`;
    }
  });
};
