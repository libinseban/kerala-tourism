// signin js
  let newPassword = document.getElementById("NewPassword");
  let repeatPassword = document.getElementById("repeatPassword");
  let signInEmail = document.getElementById("signInEmail");
  let submitSignIn = document.getElementById("submitSignIn");
  let mobileNumber = document.getElementById("mobileNumber");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  submitSignIn.addEventListener("click", () => {
    if (signInEmail.value.trim() === "") {
      alert("Enter Email");
    } else if (!emailRegex.test(signInEmail.value.trim())) {
      alert("Invalid Email");
    } else if (newPassword.value.trim() === "") {
      alert("Enter Password");
    } else if (mobileNumber.value.trim() === "") {
      alert("Enter Mobile Number");
    } else if (repeatPassword.value.trim() !== newPassword.value.trim()) {
      alert("Passwords do not match");
    } else {
      alert("Success");
    }
  });


