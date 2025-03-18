// let num = Number(prompt("Введите номер"));

// let count = 0;
// while (count < num) {
//     console.log("Hello!!!");
//     count++;
// }


// for (let i = 0; i < num; i++) {
//     console.log("Hello for");
    
// }

// for (let j = 0; j < num; j++) {
//     console.log(`for 2 значение j ${j}`);
    
// }

//_______________________________


// let pass;
// let count = 0;
// do {
//         if (count >= 3) {
//         alert("Пароль не верный!!!")
//     }
//     pass = Number(prompt("Введите пароль"));
//     count++;


// } while (pass !== 123);

// _____________________________________________________

let count = 0;
alert(`Вы нажали на кнопку ${count} раз`)
function counterClickButtons() {
    alert(++count);
    console.log(count);

}
