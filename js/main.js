const account = document.getElementById("account");
const login = document.getElementById("login");
const body = document.getElementById("body");

//Register Form
const formHandler = document.getElementById("form_submit");
const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordComfirm = document.getElementById("comfirm_password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const namingForm = document.querySelectorAll(".nameing input");
const emailErr = document.querySelector(".email");
const passwrodError = document.getElementById("pswError");
const passwordErr = document.querySelectorAll(".password_input input");
const toggleButton = document.querySelector(".toggle-button");
const toggleButton2 = document.querySelector(".toggle-button2");
const mainPageHeader = document.getElementById("main_page_header");

//Login Form

const loginFormHandler = document.getElementById("Login_form_submit");
const loginForm = document.querySelector(".login_form");
const Lemail = document.getElementById("Lemail");
const Lpassword = document.getElementById("Lpassword");

const LemailError = document.getElementById("LemailError");
const LpasswordError = document.getElementById("LpswError");

const LemailErr = document.querySelector(".Lemail");
const LPasswordErr = document.querySelector(".Lpassword");

//toggle login signup form
const loginPage = document.getElementById("login_page");
const registerPage = document.getElementById("registerPage");

account.addEventListener("click", () => {
  window.location.href="/Login.html"
});

function RegiserSubmitHandler(event){
  event.preventDefault();

  if (firstName.value == "" || secondName.value == "") {
    nameError.innerText = `Enter name credentials`;
    namingForm.forEach((input) => {
      input.classList.add("error");
    });
  } else {
    nameError.innerText = ``;
    namingForm.forEach((input) => {
      input.classList.remove("error");
    });
  }
  if (email.value == "") {
    emailError.innerText = `Enter email`;
    emailErr.classList.add("error");
  } else {
    emailError.innerText = ``;
    emailErr.classList.remove("error");
  }

  if (password.value == "") {
    passwrodError.innerText = `Enter Password`;
    passwordErr.forEach((input) => {
      input.classList.add("error");
    });
  } else if (password.value !== passwordComfirm.value) {
    passwrodError.innerText = "Password must be the same ";
    passwordErr.forEach((input) => {
      input.classList.add("error");
    });
  } else {
    passwrodError.innerText = " ";
    passwordErr.forEach((input) => {
      input.classList.remove("error");
    });
  }

  if ( firstName.value && secondName.value && email.value && password.value && passwordComfirm.value){
    alert("Login Successful")
    window.location.href = '/index.html'
  }
}

function passwordToggle(){
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon> `;
  } else {
    password.type = "password";
    toggleButton.innerHTML = `<ion-icon class="eye_close" name="eye-outline"></ion-icon>`;
  }
}

function passwordComfirmToggle(){
  if (password.type === "password") {
    passwordComfirm.type = "text";
    toggleButton2.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon> `;
  } else {
    passwordComfirm.type = "password";
    toggleButton2.innerHTML = `<ion-icon class="eye_close" name="eye-outline"></ion-icon>`;
  }
}




function LpasswordToggle() {
  if (LPasswordErr.type === "password") {
    LPasswordErr.type = "text";
    toggleButton.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon> `;
  } else {
    LPasswordErr.type = "password";
    toggleButton.innerHTML = `<ion-icon class="eye_close" name="eye-outline"></ion-icon>`;
  }
}

let isLogin = false;

function LoginHandler(event) {
  event.preventDefault();

  if (Lemail.value == "") {
    LemailError.innerText = "Enter email";
    LemailErr.classList.add("error");
  } else {
    LemailError.innerText = "";
    LemailErr.classList.remove("error");
  }

  if (LPasswordErr.value == "") {
    LpasswordError.innerText = "Enter password";
    LPasswordErr.classList.add("error");
  } else if (LPasswordErr.value.length <= 6) {
    LpasswordError.innerText = "Password must be above 6 character";
    LPasswordErr.classList.remove("error");
  } else {
    LpasswordError.innerText = "";
    LPasswordErr.classList.remove("error");
  }

  if (Lemail.value != '' && LPasswordErr.value != '') {
    alert("success")
    window.history.back()
  }
}

loginPage.addEventListener("click", () => {
  login.classList.add("active");
  loginForm.classList.add("active");
});

registerPage.addEventListener("click", () => {
  alert("hello")
  loginForm.classList.add("active");
  login.classList.add("active");
});

function LoginPage(){
  login.classList.remove("active");
  loginForm.classList.remove("active");
}

function RegisterPage(){
  loginForm.classList.add("active");
  login.classList.add("active");
}