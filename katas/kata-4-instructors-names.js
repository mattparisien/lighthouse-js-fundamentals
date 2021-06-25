const instructorWithLongestName = function(instructors) {
  let longestName = ""; //set a variable that will later be returned
  for (instructor of instructors) { //loop through the instructors array 
    let nameLength = instructor.name // set a variable which contains the value of each name property of each object
    if (nameLength.length > longestName.length) { // compare the length of each name property to see if its bigger empty var using a conditional 
      longestName = nameLength //set our longestName var equal to the longest name in the array
    }
  }
  return longestName // return the longest name in the array
};




console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));