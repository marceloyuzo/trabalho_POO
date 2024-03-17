const API = axios.create({
  baseURL: "http://localhost:3000",
});

let produtos = [];

async function getProduto() {
  const response = await API.get("/produtos");
  produtos = response.data;
  console.log(produtos);
}

getProduto()
  .then(() => {
    var item = document.getElementsByClassName("item");
    for (let i = 0; i < item.length; i++) {
      item[i].children[0].src = produtos[i].Foto;
      item[i].children[1].innerHTML = produtos[i].nomeProduto;
      item[i].children[2].innerHTML = formatarValorMonetario(
        produtos[i].valorUnitario
      );
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

function formatarValorMonetario(valor) {
  // Formatar o valor monetário para manter os centavos mesmo que sejam zero
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
