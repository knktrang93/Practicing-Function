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

book.call(southWest, 456, "Trinh Khong");

const united = {
  airline: "United",
  iataCode: "UA",
  bookings: [],
};
book.call(united, 269, "Triet Khong");

//apply method
const flightData = [144, "Tri Khong"];
book.apply(united, flightData);

//using call with spread operator
book.call(united, ...flightData);

//bind method
const bookAM = book.bind(american);
const bookSW = book.bind(southWest);

bookAM(12, "Tre Khong");

const bookAM123 = book.bind(american, 123);
bookAM123("Trang Khong");
