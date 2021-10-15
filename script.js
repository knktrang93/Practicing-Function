"use strict";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet("Helloo")("Trang");

//change to arrow function

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("Helloo")("Trang");

//--------------------------------------------------

const southWest = {
  airline: "South West",
  iataCode: "SW",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

southWest.book(239, "Trang Khong");
southWest.book(567, "Tra Khong");

const american = {
  airline: "American",
  iataCode: "AA",
  bookings: [],
};

const book = southWest.book;

// book(123, "Truc Khong"); ==> doesn't work

//call method
book.call(american, 123, "Truc Khong");
console.log(american);

book.call(southWest, 456, "Trinh Khong");
console.log(southWest);

const united = {
  airline: "United",
  iataCode: "UA",
  bookings: [],
};
book.call(united, 269, "Triet Khong");
console.log(united);

//apply method
const flightData = [144, "Tri Khong"];
book.apply(united, flightData);
console.log(united);

//using call with spread operator
book.call(united, ...flightData);
