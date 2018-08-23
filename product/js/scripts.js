function getQuery() {
  var result = {};
  var keyValuePairs = location.search.slice(1).split("&");

  keyValuePairs.forEach(valuePair => {
    valuePair = valuePair.split("=");
    result[decodeURIComponent(valuePair[0])] = decodeURIComponent(valuePair[1]);
    if (result["shoppingList"]) {
      result.shoppingList = result.shoppingList.split(",");
    }
  });

  return result;
}

function getProductById(id) {
  var product = {};

  products.forEach(p => {
    if (p.id === id) {
      product = p;
    }
  });

  return product;
}

function fillProduct(product) {
  var productThumb = document.getElementById("product-thumb");
  var productName = document.getElementById("product-name");
  var productPrice = document.getElementById("product-price");
  var productDescription = document.getElementById("product-description");

  productThumb.setAttribute("src", product.picture);
  productName.innerHTML = product.name;
  productPrice.innerHTML = product.price;
  productDescription.innerHTML = product.description;
}

// TODO: FUNÇÃO DO BOTÃO ADD
// TODO: ATUALIZAR STACK
// TODO: ATUALIZAR SHOPPING LIST
// TDOO: AÇÃO DAS CATEGORIAS

const params = getQuery();

window.onload = () => {
  var product = getProductById(params.id);
  if (product) {
    fillProduct(product);
  } else {
    alert("Produto Inexistente");
  }
};
