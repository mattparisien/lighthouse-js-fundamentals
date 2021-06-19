function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let finalString = name + " is "  + age + " years old.";
  return finalString;
}

console.log(ageCalculator("Matt", 1997, 2020));

