const account = document.getElementById("account");
const login = document.getElementById("login");
const body = document.getElementById("body");
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


account.addEventListener("click", () => {
  if (login.classList.contains("active")) {
    login.classList.remove("active");
    body.classList.remove("stop");
  } else {
    login.classList.add("active");
    body.classList.add("stop");
  }
});

const RegiserSubmitHandler = (event) => {
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
};

const passwordToggle = () => {
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon> `;
  } else {
    password.type = "password";
    toggleButton.innerHTML = `<ion-icon class="eye_close" name="eye-outline"></ion-icon>`;
  }
};

const passwordComfirmToggle = () => {
  if (password.type === "password") {
    passwordComfirm.type = "text";
    toggleButton2.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon> `;
  } else {
    passwordComfirm.type = "password";
    toggleButton2.innerHTML = `<ion-icon class="eye_close" name="eye-outline"></ion-icon>`;
  }
};



