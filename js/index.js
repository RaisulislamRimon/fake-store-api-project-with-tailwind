const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data);
    });
};

const displayProducts = (data) => {
  let products = data
    .map((product) => {
      return `<div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button class="add-to-cart btn btn-primary" data-id="${product.id}">Add to cart</button>
        </div>`;
    })
    .join("");
  document.getElementById("products").innerHTML = products;
};

loadProducts();
