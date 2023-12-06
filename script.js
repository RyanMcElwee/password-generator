
//Starting password gen request
var generateBtn = document.querySelector("#generate");

//prompt for password length
function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (hint: 8-100)");
  //if function to ask for desired password length
  if (passLength < 8 || passLength > 100 ) {
    alert("Please enter a character length that is between 8 and 100!");
    return generatePassword();
  }
  if (passLength >=8 && passLength <= 100) {
//prompts for password criteria inclusion
  var speChar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numbers?");
  var lowerChar = confirm("Would you like to include lowercase letters?");
  var upperChar = confirm("Would you like to include uppercase characters?");
  }
}
 //if function to ensure user selects criteria
 if (speChar===false && num===false && lowerChar===false && upperChar===false) {
  alert("Please confirm a set of criteria!");
  return generatePassword();
}