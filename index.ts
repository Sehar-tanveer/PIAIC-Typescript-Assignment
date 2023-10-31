// import { Console } from "console";

// import { CLIENT_RENEG_LIMIT } from "tls";

// // Question 1
let message: string = 'Hello Eric, would you like to learn some Python today?';
console.log(message);

// // Question 2
const person_name: string = 'sehar tanveer';
const uppercase_name: string = person_name.toUpperCase();  
const lowercase_name: string = person_name.toLowerCase();

function toTitleCase(input: string): string {
    return input.replace(/\b\w/g, char => char.toUpperCase());
  }
  const titleCasedString = toTitleCase(person_name);
  console.log(titleCasedString);
  console.log(uppercase_name);
  console.log(lowercase_name);

// // Question 3
const quote: string = 'A person who never made a mistake never tried anything new.';
const author: string = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// // Question 4
const msg: string = 'A person who never made a mistake never tried anything new.';
const famous_person: string = 'Albert Einstein';
console.log(`${famous_person} once said, "${msg}"`);

// // Question 5
const person_whitespace: string = '\t Sehar \n Tanveer';
console.log(`Name with Whitespace: ${person_whitespace}`);

const stripped_name: string = person_whitespace.trim();
console.log(`Stripped Name: ${stripped_name}`);

// // Question 6
const addition: number = 5+3;
const subtraction: number = 10-2;
const multiplication: number = 2*4;
const division: number = 24/3;

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);

// // Question 7
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(24/3);

// // Question 8
const favourite_num: number = 13;
console.log(`My favourite number is: ${favourite_num}`);

// // Question 9
// console.log('It's a comment');

// // Question 10
const names: string[] = ["mehrosh", "maliha", "anum"];
for(const name of names){
   console.log(name);
}

// // Question 11
const friend_names: string[] = ["mehrosh", "maliha", "anum"];
const msg_template: string = "Hello [friend_names]!";
for(const name of friend_names){
   const personalized_msg: string = msg_template.replace("[friend_names]",name);
   console.log(personalized_msg);
}

// // Question 12
const vehicle: string[] = ["Haval", "Audi", "Range Rover"];
for(const transport_name of vehicle){
   console.log(`I would like to own ${transport_name}`);
}

// // Question 13
const dinner_guests: string[] = ["Mehrosh", "Anum", "Maliha"];
for(const guest of dinner_guests){
   console.log(`\nDear ${guest}, \nI would like to invite you on Date: 6-08-2023 at PC Hotel. \nKind Regards, \nSehar Tanveer`);
}

// // Question 14
const dinner_guest: string[] = ["Mehrosh", "Anum", "Maliha", "Faryal"];
const guestcantmakeit: string = "Maliha";
for(const guests of dinner_guest){
   console.log(`\nDear ${guests}, \nI would like to invite you on Date: 6-08-2023 at PC Hotel. \nKind Regards, \nSehar Tanveer`);
}
console.log(`Unfortunately, ${guestcantmakeit} can't make it to the dinner with us`);
const new_guest: string = "Abdullah";

const indextoremove: number = dinner_guest.indexOf(guestcantmakeit);
if (indextoremove !== -1) {
   dinner_guest[indextoremove] = new_guest;
}
console.log("Updated Guest List:");
console.log(dinner_guest);

console.log("\nSending invitations to the updated guest list:");
for(const guests of dinner_guest){
   console.log(`\nDear ${guests}, \nI would like to invite you on Date: 6-08-2023 at PC Hotel. \nKind Regards, \nSehar Tanveer`);
}

// // Question 15
console.log("Good news! We found a bigger dinner table.");

const new_guests: string[] = ["Arooj", "Tazeen", "Aiman"];

const middleIndex: number = Math.floor(dinner_guests.length/2);
new_guests.splice(1,0,"Tazeen");

const updated: string[] = dinner_guests.concat(new_guests);
dinner_guests.push(`${new_guests}`);

console.log("\nSending invitations to the updated guest list:");

