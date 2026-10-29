const cartKey = "cart";

function getCart() {
  return JSON.parse(localStorage.getItem(cartKey)) || [];
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const item = cart.find(function (item) {
    return item.image === product.image;
  });

  if (item) {
    item.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  saveCart(cart);
  alert("Product added to cart");
}

document.querySelectorAll(".pro").forEach(function (card) {
  const cartLink = card.querySelector(".cart");
  if (!cartLink) return;

  cartLink.closest("a").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const priceText = card.querySelector(".des h4").textContent;
    const product = {
      image: card.querySelector("img").getAttribute("src"),
      name: card.querySelector(".des h5").textContent,
      price: Number(priceText.replace(/[^0-9.]/g, "")),
      quantity: 1,
    };

    addToCart(product);
  });
});

const productDetails = document.querySelector(".single-pro-details");
if (productDetails) {
  const addButton = productDetails.querySelector("button");

  addButton.addEventListener("click", function () {
    const quantity = Number(productDetails.querySelector('input[type="number"]').value);
    const priceText = productDetails.querySelector("h2").textContent;

    if (!Number.isInteger(quantity) || quantity < 1) {
      alert("Please enter a quantity of 1 or more");
      return;
    }

    addToCart({
      image: document.getElementById("MainImg").getAttribute("src"),
      name: productDetails.querySelector("h4").textContent,
      price: Number(priceText.replace(/[^0-9.]/g, "")),
      quantity: quantity,
    });
  });
}

const cartBody = document.querySelector("#cart tbody");
if (cartBody) {
  function showCart() {
    const cart = getCart();
    let subtotal = 0;

    if (cart.length === 0) {
      cartBody.innerHTML = '<tr><td colspan="6">Your cart is empty.</td></tr>';
    } else {
      cartBody.innerHTML = cart.map(function (item, index) {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        return `
          <tr>
            <td><button class="remove-item" data-index="${index}" type="button" aria-label="Remove ${item.name}">&times;</button></td>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input class="item-quantity" data-index="${index}" type="number" min="1" value="${item.quantity}"></td>
            <td>$${itemTotal.toFixed(2)}</td>
          </tr>
        `;
      }).join("");
    }

    document.getElementById("cart-subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("cart-total").textContent = "$" + subtotal.toFixed(2);
  }

  cartBody.addEventListener("change", function (event) {
    if (!event.target.classList.contains("item-quantity")) return;

    const cart = getCart();
    const index = Number(event.target.dataset.index);
    const quantity = Number(event.target.value);

    if (!Number.isInteger(quantity) || quantity < 1) {
      event.target.value = cart[index].quantity;
      return;
    }

    cart[index].quantity = quantity;
    saveCart(cart);
    showCart();
  });

  cartBody.addEventListener("click", function (event) {
    if (!event.target.classList.contains("remove-item")) return;

    const cart = getCart();
    cart.splice(Number(event.target.dataset.index), 1);
    saveCart(cart);
    showCart();
  });

  showCart();
}
