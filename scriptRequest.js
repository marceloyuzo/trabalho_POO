/***************************
            REQUEST 
 ****************************/
let produtosCadeira = [];
let produtosMesa = [];
let produtosCama = [];
let produtosGuardaRoupa = [];
let produtosRack = [];
let produtosEstante = [];

function formatarValorMonetario(valor) {
  // Formatar o valor monetário para manter os centavos mesmo que sejam zero
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const API = axios.create({
  baseURL: "http://localhost:8080",
});

async function getCadeira() {
  const response = await API.get("/produtos/categoria/cadeira");
  produtosCadeira = response.data;
}

async function getMesa() {
  const response = await API.get("/produtos/categoria/mesa");
  produtosMesa = response.data;
}

async function getCama() {
  const response = await API.get("/produtos/categoria/cama");
  produtosCama = response.data;
}

async function getGuardaRoupa() {
  const response = await API.get("/produtos/categoria/guarda roupa");
  produtosGuardaRoupa = response.data;
}

async function getRack() {
  const response = await API.get("/produtos/categoria/rack");
  produtosRack = response.data;
}

async function getEstante() {
  const response = await API.get("/produtos/categoria/estante");
  produtosEstante = response.data;
}

/********************
     MENU INICIAL 
*********************/

getCadeira()
  .then(() => {
    console.log(produtosCadeira);
    var item = document.getElementsByClassName("item");
    for (let i = 0; i < 5; i++) {
      item[i].href = `telaProduto.html?id=${produtosCadeira[i].idProduto}`;
      item[i].children[0].src = produtosCadeira[i].foto;
      item[i].children[1].innerHTML = produtosCadeira[i].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosCadeira[
        i
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

getMesa()
  .then(() => {
    var item = document.getElementsByClassName("item");
    for (let i = 5; i < 10; i++) {
      item[i].href = `telaProduto.html?id=${produtosMesa[i - 5].idProduto}`;
      item[i].children[0].src = produtosMesa[i - 5].foto;
      item[i].children[1].innerHTML = produtosMesa[i - 5].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosMesa[
        i - 5
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

getCama()
  .then(() => {
    var item = document.getElementsByClassName("item");
    for (let i = 10; i < 15; i++) {
      item[i].href = `telaProduto.html?id=${produtosCama[i - 10].idProduto}`;
      item[i].children[0].src = produtosCama[i - 10].foto;
      item[i].children[1].innerHTML = produtosCama[i - 10].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosCama[
        i - 10
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

getGuardaRoupa()
  .then(() => {
    console.log(produtosGuardaRoupa);
    var item = document.getElementsByClassName("item");
    for (let i = 15; i < 20; i++) {
      item[i].href = `telaProduto.html?id=${
        produtosGuardaRoupa[i - 15].idProduto
      }`;
      item[i].children[0].src = produtosGuardaRoupa[i - 15].foto;
      item[i].children[1].innerHTML = produtosGuardaRoupa[i - 15].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosGuardaRoupa[
        i - 15
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

getRack()
  .then(() => {
    var item = document.getElementsByClassName("item");
    for (let i = 20; i < 25; i++) {
      item[i].href = `telaProduto.html?id=${produtosRack[i - 20].idProduto}`;
      item[i].children[0].src = produtosRack[i - 20].foto;
      item[i].children[1].innerHTML = produtosRack[i - 20].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosRack[
        i - 20
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });

getEstante()
  .then(() => {
    var item = document.getElementsByClassName("item");
    for (let i = 25; i < 30; i++) {
      item[i].href = `telaProduto.html?id=${produtosEstante[i - 25].idProduto}`;
      item[i].children[0].src = produtosEstante[i - 25].foto;
      item[i].children[1].innerHTML = produtosEstante[i - 25].nomeProduto;
      item[i].children[2].innerHTML = `R$ ${produtosEstante[
        i - 25
      ].valorUnitario.toFixed(2)}`;
    }
  })
  .catch((error) => {
    console.error("Erro ao obter produtos:", error);
  });
