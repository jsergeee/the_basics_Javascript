// let age = Number(prompt("Введите Ваш возраст"));
// alert("Вам " + age + " лет");
// let UserName = String(prompt("Введите Ваше имя"));
// alert("Добро пожаловать на сайт " + UserName + "!");

// let a = 13;
// let b = 5;

// let a;
// alert(a);

// let a = Number(prompt('Введите первое Число'));
// let b = Number(prompt('Введите второе число'));

// let message =
//   `Разность чисел ${a - b} \n` +
//   `Произведение ${a * b} \n` +
//   `Частное чисел ${a / b} \n` +
//   `Остаток от деления ${a % b} \n`;

//   alert(message);

// console.log(`Сумма чисел ${a + b}`);
// console.log(`Разность чисел ${a - b}`);
// console.log(`Произведение ${a * b}`);
// console.log(`Частное чисел ${a / b}`);
// console.log(`Остаток от деления ${a % b}`);

// let getNun = Number(prompt("Введите число"));
// let message;

// if (getNun > 5) {
//   console.log("Число больше 5");
// } else if (getNun < 5) {
//   console.log("Число меньше 5");
// } else {
//   console.log("Число равно 5");
// }

// if (getNun > 5) {
//   let message = "Число больше 5";
//   alert(message);
// } else if (getNun < 5) {
//   let message = "Число меньше 5";
//   alert(message);
// } else {
//   let message = "Число равно 5";
//   alert(message);
// }

// let test1 = 5;
// let test2 = 10;

// if (test1 === test2) {
//     console.log("Числа равны");
// }
// else {
//     console.log("Числа не равны");
// }

// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));

// if (a === b) {
//     console.log("Числа равны");
// } else if (a < b) {
//     console.log("Первое число меньше второго");
// } else {
//     console.log("Второе число меньше первого");
// }

let a = Number(prompt("Введите число"));

if (a === 15 || a === 0) {
  console.log("равно 15 или 0");
} else if (a > 0 && a < 15) {
  console.log("Больше нуля и меньше 15");
} else {
  console.log("меньше нуля или больше 15");
}
