function range(start, end, step) {
  let arr = [];
  for (let i=start; i <= end; i+=step) {
    arr.push(i);
  }
  return arr;
}

console.log(range(4, 8, 2));

