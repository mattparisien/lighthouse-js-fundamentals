function range(start, end, step) {
let fullArray = [];

for (i = start; i <= end ; i += step) {
fullArray.push(i);
};

return fullArray
} 

console.log(range(0,10,2));