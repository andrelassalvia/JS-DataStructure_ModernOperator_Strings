'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const [mon, tue, wed, thu, fri, sat, sun] = [
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun',
];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 4}`]: {
    // we can make math calcs in the object
    open: 0,
    close: 12 + 12,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // enhanced ES6 objects:
  openingHours, // we can call an external object by writing it name.

  order(starterIndex, mainIndex) {
    // new way to write a method
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! Starter: ${this.starterMenu[starterIndex]}, Main: ${this.mainMenu[mainIndex]}. Time: ${time} and address: ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here the pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...othersIngredient) {
    console.log(mainIngredient);
    console.log(othersIngredient);
  },
};

/*
// ==== DESTRUCTURING ARRAYS ==== //
const arr = [2, 3, 4];
// Podemos declarar as variaveis como se fosse uma array. Parece mas nao é array. É chamado DESTRUCTURING ARRAY
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

const [first_again, , third] = restaurant.categories; // para pular um basta colocar um vazio entre virgulas
console.log(first_again, third);

// E se quisermos inverter a ordem? Imagine que "vegetarian" deva vir antes de "italian"
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainly] = restaurant.order(2, 0);
console.log(starter, mainly);

// NEST
const nested = [3, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // se nao houver valor assume 1. Util quando nao sabemos o tamanho final que vira de array
*/
// =============================================================================================================== //
/*
// ==== DESTRUCTURING OBJECTS ==== //
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// podemos mudar o nome das propriedades:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

// Default Variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 99;
let b = 111;
const obj = { a: 23, b: 13, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
// =============================================================================================================== //
/*
// ==== THE SPREAD OPERATOR ==== //
// to expand an array into all its elements, unpacking all elements in one.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// agora usando o spread operator
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray); //[1, 2, 7, 8, 9]

// mas o spread operator possui mais funcoes
console.log(...goodNewArray); //1 2 7 8 9

// Portanto, spread operator util quando queremos fazer uma nova constante puxando elemetos de outra constante
const newMenu = [...restaurant.mainMenu, 'gnocchi'];
console.log(...newMenu); // Pizza Pasta Risotto gnocchi

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. But NOT OBJECTS.
// We can use spread operator in all iterables.

// Strings
const str = 'Jonas';
const letters = [...str];
console.log(letters); // ['J', 'o', 'n', 'a', 's']

// A usefull function example
// const ingredients = [
//   prompt("Let's make a pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients); // ['onion', 'molho', 'xurizo']

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundIn: 1998,
  ...restaurant,
  founder: 'Giuseppe',
};
console.log(newRestaurant);

const copyRestaurante = { ...restaurant };
copyRestaurante.name = 'Ristorante Roma';
console.log(copyRestaurante.name); //
console.log(restaurant.name);
*/
// =============================================================================================================== //
/*
// ==== REST PATTERN AND PARAMETERS ==== //
// It does the opposite of spread operator
// it collect multiple element and condese them into an array

// SPREAD because on the right  of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(...arr); //1 2 3 4 5

// REST because on the left of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...outros] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, outros); // Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}} - print only weekdays

// functions
// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(2, 3); // [2, 3]
// add(1, 5, 4, 7, 8); // [1, 5, 4, 7, 8]
// add(5, 4, 7, 5, 23, 5, 4, 5, 8, 5); // [5, 4, 7, 5, 23, 5, 4, 5, 8, 5]

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }
  console.log(sum);
};
add(2, 3); // 5
add(1, 5, 4, 7, 8); // 25
add(5, 4, 7, 5, 23, 5, 4, 5, 8, 5); // 71

const x = [25, 7, 8, 9, 10];
add(...x); // 59

restaurant.orderPizza('mushrooms', 'olive', 'onion', 'cheese'); //mushrooms (3) ['olive', 'onion', 'cheese']
*/

/*
// =============================================================================================================== //
// ==== SHORT CIRCUIT LOGICAL OPERATORS ==== //
// Use any data-type returns any data-type

// OR operator
// Quando mais de 1 valor for True o js retorna o primeiro deles.
console.log('---------OR------------');
console.log(3 || 'Jonas'); // 3 - acha o primeiro verdadeiro
console.log('' || 'Jonas'); // Jonas - acha o primeiro verdadeiro
console.log(0 || true); // true - acha o primeiro verdadeiro
console.log(undefined || null); // null - acha o ultimo falso

// A pratical instance
const guests1 = restaurant.guests ? restaurant.guests : 10;
console.log(guests1); // 10

// mas podemos escrever de forma mais simples
const guest2 = restaurant.guest || 12;
console.log(guest2); //12

// AND operator
// funciona de forma contraria ao OR
// vai achar o ultimo verdadeiro se todos forem verdadeiros
console.log('-----------AND-------------');
console.log(3 && 'Jonas'); // Jonas - acha o ultimo verdadeiro
console.log('' && 'Jonas'); // '' - se ha algum falso a sentenca e falsa e retorna o primeiro falso
console.log(0 && true); // 0 - se ha algum falso a sentenca e falsa e retorna o primeiro falso
console.log(undefined && null); // undefined - se ha algum falso a sentenca e falsa e retorna o primeiro falso
console.log('' && undefined && null && 0); // '' - se ha algum falso a sentenca e falsa e retorna o primeiro falso
console.log('Hello' && 23 && null && true); // null - se ha algum falso a sentenca e falsa e retorna o primeiro falso

// Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// podemos escrever assim
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
// =============================================================================================================== //
// ==== The Nullish Coalescing Operator (??) ==== //

restaurant.guestNumbers = 0;
const guest = restaurant.guestNumbers || 10;
console.log(guest); // 10

// Nullish: NULL and undefined (NOT 0 or '')
const newGuest = restaurant.guestNumbers ?? 10;
console.log(newGuest); // 0
*/

/*
// =============================================================================================================== //
// ==== The New FOR OF Loops ==== //
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// traditional way
for (let i = 0; i < menu.length; i++) {
  const element = menu[i];
  console.log(`Price of ${element} is ok!!!`);
}
// new way
for (const item of menu) console.log(`New way to print ${item}`);
// if I want to see the i element
for (const item of menu.entries()) console.log(item); // entries return a pair of key=>value for each element of the array.
console.log([...menu.entries()]);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}
// but we can do it better using the Destructuring Elements of array
for (const [i, el] of menu.entries()) {
  console.log(`${i}:${el}`);
}
*/

// =============================================================================================================== //
// ==== ENHANCED OBJECT LITERALS ==== //
// There is 3 new ways to write literals objects
// Look at the line n 44 how to call an external object.
// Look at the line n 46 a new way to write a method.
// Look at the line n 31 to check a calc in the object.

/*
// =============================================================================================================== //
// ==== OPTIONAL CHAINING ==== //
console.log(restaurant.openingHours.fri.open); // we can create a chain to retrieve a value
// but if we write a day without a openingHours we will receive a error message
console.log(restaurant.openingHours.mon); //undefined
// console.log(restaurant.openingHours.mon.open); // error: cannot read undefined

// so we can treat it with a if statement
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // nokthing written
// but imagine that openingHours also could be optional. We must check if it exists first.
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // nokthing written
// But if we have a lot to check it will be impossible.
// We can use the OPTIONAL CHAINING to fix it
// We put a ? in the property that we are checking
console.log(restaurant.openingHours.mon?.open); // undefined -- Means only if mon exists the open property will be read.
// and we can have multiple optionals chaining
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day} the restaurant will open at ${open}.`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// arrays
const users = [{ name: 'Jonas', email: 'jonas@qquercoisa.com' }];
console.log(users[0]?.name ?? 'User does not exist!');
console.log(users[1]?.name ?? 'User does not exist!');
*/

// =============================================================================================================== //
// ==== Looping Objects: Object Keys, Values, and Entries ==== //

// KEYS
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open ${properties.length} days for week`);

for (const days of Object.keys(openingHours)) {
  console.log(days); // thu, fri, sat, day-6
}

let openStr = `We are open ${properties.length} days per week: `;
for (const days of properties) {
  openStr += `${days}, `;
}
console.log(openStr);

// VALUES
const values = Object.values(openingHours);
for (const days of values) {
  console.log(days);
}

// ENTRIES
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
