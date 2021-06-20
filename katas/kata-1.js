function sumLargestNumbers (data){
  let largest = 0;
for (i = 0; i <= largest; i++) {
  if (data[i] > largest) {
    largest = data[i];
  }
}
return largest;
}

console.log(sumLargestNumbers([1,2,3]));