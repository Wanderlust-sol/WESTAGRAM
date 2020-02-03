const logIn = document.querySelector(".howManyInput");
const loginId = document.querySelector(".input_id");
const loginPassword = document.querySelector(".input_password");

function changeColor(event) {
  const loginBtn = document.querySelector(".login-btn");

  if (loginId.value.length !== 0 && loginPassword.value.length !== 0) {
    loginBtn.style.color = "black";
    loginBtn.style.backgroundColor = "#3798F0";
  }
}

function loginBtnActivation() {
  const logIn = document.querySelector(".howManyInput");
  console.log(logIn);
  logIn.addEventListener("onclick", changeColor);
}

console.log(document.querySelector(".howManyInput"));
