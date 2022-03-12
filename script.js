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

  // arrays of possible charecters
  var randomNumber = ["1","2","3","4","5","6","7","8","9","0"];
  var lowerCase = [ "a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var symbol = ["!","@","#", "$","%","^","&","*","(",")","-","+","=","?",">","<","}","{","[","]","|"];

function generatePassword () {
//get user preferences

   let Chooselength = prompt ("How many charecters do you want in your password?", "Choose a number between 8 and 128");
   let ChooseLowerCase = confirm ("Do you want lower case letters?");
   let ChooseUpperCase = confirm ("Do you want upper case letters?");
   let Numbers = confirm ("Do you want numbers?");
   let Symbols = confirm ("Do you want symbols?");
   
   var charecter = []; 
   var password = [];



  //setting users password length
  if (Chooselength < 8) {
    window.alert ("please choose a number higher than 8");
    return;
  }if (Chooselength > 128) {
    window.alert ("Invalid response! Please choose a password length between 8 and 128!");
    return;
  };
 
  
  //identifying and collecting all user preferences into one variable

  // choosing lower case
  if (ChooseLowerCase === true) {
    charecter = lowerCase.concat (charecter);
  };

  //choosing uppercase
  if (ChooseUpperCase === true) {
    charecter = upperCase.concat(charecter);
  };

  //choosing numbers
  if (Numbers === true) {
    charecter = randomNumber.concat(charecter);
  };
  
  //choosing symbols
  if (Symbols === true) {
    charecter = symbol.concat(charecter);
  };


  //randomly draw a charecter, loop through for the specified length
    for (var i = 0; i < Chooselength; i++) {
      var randomItem= charecter[Math.floor(Math.random() * charecter.length)];

    //put selected charecter on the password array
      password.push (randomItem);
    };


  // joining charecters in the password array into a string
  let finalPassword = password.join("")

  // return the password as a string
  return finalPassword;
 
};

 

