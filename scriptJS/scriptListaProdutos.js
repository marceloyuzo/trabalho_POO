const url = new URL(document.location.href);
var categoria = url.searchParams.get("categoria");
var produtos = [];

if (categoria == "guarda_roupa") {
  categoria = "guarda roupa";
}

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getProdutos() {
  try {
    console.log(categoria);
    const response = await API.get(`/produtos/categoria/${categoria}`);
    produtos = response.data;
    var item = document.getElementsByClassName("item");

    inserirItem(produtos);
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
}

getProdutos();

function inserirItem(produtos) {
  var container = document.querySelector(".containerMenuInicial");

  container.innerHTML = `      
  <div class="titulo">
    <label>Produtos</label>
    <div class="linha"></div>
  </div>`;

  for (let i = 0; i < Math.ceil(produtos.length / 5); i++) {
    var listaElement = document.createElement("div");
    listaElement.className = "listaItem";

    for (let j = i * 5; j < (i + 1) * 5; j++) {
      var item = document.createElement("a");
      item.className = "item";
      item.href = `telaProduto.html?id=${produtos[i].idProduto}`;

      if (j < produtos.length) {
        var fotoItem = document.createElement("img");
        fotoItem.className = "fotoItem";
        fotoItem.src = produtos[j].foto;

        var nomeProduto = document.createElement("label");
        nomeProduto.innerHTML = `${produtos[j].nomeProduto}<br />`;

        var precoProduto = document.createElement("label");
        precoProduto.innerHTML = `R$ ${produtos[j].valorUnitario.toFixed(2)}`;

        item.appendChild(fotoItem);
        item.appendChild(nomeProduto);
        item.appendChild(precoProduto);
      } else {
        // Se não houver produto disponível, adicione um item com classe hidden
        item.classList.add("hidden");
      }

      listaElement.appendChild(item);
    }

    container.appendChild(listaElement);
  }
}
