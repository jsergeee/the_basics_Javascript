// const car = {
//   make: "Audi",
//   model: "A5",
//   year: 2023,
//   color: "red",
//   passenger: 2,
//   power: 249,
// };

// console.log(car.model);
// console.log(car.power);
// car.power = 350;
// console.log(car.power);
//__________________________________________________________

// const product = {
// name: 'Table',
// price: 5000,

// };

// let productSale = product;
// productSale.price = 1500;
// let productNew = product;
// productNew.text = 'Офисный'
// console.log(productSale);
// console.log(product);
// console.log(productNew);

//-----------------------------------------------------------

// const car = {
//   make: "Audi",
//   model: "A5",
//   year: 2023,
//   color: "red",
//   passenger: 2,
//   power: 249,
//   odometer: 100,
// };

// function haveRoadTrip (myCar, distance) {
//     myCar.odometer += distance;
// }

// haveRoadTrip(car, 150);
// console.log(car.odometer);

//-----------можно функц добвить в объект и это называется - metod--------------

// const car = {
//   make: "Audi",
//   model: "A5",
//   year: 2023,
//   color: "red",
//   passenger: 2,
//   power: 249,
//   odometer: 0,
//   startEngine: function(){
//     console.log("Engine started");
//   }
// };

//--------------------------------------------------

// const product = {
//   name: "Table",
//   price: 5000,
//   count: 2,
//   buy: function () {
//     if (product.count > 0) {
//       console.log("Вы купили данный товар");
//     } else {
//       console.log("Данный товар нельзя добавить в корзину");
//     }
//   }
// };
// product.count = 1;
// product.buy();

//===========================================================================

// const car = {
//   make: "Audi",
//   model: "A5",
//   year: 2023,
//   color: "red",
//   passenger: 2,
//   power: 249,
//   odometer: 0,
//   engineIsStarted: false,
//   startEngine: function () {
//     this.engineIsStarted = true;
//   },
//   stopEngine: function () {
//     this.engineIsStarted = false;
//   },
//   haveRoadTrip: function (distance) {
//     if (this.engineIsStarted) {
//       this.odometer += distance;
//     } else {
//       alert("Сначала запусти двигатель!");
//     }
//   },
// };


//=================================================================

// const product = {
//   name: "Table",
//   price: 2000,
//   count: 0,
//   userRegistred: false,
//   reg: function() {
//     product.userRegistred = true;
//   },
//   countProduct: function () {
//     if (product.count > 0) { //  обращение к полю через название объекта, нужно заменить на this, чтобы при изменении назваиня объекта функции работали
//       console.log("Добавьте товар в корзину");
//     } else {
//       console.log("Данный товар нельзя добавить в корзину");
//     }
//   },
//   buyProduct: function() {
//     if (product.userRegistred){
//       //  обращение к полю через название объекта, нужно заменить на this
//       console.log("Товар добавлен в корзину");
//     } else {
//         console.log("Вам нужно зарегистрироваться - выполнить product.reg()");
//     }
//   }
// };
// product.buyProduct();
// product.reg();
// product.buyProduct();

//================================================================================

// const productNew = {
//   name: "Table",
//   price: 2000,
//   count: 0,
//   userRegistred: false,
//   reg: function () {
//     this.userRegistred = true;
//   },
//   countProduct: function () {
//     if (this.count > 0) {
//       //  обращение к полю через название объекта, нужно заменить на this, чтобы при изменении названия объекта функции работали
//       console.log("Добавьте товар в корзину");
//     } else {
//       console.log("Данный товар нельзя добавить в корзину");
//     }
//   },
//   buyProduct: function () {
//     if (this.userRegistred) {
//       //  обращение к полю через название объекта, нужно заменить на this
//       console.log("Товар добавлен в корзину");
//     } else {
//       console.log("Вам нужно зарегистрироваться - выполнить product.reg()");
//     }
//   },
// };
// productNew.buyProduct();
// productNew.reg();
// productNew.buyProduct();



//=====прео,разование объекта в массив================
// с помощью метода Object.values()

// const car = {
//   make: "Audi",
//   model: "A5",
//   year: 2023,
//   color: "red",
//   passenger: 2,
//   power: 249,
//   odometer: 0,

// };

// console.log(Object.values(car)); // ['Audi', 'A5', 2023, 'red', 2, 249, 0]
//===================Object.keys()===========================================

// const group1 = {
// "Ivanov": {
// practicePlace: "ldu-1",
// practiceTime: 56
// },
// "Petrov": {
// practicePlace: "kamaz",
// practiceTime: 120
// },
// "Sidorov": {
// practicePlace: "ldu-1",
// practiceTime: 148
// },
// "Belkin": {
// practicePlace: "GosDZU",
// practiceTime: 20
// },
// "Avdeev": {
// practicePlace: "LPK",
// practiceTime: 160
// }
// }
// const group1Students = Object.keys(group1);
// console.log(group1Students); // ["Ivanov", "Petrov", "Sidorov", "Belkin", "Avdeev"]


//======================Object.entries===
// const car = {
// make: "Audi",
// model: "A5",
// year: 2023,
// color: "red",
// passengers: 2,
// power: 249,
// odometer: 0,
// };
// console.log(Object.entries(car));
// // 0: (2) ['make', 'Audi']
// // 1: (2) ['model', 'A5']
// // 2: (2) ['year', 2023]
// // 3: (2) ['color', 'red']
// // 4: (2) ['passengers', 2]
// // 5: (2) ['power', 249]
// 6: (2) ['odometer', 0]


