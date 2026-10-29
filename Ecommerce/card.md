# How `cart.js` Works

This guide explains how the shopping cart is stored and updated in this project. The file is named `cart.js` (cart, not card).

## Cart storage

At the top of the file, `cartKey` stores the name used to save the cart in the browser:

```js
const cartKey = "cart";
```

The cart is an array of product objects. A product object has an image path, name, price, and quantity:

```js
{
  image: "./img/products/f1.jpg",
  name: "Cartoon Astronaut T-Shirts",
  price: 78,
  quantity: 1
}
```

`getCart()` reads the cart from `localStorage`. Since `localStorage` stores text, `JSON.parse()` converts the saved text back into an array. If there is no saved cart, it returns an empty array:

```js
function getCart() {
  return JSON.parse(localStorage.getItem(cartKey)) || [];
}
```

`saveCart()` does the reverse: `JSON.stringify()` converts the array into text so it can be saved:

```js
function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}
```

## Adding a product from a product card

The script finds each product card with the class `.pro`. For each card, it finds the cart icon and adds a click listener.

When the icon is clicked, the script reads the product's image, name, and price from that card. It creates a product object with quantity `1`, then passes that object to `addToCart()`.

The click handler also calls:

```js
event.preventDefault();
event.stopPropagation();
```

These stop the `#` link from navigating and prevent the click from triggering the card's own click behavior.

## Adding products to the array

`addToCart(product)` first loads the current array:

```js
const cart = getCart();
```

Then `find()` checks each object in the array and returns the first one with the same image:

```js
const item = cart.find(function (item) {
  return item.image === product.image;
});
```

- If `item` was found, that product is already in the cart, so its quantity increases.
- If no match was found, `find()` returns `undefined`, and the new product is added with `push()`.

At the end, `saveCart(cart)` saves the updated array. This means adding the same product again increases its quantity instead of creating another row.

## Adding from the product details page

The product details page has a quantity input and an **Add To Cart** button. `cart.js` reads the chosen quantity, name, image, and price when the button is clicked.

The quantity must be a whole number of at least `1`. If it is invalid, the script shows a message and does not add the product. Otherwise, it passes the product object and selected quantity to `addToCart()`.

## Showing and calculating the cart

On `cart.html`, the script finds the cart table body:

```js
const cartBody = document.querySelector("#cart tbody");
```

`showCart()` loads the saved array and creates one table row for each product. Each row displays the product information, quantity input, and line subtotal.

The line subtotal is calculated as:

```js
const itemTotal = item.price * item.quantity;
```

The script adds each line subtotal to `subtotal`. It then puts the resulting amount in both the cart subtotal and total fields. Shipping is shown as free, so it does not change the total.

If the array is empty, the table displays **Your cart is empty.**

## Changing quantity or removing a product

- When a quantity input changes, the script checks that the new value is a whole number of at least `1`. It saves the new quantity and calls `showCart()` to recalculate and redraw the table.
- When a remove button is clicked, `splice()` removes that product from the array. The updated cart is saved, and `showCart()` redraws the table and totals.

## Try it

1. Open the project using a local web server and log in.
2. Click a product's cart icon.
3. Open the cart page to view the item and subtotal.
4. Change its quantity or remove it.
5. Reload the page; the cart remains because it is stored in `localStorage`.

The coupon and checkout buttons are placeholders and do not process a purchase.
