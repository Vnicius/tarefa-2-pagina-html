window.onload = () => {
	function formatMoney(money) {
		return parseFloat(money)
			.toFixed(2)
			.replace(/\d(?=(\d{3})+\.)/g, '$&,');
	}

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
			const elementShoppingList = document.getElementById('shopping-list-title');
			elementShoppingList.innerHTML = `Shopping List $(${this.getTotalPrice()})`;
		}

		getProducts() {
			return this.products;
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
				const index = uniqueProducts.findIndex(element => element.product.id === product.id);
				if (index === -1) {
					uniqueProducts.push({ product, quant: 1 });
				} else {
					uniqueProducts[index].quant += 1;
				}
			});

			return uniqueProducts;
		}
	}

	const shoppingList = new ShoppingList();

	function productPage(productId) {
		var ids = '';
		shoppingList.getProducts().forEach(product => {
			ids += product.id + ',';
		});

		ids = ids.slice(0, ids.length - 1);

		window.location.href = `product/index.html?id=${productId}&shoppingList=${ids}`;
	}

	function updateCart(list) {
		const ulCart = document.getElementById('shopping-cart-list');
		while (ulCart.firstChild) {
			ulCart.removeChild(ulCart.firstChild);
		}

		list.forEach(element => {
			var li = document.createElement('li');
			li.innerHTML = `${element.product.getName()}   [${element.quant}]   R$${element.product.getPrice()}`;
			ulCart.appendChild(li);
		});
	}

	function cartHover() {
		const listDOM = document.getElementById('shopping-list');
		const shoppingCart = document.getElementById('shopping-cart');

		listDOM.addEventListener('mouseenter', e => {
			shoppingCart.setAttribute('class', 'show');
			updateCart(shoppingList.getUniqueProducts());
		});

		document.getElementById('list-products').addEventListener('mouseenter', e => {
			shoppingCart.setAttribute('class', 'hide');
		});
	}

	cartHover();

	/**
	 * Constante para os tipos de categorias disponíveis
	 */
	const categories = [
		'Automotivo',
		'Celulares e Comunicação',
		'Educação',
		'Eletrônicos, TV e Áudio',
		'Eletrodomésticos',
		'Eletroportáteis',
	];

	function showProductList(products) {
		const productList = document.getElementById('list-products');
		while (productList.firstChild) {
			productList.removeChild(productList.firstChild);
		}

		products.forEach(product => {
			const article = document.createElement('article');
			article.setAttribute('class', 'product');

			const img = document.createElement('img');
			img.setAttribute('src', product.getURL());
			img.setAttribute('class', 'product-thumb');
			img.addEventListener('click', function(e) {
				e.preventDefault();
				productPage(product.getID());
			});

			const a = document.createElement('a');
			a.setAttribute('href', '#');
			a.setAttribute('class', 'product-name');
			a.appendChild(document.createTextNode(product.getName()));
			a.addEventListener('click', function(e) {
				e.preventDefault();
				productPage(product.getID());
			});

			const div = document.createElement('div');
			const strong = document.createElement('strong');
			strong.setAttribute('class', 'product-price');
			strong.appendChild(document.createTextNode(`R$${product.getPrice()}`));

			const button = document.createElement('button');
			button.setAttribute('class', 'product-btn-add');
			button.appendChild(document.createTextNode('Add'));

			button.addEventListener('click', function(e) {
				e.preventDefault();
				shoppingList.addProduct(product);
			});

			div.appendChild(strong);
			div.appendChild(button);

			article.appendChild(img);
			article.appendChild(a);
			article.appendChild(div);

			productList.appendChild(article);
		});
	}

	function onClickCategory(category) {
		setStack(category.getType());
		showProductList(category.getProducts());
	}

	/**
	 * Gerar lista de categorias dinamicamento no HTML
	 * @param {Array} categories Lista contendo as categorias
	 */
	function generateCategoryList(categories) {
		const ul = document.getElementById('list-categories');

		categories.forEach(category => {
			const li = document.createElement('li');
			const div = document.createElement('div');
			div.setAttribute('class', 'category-button');

			div.addEventListener('click', function(e) {
				e.preventDefault();
				onClickCategory(category);
			});

			div.appendChild(document.createTextNode(category.getType()));
			li.appendChild(div);
			ul.appendChild(li);
		});
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
							new Product(product.id, product.name, product.price, product.description, product.picture)
					)
			)
		);
	});
	// categoriesList.forEach(cl => console.log(cl.getType(), cl.getProducts()));

	/**
	 * Preeche lista no html dinamicamente
	 */
	generateCategoryList(categoriesList);

	function setStack(categoryType) {
		const stackPages = document.getElementById('stack-pages');

		while (stackPages.firstChild) {
			stackPages.removeChild(stackPages.firstChild);
		}
		const a1 = document.createElement('a');
		a1.setAttribute('href', '#');
		a1.appendChild(document.createTextNode('Home'));
		stackPages.appendChild(a1);

		stackPages.appendChild(document.createTextNode(' → '));

		const a3 = document.createElement('a');
		a3.setAttribute('href', '#');
		a3.appendChild(document.createTextNode(categoryType));
		stackPages.appendChild(a3);
	}
};
