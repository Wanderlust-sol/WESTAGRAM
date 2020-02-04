const logIn = document.querySelector(".login_main");
const loginId = document.querySelector(".input_id");
const loginPassword = document.querySelector(".input_password");

function changeColor() {
  const loginBtn = document.querySelector(".login-btn");
  const idLength = loginId.value.length;
  const passwordLength = loginPassword.value.length;

  if (idLength !== 0 && passwordLength !== 0) {
    loginBtn.style.backgroundColor = "#3798F0";
  } else {
    loginBtn.style.backgroundColor = " #c6dffa";
  }
}

function loginBtnActivation() {
  logIn.addEventListener("keyup", changeColor);
}

loginBtnActivation();
