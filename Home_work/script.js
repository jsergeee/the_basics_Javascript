//Напишите программу, которая запрашивает у пользователя число и выводит, является ли оно четным или нечетным.

// let getNumber =  Number(prompt('Введите число'));

// getResult = "";

// if (getNumber %2 === 0) {
//        getResult = `Ваше число ${getNumber} четное`;
// } else {
//     getResult = `Ваше число ${getNumber} нечетное`;
// }
// document.getElementById("result").textContent = getResult;

//____________________________________________________
//Напишите программу, которая запрашивает у пользователя его возраст и выводит сообщение о том, может ли он голосовать (18 лет и старше).

// let getAge = Number(prompt("Введите Ваш возраст"));

// possibilitiVote = "";

// if (getAge > 18) {
//     possibilitiVote = `Ваш возраст ${getAge}, вы можете голосовать`;
// } else {
//     possibilitiVote = `Ваш возраст ${getAge}, вы не можете голосовать`;
// }

// document.getElementById("mesage").textContent = possibilitiVote;

//Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них.

let getNubForMax1 = Number(prompt("Введите число 1"));
let getNubForMax2 = Number(prompt("Введите число 2"));
let getNubForMax3= Number(prompt("Введите число 3"));

let max = Math.max(getNubForMax1, getNubForMax2, getNubForMax3);

alert(`Максимальное число: ${max}`);

//Напишите программу, которая запрашивает у пользователя число и выводит таблицу умножения для этого числа от 1 до 10.


//Напишите программу, которая запрашивает у пользователя число N и выводит сумму всех чисел от 1 до N.