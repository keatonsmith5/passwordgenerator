
var caseArray = [];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numChar = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];



// Write password to the #password input
function generatePassword() {

  var randPasswordString = "";

  var passwordLength = parseInt(prompt("How many characters do you want your password to be?"));

  var wantSpecial = confirm("Do you want special characters in your password?");
  var wantNum = confirm("Do you want numbers in your password?");
  var wantUpper = confirm("Do you want uppercase letters in your password?");
  var wantLower = confirm("Do you want lowercase letters in your password?");
  
  if (wantSpecial === false && wantNum === false && wantUpper === false && wantLower === false) {
    alert("Please select one type of character");
    wantSpecial = confirm("Do you want special characters in your password?");
    wantNum = confirm("Do you want numbers in your password?");
    wantUpper = confirm("Do you want uppercase letters in your password?");
    wantLower = confirm("Do you want lowercase letters in your password?");
  }

  if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === null) {
    alert("Error: Choose a number that is between 8 and 128");
    passwordLength = parseInt(prompt("How many characters do you want your password to be?"));
  }

  if (wantSpecial === true) {
    caseArray.push(specialChar);
  }
  if (wantNum === true) {
    caseArray.push(numChar);
  }
  if (wantUpper === true) {
    caseArray.push(upperChar);
  }
  if (wantLower === true) {
    caseArray.push(lowerChar);
  }  


  for (var i = 0; i < passwordLength; i++) {
    var randArray = parseInt(Math.floor(Math.random(caseArray.length)));
    var chosenArray = caseArray[randArray];
    var randIndexNum = parseInt(Math.floor(Math.random(chosenArray.length)));
    var randChar = chosenArray[randIndexNum];

    randPasswordString += randChar;
  }

  passwordText.textContent = randPasswordString;

}

  // Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