//====================== метод map==========

// const studentsPracticeTime = [
// {
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Мы хотим вывести в таблицу студентов и информацию для каждого, прошел
// // ли он практику уже. Практика будет считаться пройденной, если студент
// // отработал 120 часов или больше.
// const dataForTable = studentsPracticeTime.map((student) => {
// if (student.practiceTime < 120) {
// return { // Мы возвращаем новый объект, более удобный для вывода.
// Student: student.firstName,
// Practice: "Not passed"
// };
// } else {
// return {
// Student: student.firstName,
// Practice: "Passed"
// };
// }
// });
// console.table(dataForTable); // В консоль можно выводить разными

//===============filter===

// const studentsPracticeTime = [{
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Мы хотим отфильтровать массив студентов, оставив в новом массиве только
// // тех, кто уже прошел практику. Практика будет считаться пройденной, если
// // студент отработал 120 часов или больше.
// const studentsPassedPractice = studentsPracticeTime.filter((student) => {
// if (student.practiceTime < 120) return false
// return true
// });
// console.log(studentsPassedPractice); // Получили новый массив, в котором
// // только те студенты, кто уже прошел практику.
// // [ {
// // "firstName": "Petrov",
// // "practiceTime": 120
// // }, {
// // "firstName": "Sidorov",
// // "practiceTime": 148
// // }, {
// // "firstName": "Avdeev",
// // "practiceTime": 160
// // }
// // ]

//================reduce=====================
//=======================без reduce======================
// const studentsPracticeTime = [{
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Посчитаем сколько всего часов практики отработали студенты.
// let totalTime = 0; // Объявим переменную для хранения суммы всех часов.
// for (let index = 0; index < studentsPracticeTime.length; index++) {
// totalTime = totalTime + studentsPracticeTime[index].practiceTime;
// }
// console.log(totalTime); // 504
//=============================c reduce=====================

// const studentsPracticeTime = [{
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Посчитаем сколько всего часов практики отработали студенты.
// const totalTime = studentsPracticeTime.reduce((acc, student) => { //
// // Первое значение - это функция обратного вызова, которая будет получать
// // значение аккумулятора (acc) при каждой итерации; и текущий элемент массива
// // (student).
// return acc + student.practiceTime;
// }, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.
// console.log(totalTime); // 504
// const studentsPracticeTime = [
// {
// firstName: "Ivanov",
// practiceTime: 56
// }, {
// firstName: "Petrov",
// practiceTime: 120
// }, {
// firstName: "Sidorov",
// practiceTime: 148
// }, {
// firstName: "Belkin",
// practiceTime: 20
// }, {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Посчитаем сколько всего часов практики отработали студенты.
// const totalTime = studentsPracticeTime.reduce((acc, student) => { //
// // Первое значение - это функция обратного вызова, которая будет получать
// // значение аккумулятора (acc) при каждой итерации; и текущий элемент массива
// // (student).
// return acc + student.practiceTime;
// }, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.
// console.log(totalTime); // 504

// =======================some====================
// const studentsPracticeTime = [
// {
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Проверим, есть ли хоть один студент, который прошел практику.
// const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
// console.log(student.firstName); // Добавим вывод студента, чтобы посмотреть сколько элементов массива будет проитерированно.
// return student.practiceTime >= 120;
// });
// // "Ivanov"
// // "Petrov" - итерации остановились на втором элементе массива, т.к. он удовлетворяет нашему условию и метод some дальше итерации не выполняет.
// console.log(isSomebodyPassedPractice); // true - среди студентов есть те, кто прошел практику.

//===============================find==========================
// const studentsPracticeTime = [
// {
// firstName: "Ivanov",
// practiceTime: 56
// },
// {
// firstName: "Petrov",
// practiceTime: 120
// },
// {
// firstName: "Sidorov",
// practiceTime: 148
// },
// {
// firstName: "Belkin",
// practiceTime: 20
// },
// {
// firstName: "Avdeev",
// practiceTime: 160
// }
// ];
// // Мы хотим найти студента Belkin и посмотреть сколько времени он отработал на практике.
// const studentBelkin = studentsPracticeTime.find((student) => {
// return student.firstName === "Belkin";
// });
// console.log(studentBelkin.practiceTime); // 20

//======================= Деструктуризация ================

// Сбор данных из объекта.
// const student = {
// firstName: "Ivan",
// lastName: "Petrov",
// age: 21,
// };
// const firstName = student.firstName; // мы объявляем отдельно переменную, под каждый нужный нам параметр.
// const lastName = student.lastName;
// const age = student.age;
// // Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const student1 = students[0];
// const student2 = students[1];
// const student3 = students[2];

//==============Не очень удобно. Деструктуризация дала нам гораздо более простой и удобный синтаксис:

// // Сбор данных из объекта.
// const student = {
// firstName: "Ivan",
// lastName: "Petrov",
// age: 21,
// };
// const { firstName, lastName, age } = student; // Деструктуризация - мы объявляем все переменные в фигурных скобках, название должно совпадать с
// //нужным нам параметром.
// // Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const [student1, student2, student3] = students; // Деструктуризация - Тут
// //мы указываем имена переменных в квадратных скобках, и в них по порядку
// //будут записаны элементы массива.
