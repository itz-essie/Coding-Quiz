var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
  };

  console.log(user);
  
  // validate the fields
  if (user.firstNameInput === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastNameInput === "") {
    displayMessage("error", "Last name cannot be blank");
  } else {
    displayMessage("You have successfully submitted your high score!");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;

  }
});
