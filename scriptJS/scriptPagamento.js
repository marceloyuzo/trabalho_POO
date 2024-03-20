const url = new URL(document.location.href);
const id = url.searchParams.get("id");

const botaoFinalizar = document.getElementById("botaoFinalizar");
const radioPagamento = document.querySelectorAll('input[type="radio"]');

botaoFinalizar.onclick = function () {
  let algumSelecionado = false;
  let idPagamento;
  radioPagamento.forEach((radio) => {
    if (radio.checked) {
      algumSelecionado = true;
      idPagamento = radio.id;
    }
  });

  window.location.href = `telaFeedback.html?id=${id}&pagamento=${idPagamento}`;
  if (!algumSelecionado) {
    alert("Por favor, selecione uma opção de pagamento.");
    return;
  }
};
