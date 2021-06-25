const talkingCalendar = function(date) {


  let newArr = date.split("/") // split string by word into an new array 
  let month = "" // set empty month var
  let year = newArr[0] // set year to the first element in new array
  let day = "" // set empty day var
  let finalStr = "" // set empty final string that will be returned later


  if (newArr[1] == 1) { // use conditionals to check month and set month equal to word equivalent
    month = "January"
  } else if (newArr[1] == 2){
    month = "February"
  } else if (newArr[1] == 3){
    month = "March"
  } else if (newArr[1] == 4){
    month = "April"
  } else if (newArr[1] == 5){
    month = "May"
  } else if (newArr[1] == 6){
    month = "June"
  } else if (newArr[1] == 7){
    month = "July"
  } else if (newArr[1] == 8){
    month = "August"
  } else if (newArr[1] == 9){
    month = "September"
  } else if (newArr[1] == 10){
    month = "October"
  } else if (newArr[1] == 11){
    month = "November"
  } else if (newArr[1] == 12){
    month = "December"
  }

  if (newArr[2] == 01) { // adjust words after day to ensure the first, second and third days end with the correct letters
    day = newArr[2] + "st"
    newArr.splice()
    console.log(day)
  } else if (newArr[2] == 02) {
    day = newArr[2] + "nd"
  } else if (newArr[2] == 03) {
    day = newArr[2]+ "rd"
  } else { // set all other numbers to have the same endings
    day = newArr[2] + "th"
  }


  if (day[0] == 0) { // check if day starts with 0 to remove the 0
    day = day.substr(1); // remove first character if so 
  }


  finalStr = month + " " + day + ", " + year // construct final string
  return finalStr // return final string 

}


console.log(talkingCalendar("2020/3/27"));
