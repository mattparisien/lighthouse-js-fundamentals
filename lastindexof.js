function lastIndexOf(array, val) {
 for (let i = array.length - 1; i >= 0; i--) {
   if (array[i] === val) {
    return i
   }
 }
 return -1
}

console.log(lastIndexOf([0,1,2,3,4,5,6,7,2,1], 2))