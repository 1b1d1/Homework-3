// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+-=?><";
 

function getPassOptions() {
  var length = prompt("How many characters do you want in your password? (8-128)");

  if(isNaN(length) === true) {
    alert("Please only use number keys for your password length.")
    return;
  }
  if(length < 8) {
    alert('length must be greater than 8')
    return;
  }

  if(length > 128) {
    alert('length must be smaller than 128')
  }

  var lowerSet = confirm("Do you want lowercase characters in your password? (OK = yes, Cancel = no)");
  var upperSet = confirm("Do you want uppercase characters in your password? (OK = yes, Cancel = no)");
  var numberSet = confirm ("Do you want numbers in your password (Ok = yes, Cancel = No)");
  var specialSet = confirm("Do you want special characters in your password? (OK = Yes, Cancel = No)");
  
  var passwordOptions = {
    length: Number(length),
    hasLower: lowerSet,
    hasUpper: upperSet ,
    hasNumber: numberSet,
    hasSpecial: specialSet
  }
    return passwordOptions;
 }

 function generatePassword() {
   var options = getPassOptions();
   var result = ''; 
   var possibleChoices = '';
   var guaranteedCharacters = '';

   if(options.hasLower === true) {
      
      possibleChoices = possibleChoices.concat(lower)
      guaranteedCharacters = guaranteedCharacters.concat(getRandomChar(lower))

   }

   if(options.hasUpper === true) {
      
    possibleChoices = possibleChoices.concat(upper)
    guaranteedCharacters = guaranteedCharacters.concat(getRandomChar(upper))

 }

  if(options.hasNumber === true) {
      
  possibleChoices = possibleChoices.concat(number)
  guaranteedCharacters = guaranteedCharacters.concat(getRandomChar(number))

}
  if(options.hasSpecial === true) {
      
  possibleChoices = possibleChoices.concat(special)
  guaranteedCharacters = guaranteedCharacters.concat(getRandomChar(special))

}
  for (var i = 0; i < options.length; i++) {
     result += possibleChoices.charAt(Math.floor(Math.random() * possibleChoices.length))
    
 
  
  }
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
