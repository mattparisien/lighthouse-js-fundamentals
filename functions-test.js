function reverseString(reverseMe) {
  let reversed = "";
  for (i=reverseMe.length - 1; i>=0; i--) {
    reversed += reverseMe[i]; 
   }
   return reversed;
}

console.log("My reversed name is" + " " + reverseString("Matt"));