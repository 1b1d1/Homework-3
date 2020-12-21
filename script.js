// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+-=?><";
console.log(lower)
 

function getPassOptions() {
  var length = prompt("How many characters do you want in your password? (8-128)");

  if(isNaN(length) === true) {
    alert('pass length should be a number')
    return;
  }
  if(length < 8) {
    alert('length must be greater than 8')
    return;
  }

  if(length > 128) {
    alert('length must be smaller than 128')
  }

  var lowerSet = confirm("Do you want lowercase characters in your password? (Confirm = yes, Cancel = no)");
  var upperSet = confirm("Do you want uppercase characters in your password? (Confirm = yes, Cancel = no)");
  var numberSet = confirm ("Do you want numbers in your password (Ok = yes, Cancel = No)");
  var specialSet = confirm("Do you want special characters in your password? (Confim = Yes, Cancel = No)");
  
  var passwordOptions = {
    length:length,
    hasLower: lowerSet,
    hasUpper: upperSet ,
    hasNumber: numberSet,
    hasSpecial: specialSet
  }
  console.log(passwordOptions)


   return passwordOptions;
 }

 function generatePassword() {
   var options = getPassOptions();
   var result = ''; // where we save the password to
   var possibleChoices = '';
   //
   var guaranteedCharacters = '';

   if(options.hasLower === true) {
      
      possibleChoices = possibleChoices.concat(lower)
      guaranteedCharacters = guaranteedCharacters.concat(getRandomChar(lower))

   }
   console.log(possibleChoices)
  for (var i = 0, n = options.length; i < length; ++i) {
    // google how to add a  charcter to the end of a string
     result = result.concat( getRandomChar(possibleChoices))
  }
  console.log('result: ', result)
  return result
 }

 function getRandomChar(str) {
    var randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex]
 }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
