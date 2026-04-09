let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.innerHTML = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  totalDiv.innerHTML = `Total: ₹${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
