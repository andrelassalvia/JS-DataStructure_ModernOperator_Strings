'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! Starter: ${this.starterMenu[starterIndex]}, Main: ${this.mainMenu[mainIndex]}. Time: ${time} and address: ${address}`
    );
  },
  openingHours: {
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
// Podemos declarar as variaveis como se fosseuma array. Parece mas nao é array. É chamado DESTRUCTURING ARRAY
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
