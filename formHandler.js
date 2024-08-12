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
const allInput = document.querySelector(".input");
const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;

function validateForm() {
  if (firstNameInput.value.trim() === "") {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon-2");
    errorIconFn.classList.add("error-icon");
    errorFn.classList.remove("d-none");
    firstNameInput.classList.remove("mb-3");
    errorFn.innerHTML = "First name cannot be empty";
  } else if (firstNameInput.value.length < 3) {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon");
    errorIconFn.classList.add("error-icon-2");
    errorFn.classList.remove("d-none");
    firstNameInput.classList.remove("mb-3");
    errorFn.innerHTML = "First name must be at least 3 characters";
  } else if (symbols.test(firstNameInput.value)) {
    errorIconFn.classList.remove("d-none");
    errorIconFn.classList.remove("error-icon");
    errorIconFn.classList.add("error-icon-2");
    errorFn.classList.remove("d-none");
    firstNameInput.classList.remove("mb-3");
    errorFn.innerHTML = "First name cannot contain symbols or numbers!";
  } else {
    firstNameInput.classList.add("mb-3");
    errorIconFn.classList.add("d-none");
    errorFn.classList.add("d-none");
    errorFn.textContent = "Success!";
  }

  if (lastNameInput.value.trim() === "") {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon-2");
    errorIconLn.classList.add("error-icon");
    errorLn.classList.remove("d-none");
    lastNameInput.classList.remove("mb-3");
    errorLn.textContent = "Last name cannot be empty";
  } else if (lastNameInput.value.length < 3) {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon");
    errorIconLn.classList.add("error-icon-2");
    errorLn.classList.remove("d-none");
    lastNameInput.classList.remove("mb-3");
    errorLn.innerHTML = "Last name must be at least 3 characters";
  } else if (symbols.test(lastNameInput.value)) {
    errorIconLn.classList.remove("d-none");
    errorIconLn.classList.remove("error-icon");
    errorIconLn.classList.add("error-icon-2");
    errorLn.classList.remove("d-none");
    lastNameInput.classList.remove("mb-3");
    errorLn.innerHTML = "Last name cannot contain symbols or numbers!";
  } else {
    lastNameInput.classList.add("mb-3");
    errorIconLn.classList.add("d-none");
    errorLn.classList.add("d-none");
    errorLn.textContent = "Success!";
  }

  if (emailInput.value.trim() === "") {
    errorIconEm.classList.remove("d-none");
    errorIconEm.classList.remove("error-icon-pw");
    errorIconEm.classList.add("error-icon");
    errorEm.classList.remove("d-none");
    emailInput.classList.remove("mb-3");
    errorEm.textContent = "Email cannot be empty";
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".com")
  ) {
    errorIconEm.classList.remove("d-none");
    errorIconEm.classList.remove("error-icon");
    errorIconEm.classList.add("error-icon-2");
    errorEm.classList.remove("d-none");
    emailInput.classList.remove("mb-3");
    errorEm.innerHTML = "Looks like this is not an email";
  } else {
    emailInput.classList.add("mb-3");
    errorIconEm.classList.add("d-none");
    errorEm.classList.add("d-none");
    errorEm.textContent = "Success!";
  }

  if (passwordInput.value.trim() === "") {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon-2");
    errorIconPw.classList.add("error-icon");
    errorPw.classList.remove("d-none");
    passwordInput.classList.remove("mb-3");
    errorPw.textContent = "Password cannot be empty";
  } else if (passwordInput.value.length < 6) {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon");
    errorIconPw.classList.add("error-icon-2");
    errorPw.classList.remove("d-none");
    passwordInput.classList.remove("mb-3");
    errorPw.innerHTML = "Password must be at least 6 character";
  } else if (!/[A-Z]/.test(passwordInput.value)) {
    errorIconPw.classList.remove("d-none");
    errorIconPw.classList.remove("error-icon");
    errorIconPw.classList.add("error-icon-2");
    errorPw.classList.remove("d-none");
    passwordInput.classList.remove("mb-3");
    errorPw.innerHTML = "Password must contain a uppercase letter";
  } else {
    passwordInput.classList.add("mb-3");
    errorIconPw.classList.add("d-none");
    errorPw.classList.add("d-none");
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

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
  resetForm();
});
