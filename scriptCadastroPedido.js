const url = new URL(document.location.href);

if (url.search == "") {
  document.getElementById("botaoSalvar").addEventListener("click", function () {
    // Obtendo os valores dos campos de entrada
    var idPedido = document.getElementById("idPedidoInput").value;
    var idUsuario = document.getElementById("idUsuarioInput").value;
    var idProduto = document.getElementById("idProdutoInput").value;
    var previsao = document.getElementById("previsaoInput").value;
    var criado = document.getElementById("criadoInput").value;
    var valorFrete = document.getElementById("freteInput").value;
    var valorTotal = document.getElementById("valorInput").value;
    var formaPagamento = document.getElementById("pagamentoInput").value;
    var estado = document.getElementById("estadoInput").value;

    var pedido = {
      idPedido: idPedido,
      valorTotal: valorTotal,
      previsao: previsao,
      criado: criado,
      valorFrete: valorFrete,
      formaPagamento: formaPagamento,
      estado: estado,
      idUsuario: idUsuario,
      idProduto: idProduto,
    };
    // Enviando os dados para o backend
    fetch("http://localhost:8080/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    })
      .then((response) => {
        if (response.ok) {
          alert("Pedido cadastrado com sucesso!");
          window.location.href = "cadastroProdutos.html";
        } else {
          console.error("Erro ao cadastrar pedido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
  });
} else {
  const id = url.searchParams.get("id");
  let pedidoGET = [];

  async function getPedido() {
    try {
      const response = await API.get(`/pedidos/${id}`);
      pedidoGET = response.data;
      var iidPedido = document.getElementById("idPedidoInput");
      var iidUsuario = document.getElementById("idUsuarioInput");
      var iidProduto = document.getElementById("idProdutoInput");
      var iprevisao = document.getElementById("previsaoInput");
      var icriado = document.getElementById("criadoInput");
      var ivalorFrete = document.getElementById("freteInput");
      var ivalorTotal = document.getElementById("valorInput");
      var iformaPagamento = document.getElementById("pagamentoInput");
      var iestado = document.getElementById("estadoInput");

      iidPedido.value = pedidoGET.idPedido;
      iidUsuario.value = pedidoGET.idUsuario;
      iidProduto.value = pedidoGET.idProduto;
      iprevisao.value = pedidoGET.previsaoEntrega;
      icriado.value = pedidoGET.dataCriado;
      ivalorFrete.value = pedidoGET.valorFrete;
      ivalorTotal.value = pedidoGET.valorTotal;
      iformaPagamento.value = pedidoGET.formaPagamento;
      iestado.value = pedidoGET.estado;
    } catch (error) {
      console.error("Erro ao obter pedido:", error);
    }
  }

  getPedido();

  document.getElementById("botaoSalvar").addEventListener("click", function () {
    // Obtendo os valores dos campos de entrada
    var idUsuario = document.getElementById("idUsuarioInput").value;
    var idProduto = document.getElementById("idProdutoInput").value;
    var previsao = document.getElementById("previsaoInput").value;
    var criado = document.getElementById("criadoInput").value;
    var valorFrete = document.getElementById("freteInput").value;
    var valorTotal = document.getElementById("valorInput").value;
    var formaPagamento = document.getElementById("pagamentoInput").value;
    var estado = document.getElementById("estadoInput").value;

    var pedido = {
      idPedido: pedidoGET.idPedido,
      valorTotal: valorTotal,
      previsao: previsao,
      criado: criado,
      valorFrete: valorFrete,
      formaPagamento: formaPagamento,
      estado: estado,
      idUsuario: idUsuario,
      idProduto: idProduto,
    };

    // Enviando os dados para o backend
    fetch(`http://localhost:8080/pedidos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    })
      .then((response) => {
        if (response.ok) {
          alert("Pedido atualizado com sucesso!");
          window.location.href = "cadastroPedidos.html";
        } else {
          console.error("Erro ao atualizar o pedido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
  });
}
