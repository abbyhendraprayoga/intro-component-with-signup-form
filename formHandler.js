const submitForm = document.getElementById("submitForm");
const firstNameInput = submitForm.querySelector(
  'input[placeholder="First Name"]'
);
const lastNameInput = submitForm.querySelector(
  'input[placeholder="Last Name"]'
);
const emailInput = submitForm.querySelector(
  'input[placeholder="Email Address"]'
);
const passwordInput = submitForm.querySelector('input[placeholder="Password"]');

submitForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validation logic
  let isValid = true;

  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("error");
    isValid = false;
  } else {
    firstNameInput.classList.remove("error");
  }

  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("error");
    isValid = false;
  } else {
    lastNameInput.classList.remove("error");
  }

  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
  }

  if (passwordInput.value.trim() === "") {
    passwordInput.classList.add("error");
    isValid = false;
  } else {
    passwordInput.classList.remove("error");
  }

  if (isValid) {
    // Form is valid, proceed with submission or other actions
    console.log("Form submitted successfully!");
    // You can use fetch() or other methods to send form data to the server here
  } else {
    console.log("Form has errors.");
  }
});

function isValidEmail(email) {
  // Simple email validation using regex
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
