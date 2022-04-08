// import ClassRoom from "./0-classroom.js";

// const room = new ClassRoom(10);
// console.log(room._maxStudentsSize)



// ===================== 1-make_classrooms ===================
// import initializeRooms from './1-make_classrooms.js';

// console.log(initializeRooms());




// ============================ 2-hbtn_course ====================
// import HolbertonCourse from "./2-hbtn_course.js";

// const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
// console.log(c1.name);
// c1.name = "Python 101";
// console.log(c1);

// try {
//     c1.name = 12;
// } 
// catch(err) {
//     console.log(err);
// }

// try {
//     const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
// }
// catch(err) {
//     console.log(err);
// }




// ========================== 3-Currency =======================
// import Currency from "./3-currency.js";

// const dollar = new Currency('$', 'Dollars');
// console.log(dollar.displayFullCurrency());




// ========================== 4-pricing ==============================
// import Pricing from './4-pricing.js';
// import Currency from './3-currency.js';

// const p = new Pricing(100, new Currency("EUR", "Euro"))
// console.log(p);
// console.log(p.displayFullPrice());


// ========================= 5-building =========================
// import Building from './5-building.js';

// const b = new Building(100);
// console.log(b);

// class TestBuilding extends Building {}

// try {
//     new TestBuilding(200)
// }
// catch(err) {
//     console.log(err);
// }




// =========================== 6-sky_high =========================
// import SkyHighBuilding from './6-sky_high.js';

// const building = new SkyHighBuilding(140, 60);
// console.log(building.sqft);
// console.log(building.floors);
// console.log(building.evacuationWarningMessage());




// =========================== 7-airport ==========================
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());
