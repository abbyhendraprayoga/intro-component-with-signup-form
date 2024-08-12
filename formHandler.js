const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const emailInput = signUpForm["email"];
const passwordInput = signUpForm["password"];
const errorIconFn = document.querySelector("#error-icon-fn");
const errorIconLn = document.querySelector("#error-icon-ln");
const errorIconEm = document.querySelector("#error-icon-em");
const errorIconPw = document.querySelector("#error-icon-pw");
const errorFn = document.querySelector("#error-fn");
const errorLn = document.querySelector("#error-ln");
const errorEm = document.querySelector("#error-em");
const errorPw = document.querySelector("#error-pw");
const eyeIcon = document.querySelector("#eye-icon");
const allInput = document.querySelector(".input");
const symbolsName = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const symbolsEmail = /[!#$%^&*()_+{}\[\]:;"'<>,?/~`]/;

function validateForm() {
  if (firstNameInput.value.trim() === "") {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon-2");
    errorIconFn.classList.add("error-icon");
    errorFn.classList.remove("d-none");
    firstNameInput.classList.remove("mb-3");
    firstNameInput.classList.remove("success-input");
    firstNameInput.classList.add("danger-input");
    errorFn.classList.add("text-danger");
    errorFn.classList.remove("text-success");
    errorIconFn.src = "./images/icon-error.svg";
    errorFn.innerHTML = "First name cannot be empty";
  } else if (firstNameInput.value.length < 3) {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon");
    errorIconFn.classList.add("error-icon-2");
    errorFn.classList.remove("d-none");
    firstNameInput.classList.remove("mb-3");
    firstNameInput.classList.remove("success-input");
    firstNameInput.classList.add("danger-input");
    errorFn.classList.remove("text-success");
    errorFn.classList.add("text-danger");
    errorIconFn.src = "./images/icon-error.svg";
    errorFn.innerHTML = "First name must be at least 3 characters";
  } else if (symbolsName.test(firstNameInput.value)) {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon");
    errorIconFn.classList.add("error-icon-2");
    errorFn.classList.remove("d-none");
    errorFn.classList.remove("text-success");
    errorFn.classList.add("text-danger");
    firstNameInput.classList.remove("mb-3");
    firstNameInput.classList.remove("success-input");
    firstNameInput.classList.add("danger-input");
    errorIconFn.src = "./images/icon-error.svg";
    errorFn.innerHTML = "First name cannot contain symbols or numbers!";
  } else {
    firstNameInput.classList.remove("mb-3");
    firstNameInput.classList.remove("danger-input");
    firstNameInput.classList.add("success-input");
    errorIconFn.classList.remove("d-none");
    errorFn.classList.add("text-success");
    errorFn.classList.remove("text-danger");
    errorFn.classList.remove("d-none");
    errorIconFn.src = "./images/icon-success.svg";
    errorFn.textContent = "Success!";
  }

  if (lastNameInput.value.trim() === "") {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon-2");
    errorIconLn.classList.add("error-icon");
    errorLn.classList.remove("d-none");
    lastNameInput.classList.add("danger-input");
    lastNameInput.classList.remove("success-input");
    lastNameInput.classList.remove("mb-3");
    errorLn.classList.add("text-danger");
    errorLn.classList.remove("text-success");
    errorIconLn.src = "./images/icon-error.svg";
    errorLn.textContent = "Last name cannot be empty";
  } else if (lastNameInput.value.length < 3) {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon");
    errorIconLn.classList.add("error-icon-2");
    lastNameInput.classList.add("danger-input");
    lastNameInput.classList.remove("success-input");
    lastNameInput.classList.remove("mb-3");
    errorLn.classList.remove("d-none");
    errorLn.classList.remove("text-success");
    errorLn.classList.add("text-danger");
    errorLn.innerHTML = "Last name must be at least 3 characters";
    errorIconLn.src = "./images/icon-error.svg";
  } else if (symbolsName.test(lastNameInput.value)) {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon");
    errorIconLn.classList.add("error-icon-2");
    errorLn.classList.remove("d-none");
    errorLn.classList.remove("text-success");
    errorLn.classList.add("text-danger");
    lastNameInput.classList.add("danger-input");
    lastNameInput.classList.remove("success-input");
    lastNameInput.classList.remove("mb-3");
    errorIconLn.src = "./images/icon-error.svg";
    errorLn.innerHTML = "Last name cannot contain symbols or numbers!";
  } else {
    lastNameInput.classList.remove("mb-3");
    lastNameInput.classList.remove("danger-input");
    lastNameInput.classList.add("success-input");
    errorIconLn.classList.remove("d-none");
    errorLn.classList.remove("text-danger");
    errorLn.classList.add("text-success");
    errorLn.classList.remove("d-none");
    errorIconLn.src = "./images/icon-success.svg";
    errorLn.textContent = "Success!";
  }

  if (emailInput.value.trim() === "") {
    errorIconEm.classList.remove("d-none");
    errorIconEm.classList.remove("error-icon-pw");
    errorIconEm.classList.add("error-icon");
    errorEm.classList.remove("d-none");
    emailInput.classList.remove("mb-3");
    emailInput.classList.add("danger-input");
    emailInput.classList.remove("success-input");
    errorEm.classList.remove("text-success");
    errorEm.classList.add("text-danger");
    errorEm.classList.remove("text-success");
    errorIconEm.src = "./images/icon-error.svg";
    errorEm.textContent = "Email cannot be empty";
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".com") ||
    symbolsEmail.test(emailInput.value)
  ) {
    errorIconEm.classList.remove("d-none");
    errorIconEm.classList.remove("error-icon");
    errorIconEm.classList.add("error-icon-2");
    errorEm.classList.remove("d-none");
    emailInput.classList.remove("mb-3");
    emailInput.classList.remove("success-input");
    emailInput.classList.add("danger-input");
    errorEm.classList.remove("text-success");
    errorEm.classList.add("text-danger");
    errorIconEm.src = "./images/icon-error.svg";
    errorEm.innerHTML = "Looks like this is not an email";
  } else {
    emailInput.classList.remove("mb-3");
    emailInput.classList.remove("danger-input");
    emailInput.classList.add("success-input");
    // errorIconEm.classList.remove("d-none");
    errorEm.classList.remove("text-danger");
    errorEm.classList.add("text-success");
    errorIconEm.classList.remove("d-none");
    errorEm.classList.remove("d-none");
    errorIconEm.src = "./images/icon-success.svg";
    errorEm.textContent = "Success!";
  }

  if (passwordInput.value.trim() === "") {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon-2");
    errorIconPw.classList.add("error-icon");
    errorPw.classList.remove("d-none");
    passwordInput.classList.remove("mb-3");
    passwordInput.classList.add("danger-input");
    passwordInput.classList.remove("success-input");
    errorPw.classList.remove("text-success");
    errorPw.classList.add("text-danger");
    eyeIcon.classList.add("eye-icon2");
    eyeIcon.classList.remove("eye-icon");
    errorIconPw.src = "./images/icon-error.svg";
    errorPw.textContent = "Password cannot be empty";
  } else if (passwordInput.value.length < 6) {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon");
    errorIconPw.classList.add("error-icon-2");
    errorPw.classList.remove("d-none");
    eyeIcon.classList.add("eye-icon2");
    eyeIcon.classList.remove("eye-icon");
    passwordInput.classList.remove("mb-3");
    passwordInput.classList.remove("success-input");
    passwordInput.classList.add("danger-input");
    errorPw.classList.remove("text-success");
    errorPw.classList.add("text-danger");
    errorIconPw.src = "./images/icon-error.svg";
    errorPw.innerHTML = "Password must be at least 6 character";
  } else if (!/[A-Z]/.test(passwordInput.value)) {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon");
    errorIconPw.classList.add("error-icon-2");
    errorPw.classList.remove("d-none");
    eyeIcon.classList.add("eye-icon2");
    eyeIcon.classList.remove("eye-icon");
    passwordInput.classList.remove("mb-3");
    passwordInput.classList.remove("success-input");
    passwordInput.classList.add("danger-input");
    errorPw.classList.remove("text-success");
    errorPw.classList.add("text-danger");
    errorIconPw.src = "./images/icon-error.svg";
    errorPw.innerHTML = "Password must contain a uppercase letter";
  } else {
    passwordInput.classList.remove("mb-3");
    errorIconPw.classList.remove("d-none");
    errorPw.classList.remove("d-none");
    eyeIcon.classList.add("eye-icon2");
    eyeIcon.classList.remove("eye-icon");
    passwordInput.classList.remove("danger-input");
    passwordInput.classList.add("success-input");
    errorPw.classList.remove("text-danger");
    errorPw.classList.add("text-success");
    errorIconPw.src = "./images/icon-success.svg";
    errorPw.textContent = "Success!";
  }
}

function resetForm() {
  if (
    errorFn.textContent === "Success!" &&
    errorLn.textContent === "Success!" &&
    errorEm.textContent === "Success!" &&
    errorPw.textContent === "Success!"
  ) {
    alert("Thank you for signing up!");
    location.reload();
  }
}

eyeIcon.addEventListener("click", function (event) {
  event.preventDefault();
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "./images/eye-hide.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "./images/eye.svg";
  }
});

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
  resetForm();
});
