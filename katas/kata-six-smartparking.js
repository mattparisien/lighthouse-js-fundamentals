function whereCanIPark(spots, vehicle) {
  for (let y = 0; y < spots.length; y++) { // create a loop which loops through the array - use Y as a variable because Y are the rows (index)
    for (let x = 0; x < spots[y].length; x++) { // create a nested loop which loops through the individual arrays within the parent array
      let location = spots[y][x]; // declare a variable which stores the location of the spots 
      if (vehicle === "regular" && location === "R") {  
        return [y,x]
      } else if ((vehicle === "small") && (location === "S" || location === "R")) {
        return [y,x]
      } else if ((vehicle === "motorcycle") && (location === "R" || location === "S" || location === "M")) {
        return [y,x]
      }
    }
  }
  return false;
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))