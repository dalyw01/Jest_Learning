// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new#see_also

function Car(make, model, year, working) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.working = working;
}

const car1 = new Car('Volkswagen' , 'Golf'  , 1993, true);
const car2 = new Car('Honda'      , 'Civic' , 1993, true);
const car3 = new Car('Toyota'     , 'Prius' , 1999, true);

// Some quick examples to verify
// console.log(car1.make);
// console.log(car2.model);
// console.log(car3.year);
// car3.year = 2022
// console.log(car3.year);
// console.log(car3.working);

const y = { Car }; // Items you wish to export
module.exports = y; // Export the object

