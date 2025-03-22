// let num = Number(prompt("Введите номер"));

// const { use } = require("express/lib/application");

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

// let count = 0;
// alert(`Вы нажали на кнопку ${count} раз`)
// function counterClickButtons() {
//     alert(++count);
//     console.log(count);

// }
//___________Maccивы_________________________

// const students = [];  //  массивы всегда создаются через const!!

// students.push('Иванов');
// students.push("Петров");
// students.push("Сидоров");
// students.push(1);

// console.log(students);
// console.log(students[0]);
// console.log(students.length);
// console.log(students[students.length - 1]);

//_______________

// const user = [];
// const userName = prompt('Введите Ваше имя');
// const userAge = prompt("Введите Ваш возраст");

// user.push(userName);
// user.push(userAge);

// console.log(user);
//_____________________
// const user = [];

// user.push(prompt("Введите Ваше имя"));
// user.push(Number (prompt("Введите Ваше имя")));

// console.log(user);

//_____________Метод pop__________________

// const numbers = [2, 3, 19, 15];
// alert(`Запомни цифры ${numbers}`)

// // console.log(numbers[numbers.length - 1]); 

// console.log(numbers.pop());
// console.log(numbers);


//______join, split__________________

// const words = 'example'
// // console.log(words.split(''));
// const arrWords = words.split('');
// // console.log(arrWords.pop());
// const upWord = arrWords.pop();
// // console.log(upWord.toLocaleUpperCase());
// // console.log(upWord);
// // console.log(arrWords.join(','));
// arrWords.push(upWord.toLocaleUpperCase());
// console.log(arrWords.join(''));

//_____shift, stack, slise indexOf________________________________

// const arr = [1, 2, 3, 4]

// arr.slice(0,2)

// arr.slice(1,2)
//_________массивы__________________

// const arr = [5, 1, 2, 3, 7, 19, 7 ,13, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
    
// }

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//     if (element>=5) {
//         console.log(element);
//     } else {
//         continue;
//     }
  
// }

// console.log(arr.indexOf(3)); 


//__________________

const arrAnswers = ['елка', 'ёлка', 'сосна'];
const userAnswer = prompt('Зимой и летом одним цветом')
for (let i = 0; i < arrAnswers.length; i++) {
  const element = arrAnswers[i];
  if (element === userAnswer) {
    console.log("Молодец!!!");
    break;
  } else {
    console.log('Не угадал(((');
    continue;
  }
} 

