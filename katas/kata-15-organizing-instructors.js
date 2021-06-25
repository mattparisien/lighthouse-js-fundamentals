const organizeInstructors = function(instructors) {
 let finalObj = {};
 let iosArr = [];
 let webArr = [];
 let blockchainArr = [];
  
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      iosArr.push(instructors[i].name)
      finalObj.iOS = iosArr
    } else if (instructors[i].course === "Web") {
      webArr.push(instructors[i].name)
      finalObj.Web = webArr
    } else if (instructors[i].course === "Blockchain") {
      blockchainArr.push(instructors[i].name)
      finalObj.Blockchain = blockchainArr
    }
  }
  return finalObj
}



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));