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
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
