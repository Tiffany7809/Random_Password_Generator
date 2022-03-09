// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// window promts to decide what charecters to use & how many to use
//should show up when generate button is clicked


  // arrays of possible charecters
  var randomNumber = ["1","2","3","4","5","6","7","8","9","0"];
  var lowerCase = [ "a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var symbol = ["!","@","#", "$","%","^","&","*","(",")","-","+","=","?",">","<"];
  //  var passwordLength = "";


function generatePassword () {
// 1. get user preferences

   let Chooselength = prompt ("how many charecters do you want in your password?", "between 6 and 100");
   let ChooseLowerCase = confirm ("Do you want lower case letters?");
   let ChooseUpperCase = confirm ("Do you want upper case letters?");
   let Numbers = confirm ("Do you want numbers?");
   let Symbols = confirm ("Do you want symbols?");
   

// 2. identify and collect all preferences into in variable

  //setting password length

  if (Chooselength < 6) {
    window.alert ("please choose a number higher than 6")
  }
  if (Chooselength < 101) {
    console.log (Chooselength);
  } else {
    window.alert ("Invalid response! Please choose a password length between 6 and 100!");
  }
  
  //choosing lower case
  if (ChooseLowerCase === true) {
    chars = lowerCase.concat (chars);
    console.log (chars.length);
  } else {
    return;
  }

  //choosing uppercase
  if (ChooseUpperCase === true) {
    chars = upperCase.concat(chars);
    console.log (chars.length)
  } else {
    return;
  }

  //choosing numbers
  if (Numbers === true) {
    chars = randomNumber.concat(chars);
    console.log (chars.length)
  } else {
    return;
  }
  
  //choosing symbols
  if (Symbols === true) {
    chars = symbol.concat(chars);
    console.log (chars.length)
  } else {
    return;
  }

  // 3. create a garunteed collection

  // 4. create password variable, array
    var password = [""];
    var chars = [""]

  // 5. randomly draw a charecter
  for (var i = 0; i <= (Chooselength); i++) { 
    console.log(chars[Math.floor(Math.random() * chars.length)]
    );
}
  

  // 6. put charecter on the password array

  // 7. repeat with for loops as many times as specified

  // 8. loops through garunteed elememts, replace elements in password array

  // 9. join charecters in the password array into a string

  // 10. return the password string



}

 

