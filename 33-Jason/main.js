// const shopItems = [
// {
//   "name": "Product 1",
//   "price": 19.18,
//   "description": "asdsadsadsad.",
//   "related": [
//     {"name": "lorem 1"},
//     {"name": "lorem 2"}
//   ]
// },
// {
//   name: "Product 2",
//   price: 19.18,
//   description: "asdsadsadsad."
// },
// {
//   name: "Product 3",
//   price: 19.18,
//   description: "asdsadsadsad."
// }
// ];

async function fetchShopItems(api) {
  const response = await fetch(api);
  const data = await response.json();

  return data;
}

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");
  console.log(shopItems);

  shopItems.forEach((shopItem) => {
      const listItem = document.createElement("li");
      listItem.classList.add("shop-item");
      console.log(listItem);

      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");

      const img = document.createElement("img");
      img.src = shopItem.thumbnail;

      const h2 = document.createElement("h2");
      h2.textContent = shopItem.title;

      const itemPrice = document.createElement("p");
      itemPrice.textContent = (" Price " + shopItem.price);

      const itemDesciption = document.createElement("p");
      itemDesciption.classList.add("description-container");
      itemDesciption.textContent = (shopItem.description);
      
      const div = document.createElement("div");
      div.classList.add("btn-container");

      const addCartBtn = document.createElement("button");
      addCartBtn.textContent = "Add to Cart";

      const viewMore = document.createElement("button");
      viewMore.textContent = "More Details";

      // listItem.innerHTML = `
      // <h2>${shopItem.title}</h2>
      // `;

      div.append(addCartBtn, viewMore);
      itemContainer.append(img, h2, itemPrice, itemDesciption, div);
      listItem.append(itemContainer);
      shoppingList.append(listItem);
  });
}

window.addEventListener('load', async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  console.log(shopItems);
  renderShopItems(shopItems.products);
});