console.log(dinner_guests);

// // Question 16
console.log("Found out the new dinner table won't arrive in time. Can only invite two people for dinner.\n");

while(dinner_guests.length > 2){
    const removedGuest= dinner_guests . pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (const guestss of dinner_guests) {
   console.log(`You're still invited, ${guestss}!`);
 }

dinner_guests.pop();
dinner_guests.pop();

console.log("\nUpdated Guest List:");
console.log(dinner_guests);

// Question 17
const travelDestinations: string[] = ["Turkey", "Paris", "New York", "Dubai", "Bali"];

// Print the original array
console.log("Original Order:");
console.log(travelDestinations);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort());

// Confirm that the original array is still in its original order
console.log("\nOriginal Order (still unchanged):");
console.log(travelDestinations);

// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort().reverse());

// Confirm that the original array is still in its original order
console.log("\nOriginal Order (still unchanged):");
console.log(travelDestinations);

// Reverse the order of the list
travelDestinations.reverse();

// Print the array to show the order has changed
console.log("\nReversed Order:");
console.log(travelDestinations);

// Reverse the order of the list again to bring it back to the original order
travelDestinations.reverse();

// Print the list to show it's back to its original order
console.log("\nOriginal Order (restored):");
console.log(travelDestinations);

// Sort the array in alphabetical order
travelDestinations.sort();

// Print the array to show the order has been changed
console.log("\nAlphabetical Order (sorted):");
console.log(travelDestinations);

// Sort the array in reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));

// Print the list to show the order has changed to reverse alphabetical
console.log("\nReverse Alphabetical Order (sorted in reverse):");
console.log(travelDestinations);

// Question 18
console.log(`You are inviting ${dinner_guests.length} people to dinner.\n`);

// Question 19
const mountains: string[] = ["Mount Everest", "K2", "Rakaposhi", "Nanga Parbat", "Diran Peak", "Broad Peak"];

console.log("List of Mountains:");
console.log(mountains);

// Question 20
const cars: { make: string, model: string, year: number, color: string }[] = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver"
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
    color: "Red"
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    color: "Blue"
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2019,
    color: "Black"
  },
  {
    make: "Volkswagen",
    model: "Golf",
    year: 2023,
    color: "White"
  }
];

