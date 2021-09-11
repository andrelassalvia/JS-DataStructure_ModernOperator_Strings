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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol',
  starterIndex: 2,
  mainIndex: 0,
});

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

// ==== THE SPREAD OPERATOR ==== //
// to expand an array into all its elements, unpacking all elements in one.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// agora usando o spread operator
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray); //[1, 2, 7, 8, 9]

// mas o spread operator possui mais funcoes