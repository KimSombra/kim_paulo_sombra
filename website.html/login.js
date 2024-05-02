const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "kim" && password === "123") {
        alert("You have successfully logged in.");
        location="act3.html";
        return true;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})