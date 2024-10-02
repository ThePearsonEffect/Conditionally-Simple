/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(str) {
  if (str.length > 20) {
      return "That's a long string!";
  }
  return ""; // Return an empty string if the condition is not met
}

// Function to check if the string is between 10 and 20 characters, inclusive
function isItMedium(str) {
  if (str.length >= 10 && str.length <= 20) {
      return "That's a regular sized string!";
  }
  return ""; // Return an empty string if the condition is not met
}

// Function to check if the string is shorter than 10 characters
function isItShort(str) {
  if (str.length < 10) {
      return "That's a small string!";
  } else {
      return "That's not a small string!";
  }
}

// Function to analyze the length of the string and return specific messages
function howLongIsMyString(str) {
  if (str.length > 20) {
      return "That's a long string!";
  } else if (str.length >= 10) {
      return "That's a regular sized string!";
  } else {
      return "That's a small string!";
  }
}

// Function to retrieve the height of instructors based on their names
function personsHeight(name) {
  if (name === "Shaq") {
      return 85;
  } else if (name === "Zooey") {
      return 65;
  } else {
      return "I don't know everyone's height!";
  }
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}