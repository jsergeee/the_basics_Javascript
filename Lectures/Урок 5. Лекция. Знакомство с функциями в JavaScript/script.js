// alert('Привет, JavaScript!!!')
// function helloName(name) {
//     console.log(name);
// }

// helloName('Alex');

// let count = 5;

// function counter () {

//     return count ++;
// }

// counter();
// counter();
// console.log(count);

// let age = Number(prompt("Сколько Вам лет"));

// // function upAge() {
// //     return age + 5;
// // } ///попробовали не подходит

// const lvlUpAge = () => {
//   return age + 5;
// }


// console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);


// function hello(){
//     console.log('Hello');
// }

// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// // const result = sum(2, 5); //Можно упростить 
// console.log(sum(5, 5));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const salary = (money) => {
//     money = money * 0.87; /// money - money * 0.13
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Введите размер ЗП'));
// // console.log(salary(userMoney));
// let moneyMonth = salary(userMoney);

// console.log(`для расходов можно использовать ${salary(userMoney)}`);
// console.log(`На еду желательно потратить не более чем ${moneyMonth * 0.3}`);
//++++++++++++++++++++++++++++++++++++++++++++
function sayHello() {
    alert ('Привет');
    alert ('Нажали на кнопку');
}
//++++++++++++++++++++++++++++

// const userAnswer = prompt('Зимой и летом дним цветом');

// if (userAnswer === 'Ёлка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }

// const userAnswer2 = prompt("Сидит дед, во сто шуб одет, кто его раздевает, слезы проливает");

// if (userAnswer === "Лук") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }
//++++++++++++++++++++++++++++++

function askQuestion(answer, question) {
  const userAnswer = prompt(question);
  if (userAnswer.toLocaleLowerCase() === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}

// askQuestion("лук", "Сидит дед, во сто шуб одет, кто его раздевает, слезы проливает");
// askQuestion("елка", "Зимой и летом дним цветом");

function puzzle(){
  askQuestion("лук", "Сидит дед, во сто шуб одет, кто его раздевает, слезы проливает");
  askQuestion("елка", "Зимой и летом дним цветом");
}