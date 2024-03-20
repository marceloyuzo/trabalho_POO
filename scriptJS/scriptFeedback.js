const hoje = new Date();
var ano = hoje.getFullYear();
var mes = String(hoje.getMonth() + 1).padStart(2, "0");
var dia = String(hoje.getDate()).padStart(2, "0");

const dataFormatada = `${ano}-${mes}-${dia}`;

const previsao = new Date();
previsao.setDate(previsao.getDate() + 10);
var ano = previsao.getFullYear();
var mes = String(previsao.getMonth() + 1).padStart(2, "0");
var dia = String(previsao.getDate()).padStart(2, "0");

const previsaoFormatada = `${ano}-${mes}-${dia}`;

let produto = [];
const url = new URL(document.location.href);
const id = url.searchParams.get("id");
const pagamento = url.searchParams.get("pagamento");
var pedido = {
  valorTotal: 0,
  previsaoEntrega: "",
  dataCriado: "",
  valorFrete: 15.0,
  formaPagamento: 0,
  estado: 0,
  idUsuario: null,
  idProduto: 0,
};

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getProduto() {
  try {
    const response = await API.get(`/produtos/${id}`);
    produto = response.data;
    pedido = criarPedido(produto);
    await postPedido(pedido);
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

async function postPedido() {
  try {
    const response = await API.post(`/pedidos`, pedido);
    console.log("Pedido criado com sucesso:", response.data);
    pedido = response.data;

    const nroPedido = document.getElementById("nroPedido");
    const tipoPagamento = document.getElementById("tipoPagamento");
    const valorTotal = document.getElementById("valorTotal");
    const previsaoEntrega = document.getElementById("previsaoEntrega");
    const nomeProduto = document.getElementById("nomeProduto");

    nroPedido.innerHTML = pedido.idPedido;
    if (pagamento == 0) {
      tipoPagamento.innerHTML = "Cartão de Crédito";
    } else if (pagamento == 1) {
      tipoPagamento.innerHTML = "Boleto";
    } else if (pagamento == 2) {
      tipoPagamento.innerHTML = "PIX";
    }
    valorTotal.innerHTML = `R$ ${pedido.valorTotal.toFixed(2)}`;
    previsaoEntrega.innerHTML = previsaoFormatada;
    nomeProduto.innerHTML = produto.nomeProduto;
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
  }
}

getProduto();

function criarPedido(produto) {
  pedido.valorTotal = produto.valorUnitario + 15.0;
  pedido.previsaoEntrega = previsaoFormatada;
  pedido.dataCriado = dataFormatada;
  pedido.valorFrete = 15.0;
  pedido.formaPagamento = pagamento;
  pedido.estado = 0;
  pedido.idUsuario = null;
  pedido.idProduto = id;

  return pedido;
}
