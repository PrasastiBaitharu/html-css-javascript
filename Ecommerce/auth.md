# How `auth.js` Works

This guide explains the simple login demo used by this project.

## The login form

The login form is in `login.html`. Its `id` is `login-form`, and the page loads the JavaScript file with:

```html
<script src="auth.js"></script>
```

When `auth.js` runs, it looks for that form:

```js
const loginForm = document.getElementById("login-form");
```

The script runs when the page loads. It does not wait for a button click to run. The form's submit listener waits for the user to submit the form.

## Saving the entered details

When the form is submitted, this listener runs:

```js
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // ...
});
```

`event.preventDefault()` stops the browser from reloading the page as it normally would when submitting a form.

The script reads each input and puts the values into one object:

```js
const userData = {
  name: document.getElementById("username").value,
  email: document.getElementById("email").value,
  password: document.getElementById("password").value,
};
```

For example, the object could look like:

```js
{
  name: "Sam",
  email: "sam@example.com",
  password: "example-password"
}
```

Next, `JSON.stringify()` converts the object into text because `localStorage` stores text:

```js
localStorage.setItem("userData", JSON.stringify(userData));
```

After saving it, the browser opens the home page:

```js
window.location.href = "index.html";
```

## Checking other pages

The login page has the `login-form`, so `loginForm` contains the form element and the first `if` block runs.

The shop pages do not have that form. On those pages, `getElementById()` returns `null`, so the `else` block runs instead:

```js
const userData = JSON.parse(localStorage.getItem("userData"));
```

`getItem()` reads the saved text, and `JSON.parse()` converts it back into an object. If nothing was saved, `userData` is `null`, and the visitor is sent to the login page:

```js
if (!userData) {
  window.location.href = "login.html";
}
```

If an object was saved, the page displays the name and creates a **Log out** button:

```js
welcomeText.textContent = "Hi, " + userData.name;
```

Clicking **Log out** deletes the saved object and returns to the login page:

```js
localStorage.removeItem("userData");
window.location.href = "login.html";
```

## Important limitation

This is a simple front-end demonstration, not real authentication. It does not check whether an account exists, and the password is saved as plain text in browser storage. Do not enter real passwords or sensitive information.
