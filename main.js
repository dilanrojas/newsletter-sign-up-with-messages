const emailForm = document.querySelector("#email-form")
const emailError = document.querySelector("#email-error")
const emailInput = document.querySelector("#email")
const userEmail = document.querySelector("#user-email")
const subscribe = document.querySelector("#subscribe-btn")
const dimiss = document.querySelector("#dimiss")
const signUpForm = document.querySelector(".sign-up-wrapper")
const signUpSuccess = document.querySelector(".sign-up-success-wrapper")

function getUserEmail() {
  var userInput = document.getElementById("email").value;

  userEmail.textContent = userInput
}

function invalidEmail() {
  emailInput.toggleAttribute("invalid");
  emailError.textContent = "Valid email required";
  emailInput.style.border = "1px solid var(--clr-tomato)";
  emailInput.style.backgroundColor = "var(--clr-tomato-op)";
}

function validEmail() {
  emailError.textContent = "";
  emailInput.removeAttribute("invalid");
  emailInput.toggleAttribute("valid");
  emailInput.style.border = "1px solid var(--clr-green)";
  emailInput.style.backgroundColor = "var(--clr-green-op)";
}

emailInput.addEventListener("keyup", () => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    invalidEmail();
    return false;
  }
  validEmail();
  return true;
})

subscribe.addEventListener("click", (event) => {
  event.preventDefault();
  if (emailInput.hasAttribute("valid")) {
    signUpForm.style.display = "none";
    signUpSuccess.style.display = "flex";
    getUserEmail();
  } else {
    invalidEmail();
  }
})

dimiss.addEventListener("click", () => {
  location.reload()
})