// Print the list of cars and their information
console.log("List of Cars:");
for (const car of cars) {
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Color: ${car.color}\n`);
}

// Question 21
const fruits: string[] = ["apple", "banana", "cherry"];

try {
  const fruit = fruits[3];
  console.log(fruit); // This line will not be executed due to the error
} catch (error) {
  console.error("An error occurred:", error);
}

// The program continues after handling the error
console.log("Program continues...");

// Question 22
let number = 5;

console.log("Is number == 5? I predict True.");
console.log(number == 5);

console.log("Is number === 5? I predict True.");
console.log(number === 5);

console.log("Is number > 10? I predict False.");
console.log(number > 10);

console.log("Is number < 10? I predict True.");
console.log(number < 10);

console.log("Is number >= 5? I predict True.");
console.log(number >= 5);

console.log("Is number <= 5? I predict True.");
console.log(number <= 5);

let text = "Hello";

console.log("Is text == 'Hello'? I predict True.");
console.log(text == 'Hello');

console.log("Is text === 'Hello'? I predict True.");
console.log(text === 'Hello');

console.log("Is text == 'hello'? I predict False.");
console.log(text == 'hello');

console.log("Is text !== 'Hello'? I predict False.");
console.log(text !== 'Hello');

// Question 23

// Tests for equality and inequality with strings
let fruit = "apple";
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === "apple");

let city = "New York";
console.log("Is city not equal to 'Los Angeles'? I predict True.");
console.log(city !== "Los Angeles");

// Tests using the lower case function
let dummytext = "Hello, World!";
console.log("Is text in lowercase equal to 'hello, world!'? I predict True.");
console.log(dummytext.toLowerCase() === "hello, world!");

// Numerical tests
let num1 = 10;
let num2 = 20;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;

console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm);

console.log("Is it sunny or rainy? I predict True.");
console.log(isSunny || !isWarm);

// Test whether an item is in an array
let colors = ["red", "blue", "green", "yellow"];
let targetColor = "green";

console.log(`Is ${targetColor} in the colors array? I predict True.`);
console.log(colors.includes(targetColor));

// Question 24, 25
const alienColor: string = 'green';

if (alienColor === 'green') {
  console.log('Player just earned 5 points.');
}
else {
  console.log('Player just earned 10 points.');
}

const alienColor2: string = 'red';

if (alienColor2 === 'green') {
  console.log('Player just earned 5 points.');
}else {
  console.log('Player just earned 10 points for shooting the alien of a different color.');
}

// Question26
const alienColor3: string = 'green';

if (alienColor3 === 'green') {
  console.log('Player just earned 5 points.');
} else if (alienColor3 === 'yellow') {
  console.log('Player just earned 10 points.');
} else if (alienColor3 === 'red') {
  console.log('Player just earned 15 points.');
}

const alienColor4: string = 'red';

if (alienColor4 === 'green') {
  console.log('Player just earned 5 points.');
} else if (alienColor4 === 'yellow') {
  console.log('Player just earned 10 points.');
} else if (alienColor4 === 'red') {
  console.log('Player just earned 15 points.');
}

const alienColor5: string = 'yellow';

if (alienColor5 === 'green') {
  console.log('Player just earned 5 points.');
} else if (alienColor5 === 'yellow') {
  console.log('Player just earned 10 points.');
} else if (alienColor5 === 'red') {
  console.log('Player just earned 15 points.');
}

// Question27
const age: number = 25;

if (age < 2) {
  console.log('The person is a baby.');
} else if (age >= 2 && age < 4) {
  console.log('The person is a toddler.');
} else if (age >= 4 && age < 13) {
  console.log('The person is a kid.');
} else if (age >= 13 && age < 20) {
  console.log('The person is a teenager.');
} else if (age >= 20 && age < 65) {
  console.log('The person is an adult.');
} else {
  console.log('The person is an elder.');
}

// Question28
const favorite_fruits: string[] = ["pineapples", "leeches", "strawberries"];

if (favorite_fruits.includes("pineapples")) {
  console.log("You really like pineapples!");
}

if (favorite_fruits.includes("leeches")) {
  console.log("You really like leeches!");
}

if (favorite_fruits.includes("strawberries")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwi!");
} else {
  console.log("Kiwi is not one of your favorite fruits.");
}

if (favorite_fruits.includes("oranges")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not one of your favorite fruits.");
}

// Question 29
const usernames: string[] = ["admin", "Ali", "Bilal", "Chacha", "Dada"];

for (const username of usernames) {
  if (username === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// Question 30
const users2: string[] = []; // An empty array of users

if (users2.length === 0) {
  console.log('We need to find some users.');
} else {
  const age = 25; 
  if (age < 2) {
    console.log('The person is a baby.');
  } else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
  } else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
  } else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
  } else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
  } else {
    console.log('The person is an elder.');
  }
}

// Question 31
const current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const new_users: string[] = ['Frank', 'Alice', 'Grace', 'John', 'Mallory'];

for (const newUser of new_users) {
  const isUsernameTaken = current_users.some(
    (currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Username '${newUser}' is already in use. Please enter a new username.`);
  } else {
    console.log(`Username '${newUser}' is available.`);
  }
}

// Question 32
const ordinal_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of ordinal_numbers) {
  let ordinal;

  if (number === 1) {
    ordinal = '1st';
  } else if (number === 2) {
    ordinal = '2nd';
  } else if (number === 3) {
    ordinal = '3rd';
  } else {
    ordinal = `${number}th`;
  }

  console.log(ordinal);
}

// Question 33
const favoritePizzas: string[] = ['Pepperoni', 'bbq', 'chicken fajita'];

