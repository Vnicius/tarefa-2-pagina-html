window.onload = () => {
  class Product {
    constructor(name, price, description, url) {
      this.name = name;
      this.price = price;
      this.url = url;
      this.description = description;
    }

    getName() {
      return this.name;
    }

    getPrice() {
      return this.price;
    }

    getDescription() {
      return this.description;
    }

    getURL() {
      return this.url;
    }
  }

  class Category {
    constructor(type, products = []) {
      this.type = type;
      this.products = products;
    }

    getType() {
      return this.type;
    }

    getProducts() {
      return this.products;
    }

    addProduct(product) {
      this.products.push(product);
    }
  }

  class ShoppingList {
    constructor() {
      this.products = [];
    }

    addProduct(product) {
      this.products.push(product);
    }

    getProducts() {
      return this.products;
    }
  }

  const stack = [];
  // stack.push("item");
  // stack.pop();

  /**
   * Constante para os tipos de categorias disponíveis
   */
  const categories = [
    "Automotivo",
    "Celulares e Comunicação",
    "Educação",
    "Eletrônicos, TV e Áudio",
    "Eletrodomésticos",
    "Eletroportáteis"
  ];

  function showProductList(products) {
    const productList = document.getElementById("list-products");
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
    products.forEach(product => {
      const article = document.createElement("article");
      article.setAttribute("class", "product");

      const img = document.createElement("img");
      img.setAttribute("src", product.getURL());
      img.setAttribute("class", "product-thumb");

      const a = document.createElement("a");
      a.setAttribute("href", "#");
      a.setAttribute("class", "product-name");
      a.appendChild(document.createTextNode(product.getName()));

      const div = document.createElement("div");
      const strong = document.createElement("strong");
      strong.setAttribute("class", "product-price");
      strong.appendChild(document.createTextNode(product.getPrice()));

      const button = document.createElement("button");
      button.setAttribute("class", "product-btn-add");
      button.appendChild(document.createTextNode("Add"));

      div.appendChild(strong);
      div.appendChild(button);

      article.appendChild(img);
      article.appendChild(a);
      article.appendChild(div);

      productList.appendChild(article);
    });
  }

  function onClickCategory(category) {
    showProductList(category.getProducts());
  }

  /**
   * Gerar lista de categorias dinamicamento no HTML
   * @param {Array} categories Lista contendo as categorias
   */
  function generateCategoryList(categories) {
    const ul = document.getElementById("list-categories");

    categories.forEach(category => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.setAttribute("class", "category-button");

      div.addEventListener("click", function(e) {
        e.preventDefault();
        onClickCategory(category);
      });

      div.appendChild(document.createTextNode(category.getType()));
      li.appendChild(div);
      ul.appendChild(li);
    });

    function productPage(productId) {
      // TODO: Adiconar os ids do produtos no shopping list
      window.location.href = `product/index.html?id=${productId}`;
    }
  }

  //// Main

  /**
   * Lista que irá conter os objetos Categoria
   */
  const categoriesList = [];
  /**
   * Popula a lista de categorias
   */
  categories.forEach(c => {
    categoriesList.push(
      new Category(
        c,
        products
          .filter(p => p.category === c)
          .map(
            product =>
              new Product(
                product.name,
                product.price,
                product.description,
                product.picture
              )
          )
      )
    );
  });
  // categoriesList.forEach(cl => console.log(cl.getType(), cl.getProducts()));

  /**
   * Preeche lista no html dinamicamente
   */
  generateCategoryList(categoriesList);
};
