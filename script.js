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
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
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

book(123, "Truc Khong");
