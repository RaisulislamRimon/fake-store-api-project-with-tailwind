const loadAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  setAllMenu(data);
};

const menuList = [];

const setAllMenu = (product) => {
  product.forEach((p) => {
    //checking the product is in menulist
    if (!menuList.includes(p.category)) {
      menuList.push(p.category);
    }
    const menu = document.getElementById("menu");
    const menuItem = document.createElement("li");
    console.log(p);
    menuItem.innerText = menuList;
    menu.appendChild(menuItem);
  });
};

loadAllProducts();
