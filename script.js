"use strict";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet("Helloo")("Trang");

//arrow function

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Helloo")("Trang");
