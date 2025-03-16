// let userAnswer = prompt("Зимой и летом одним и цветом");
// if (userAnswer === "") {
//   console.log('Woid');
// }
// console.log(userAnswer);

// if (userAnswer === "Ёлка") {
//   alert('Молодец!!');
// } else {
//   alert('Не угадал!')
// }

// (условие) ? ДА : НЕТ

// (userAnswer === "Ёлка") ? alert("Молодец!!") : alert("Не угадал!");

// alert(userAnswer === "Ёлка" ? "Молодец!!" : "Не угадал!");

// alert(userAnswer.toLowerCase() === "елка" ? "Молодец!!" : "Не угадал!");

// if (userAnswer === "") {
//   alert('Пустое значение!')
// } else if (userAnswer === "Ёлка") {
//   alert("Молодец!!");
// }
// else alert("Не угадал!");
//____________________________________________________
// let pass = prompt('Введите пароль');
// pass = Number(pass);
// if (pass === 123) {
//   alert('Пароль принят')
// } else {
//   alert('Пароль не верный!')
// }
//===============Альтернатива:=====================
let pass = Number (prompt("Введите пароль"));
alert((pass === 123) ? "Пароль принят" : "Пароль не верный!");