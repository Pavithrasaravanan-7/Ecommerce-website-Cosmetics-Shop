const products = [
  {
    id: 1,
    name: "Maybelline Fit Me Foundation",
    price: 499,
    img: "foundation.png"
  },
  {
    id: 2,
    name: " Lipstick Red Coat",
    price: 299,
    img: "Lipstick.png"
  },
  {
    id: 3,
    name: "compact Powder",
    price: 899,
    img: "Compact powder.webp"
  },
  {
    id: 4,
    name: "Eyeliner",
    price: 399,
    img: "Eyeliner.webp"
  },
  {
    id: 5,
    name: "Blush",
    price: 399,
    img: "Blush.webp"
  },
  {
    id: 6,
    name: "Eyeshadow",
    price: 399,
    img: "Eyeshadow.png"
  },
  {
    id: 7,
    name: "Lip Balm",
    price: 399,
    img: "Lip Balm.png"
  },
  {
    id: 8,
    name: "Mascara",
    price: 399,
    img: "Mascara.avif"
  },
  {
    id: 9,
    name: "Makeup Remover",
    price: 399,
    img: "Makeup Remover.webp"
  },
  {
    id: 10,
    name: "Eyeliner",
    price: 399,
    img: "Eyeliner.webp"
  },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(filter = "") {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <div class="details">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchText = e.target.value;
  displayProducts(searchText);
});

displayProducts();
