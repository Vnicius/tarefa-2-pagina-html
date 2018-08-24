class Product {
  constructor(id, name, price, description, url) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.url = url;
    this.description = description;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getPrice() {
    return formatMoney(this.price);
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
    const elementShoppingList = document.getElementById("shopping-list-title");
    elementShoppingList.innerHTML = `Shopping List $(${this.getTotalPrice()})`;
  }

  getProducts() {
    return this.products;
  }

  setProducts(products) {
    products.forEach(p => {
      this.addProduct(p);
    });
  }

  getTotalPrice() {
    var total = 0.0;
    this.products.forEach(product => {
      total += parseFloat(product.getPrice());
    });
    return formatMoney(total);
  }

  getUniqueProducts() {
    const uniqueProducts = [];
    this.products.forEach(product => {
      const index = uniqueProducts.findIndex(
        element => element.product.id === product.id
      );
      if (index === -1) {
        uniqueProducts.push({ product, quant: 1 });
      } else {
        uniqueProducts[index].quant += 1;
      }
    });

    return uniqueProducts;
  }
}
