const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userData = {
      name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "index.html";
  });
} else {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    window.location.href = "login.html";
  } else {
    const navbar = document.getElementById("navbar");
    const userItem = document.createElement("li");
    const welcomeText = document.createElement("span");
    const logoutButton = document.createElement("button");

    welcomeText.textContent = "Hi, " + userData.name;
    userItem.appendChild(welcomeText);

    logoutButton.textContent = "Log out";
    logoutButton.className = "blue logout-button";
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("userData");
      window.location.href = "login.html";
    });

    userItem.appendChild(logoutButton);
    navbar.appendChild(userItem);
  }
}