console.log('My favorite pizzas are:');

for (const pizza of favoritePizzas) {
  console.log(pizza);
}

console.log('\nI like the following pizzas:');

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log('\nI really love pizza!');

// Question 34
const animals: string[] = ['Panda', 'Cat', 'Rabbit'];

console.log('The animals are:');

for (const animal of animals) {
  console.log(animal);
}

console.log('\nStatements about these animals:');

for (const animal of animals) {
  let statement;

  switch (animal) {
    case 'Panda':
      statement = 'A panda would make a great pet.';
      break;
    case 'Cat':
      statement = 'A cat is a wonderful companion.';
      break;
    case 'Rabbit':
      statement = 'A rabbit is a cute and gentle pet.';
      break;
    default:
      statement = 'This animal is special in its own way.';
  }

  console.log(statement);
}

console.log('\nAny of these animals would make a great pet!');

// Question35
function make_shirt(size: string, message: string): void {
  console.log(`You've ordered a ${size}-sized T-shirt with the following message: "${message}"`);
}
make_shirt('Small', 'I love its stiching!');

// Question 36
function makeShirt(size: string = 'Large', message: string = 'I love its design'): void {
  console.log(`You've ordered a ${size}-sized T-shirt with the following message: "${message}"`);
}

makeShirt();
makeShirt('Medium');
makeShirt('Small', 'Design is awesome!');

// Question 37
function describe_city(city: string, country: string = 'Default Country'): void {
  console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Paris');
describe_city('New York', 'USA');

// Question 38
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('New York', 'USA');
const location3 = city_country('Sydney', 'Australia');

console.log(location1);
console.log(location2);
console.log(location3);

// Question 39
function make_album(artistName: string, albumTitle: string, tracks?: number): { artistName: string; albumTitle: string; tracks?: number } {
   return {
     artistName,
     albumTitle,
     tracks: tracks ?? undefined,
   };
 }
 const album1 = make_album('Artist1', 'Album One', 10);
 const album2 = make_album('Artist2', 'Album Two');
 const album3 = make_album('Artist3', 'Album Three', 15);
 
 console.log(album1);
 console.log(album2);
 console.log(album3);
 
// Question 40
function showMagicians(magicians: string[]): void {
   for (const magician of magicians) {
     console.log(magician);
   }
 }
 
 const magicianNames: string[] = ['David', 'Harry', 'Penn', 'Teller'];
  showMagicians(magicianNames);

//   Question 41
function make_great(magicians: string[]): string[] {
   const greatMagicians = magicians.map((magician) => magician + ' the Great');
   return greatMagicians;
 }
 
 const greatMagicianNames = make_great(magicianNames);
 
 showMagicians(greatMagicianNames);
 
//  Question 42
const magicianNames2: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

const greatMagicianNames2 = make_great([...magicianNames]); 
console.log('Original Magicians:');
showMagicians(magicianNames2);

console.log('\nGreat Magicians:');
showMagicians(greatMagicianNames2);

// Question 43
function makeSandwich(...items: string[]): void {
   console.log('You ordered a sandwich with the following items:');
   for (const item of items) {
     console.log(`- ${item}`);
   }
   console.log('Enjoy your sandwich!\n');
 }
 
 makeSandwich('Ham', 'Cheese', 'Lettuce');
 makeSandwich('Turkey', 'Tomato');
 makeSandwich('Peanut Butter', 'Jelly', 'Banana');
 
//  Question 44
type CarDetails = {
   manufacturer: string;
   model: string;
   [key: string]: any;
 };
 
 function createCar(manufacturer: string, model: string, ...details: [key: string, value: any][]): CarDetails {
   const car: CarDetails = { manufacturer, model };
 
   for (const [key, value] of details) {
     car[key] = value;
   }
 
   return car;
 }
 
 const carInfo = createCar('Toyota', 'Camry', ['color', 'Blue'], ['year', 2023]);
 
 console.log(carInfo);
 