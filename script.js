
// Assignment Code
var generateBtn = document.querySelector("#generate");

window.prompt("how many charecters do you want in your password? (No more than 10)");
window.confirm("Do you want lower case letters?");
window.confirm("Do you want upper case letters?");
window.confirm("Do you want numbers?");
window.confirm("Do you want symbols?")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // arrays of possible charecters
  var randomNumber = Math.floor(Math.random() * 10);
  var lowerCase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  var upperCase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
  var symbol = ["!","@","#", "$","%","^","&","*","(",")","-","+","=","?",">","<"];
  var passwordLength = 10;

  passwordText.value = password;



  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

