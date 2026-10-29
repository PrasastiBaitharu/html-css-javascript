# Cara Ecommerce Website

A beginner-friendly ecommerce website built with HTML, CSS, and JavaScript. It demonstrates basic page navigation, a simple browser-based login screen, and a shopping cart.

## Run the project

1. Open the project folder in Visual Studio Code.
2. Start a local web server, for example with the **Live Server** extension.
3. Open `login.html` in the browser through the local server.
4. Enter a name, email, and password, then click **Login**.
5. Browse the products and click a cart icon to add an item. Open the cart icon in the navigation bar to see the cart.

The project has no package installation or build step.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Home page with featured products |
| `shop.html` | Product listing |
| `sproduct.html` | Product details and related products |
| `cart.html` | Cart items, quantities, and totals |
| `login.html` | Simple login form |
| `about.html` | About page |
| `blog.html` | Blog page |
| `contact.html` | Contact page |
| `style.css` | Styles shared by the pages |
| `auth.js` | Saves the entered user details and checks whether a user is saved on other pages |
| `cart.js` | Adds products to the cart and updates cart quantities and totals |
| `img/` | Product photos, banners, icons, and other images |

For beginner-friendly explanations of the scripts, see [auth.md](./auth.md) and [card.md](./card.md).

## How the login demo works

When the login form is submitted, `auth.js` puts the entered details into a JavaScript object and saves it in the browser's `localStorage`:

```js
const userData = {
  name: "...",
  email: "...",
  password: "...",
};
```

The other pages check whether `userData` exists. If it does, they show a welcome message and a **Log out** button. Logging out removes the saved object.

This is only a front-end demonstration. It does not verify an account or provide secure authentication. The password is saved as plain text in browser storage, so do not use real or sensitive credentials.

## How the cart works

`cart.js` saves cart items as an array of product objects in `localStorage`. Each item has an image, name, price, and quantity. Clicking a product's cart icon adds one item; clicking it again increases that item's quantity. On the cart page, you can change the quantity or remove an item. The line subtotal is `price × quantity`, and the cart total is the sum of the line subtotals. Shipping is currently free.

The coupon and checkout controls are visual placeholders and do not process orders.

## Reset saved demo data

The login and cart are saved in the current browser. To reset them, open the browser developer console on this site and run:

```js
localStorage.removeItem("userData");
localStorage.removeItem("cart");
```
