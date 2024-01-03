// signup js
let exampleInputPassword = document.getElementById("exampleInputPassword");
let exampleInputEmail = document.getElementById("exampleInputEmail");
let loginButton = document.getElementById("loginButton");
let passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginButton.addEventListener("click", () => {
  if (exampleInputEmail.value.trim() == "") {
    alert("Enter Email");
  } else if (exampleInputPassword.value.trim() == "") {
    alert("Enter Password");
  } else if (!passwordRegex.test(exampleInputPassword.value.trim())) {
    alert("Enter a strong password");
  }
});
