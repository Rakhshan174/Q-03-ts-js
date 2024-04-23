/*
Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.
*/
var personName = "RAKHSHI KHAN";
// lowercase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetters;
console.log(titlecase);
