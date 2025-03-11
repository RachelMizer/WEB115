// creating / accessing input, form and errorMessage values
let form = document.getElementById("myForm");
let inputField = document.getElementById("inputField");
let errorMessage = document.getElementById("error-message"); // selects <p> for error insertion

// validation conditions
let alphanumericRegex = /^[a-zA-Z0-9]+$/;

// form submission and validation error
form.addEventListener("submit", function (event) {
  let inputValue = inputField.value; // ✅ Fix: Define inputValue inside the function
  errorMessage.innerHTML = ""; // clears any previous errors

  // applying validation
  if (!alphanumericRegex.test(inputValue)) {
      errorMessage.innerHTML = "Error: Please enter only letters and numbers."; // ✅ Fix: Changed to innerHTML for consistency
      event.preventDefault(); // prevents form submission
  } else {
      alert("Success! Your input is valid."); // creates confirmation message
  }
});
