// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How many characters do you want in your passwod? (8-128)");
  if (length = 
  var lowerSet = comfirm("Do you want lowercase characters in your password? (Confirm = yes, Cancel = no)");
  var upperSet = confirm("Do you want special characters in your password? (Confirm = yes, Cancel = no)");
  var specialSet = confirm("Do you want special characters in your password? (Confim = Yes, Cancel = No)");
  

//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
