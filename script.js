// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+-=?><";
 

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
    length: Number(length),
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
   console.log(options);
   var result = ''; // where we save the password to
   var possibleChoices = '';
   //
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
   console.log(possibleChoices)
   console.log(options.length)
  for (var i = 0; i < options.length; i++) {
     result += possibleChoices.charAt(Math.floor(Math.random() * possibleChoices.length))
    console.log(possibleChoices)
  console.log(i)
 
  
  }
  return result
    console.log('result: ', result)
 }

 function getRandomChar(str) {
    var randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex]
 } 
 console.log('generate' , generatePassword)


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
