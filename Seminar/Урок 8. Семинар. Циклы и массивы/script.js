//1. Создайте массив с элементами 1, 2, 3. Выведите на экран
//каждый из этих элементов.

//Создайте массив с произвольными элементами.
//Выведите на экран количество элементов в этом массиве.

// const array =
//   "Loremipsumdolorsitametconsecteturadipisicingelit.Temporibus,voluptatesomnisnamdistinctioadipisciquoautemullamtemporeinbeataerecusandaearchitectopariaturvoluptas,oditrepellatnihilmodilaborum?";
// const arr = array.split("");
// const arrLength = arr.length;
// const arrLenghtArray = String(arrLength).split("");
// const arrLenghtArrayEnding = Number(arrLenghtArray.pop());

// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);

// // }

// const a = "элемент";
// const b = "элемента";
// const c = "элементов";

// if (arrLenghtArrayEnding === 1) {
//   ending = a;
// } else if (arrLenghtArrayEnding >= 2 && arrLenghtArrayEnding <= 4) {
//   ending = b;
// } else {
//   ending = c;
// }

// console.log(arr.join(", "));
// console.log(`Длинна массива arr ${arr.length} ${ending}`);

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо
//третьего - 3.

// const arr = ['a, b, c'];

// console.log(arr);

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// console.log(arr);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.

// const arr = [1, 2, 3];
// arr[0] ++;
// arr[1] ++;
// arr[2] ++;

// console.log(arr);

// 2. Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// 2. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// arr.push(4)
// arr.push(5);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// 4. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после
// этого.

// const num = '12345';
// const arr = num.split('');
// console.log(`Длинна массива ${arr.length}`);
// console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);

// // }

// arr.splice(1,1);
// console.log(`Длинна массива ${arr.length}`);
// console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.splice(0,3);
// console.log(`Длинна массива ${arr.length}`);
// console.log(arr);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// const array = new Array(100);
// for (let i = 0; i < array.length; i++) {
//     array[i] = i;
//     if (i >= 11 && i <=33) {
//         // console.log(array[i]++);
//     }
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.

// for (let i = 0; i < array.length; i++) {
//     array[i] = i;
//     if (array[i] % 2 !==0) {
//        console.log(array[i]);
//     }

// }

//-----------------------------------------------------------------------

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i >= 0; i--) {
//     console.log(i);

// }

// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.

// let num = Number(3);
// let iterations = 0;

// while (num <= 1000) {
//     num *= 3;
//     console.log(num);
//     iterations ++;

// }

// console.log("Конечное число " + num);
// console.log("Число итераций " + iterations);

//-------------------------------------------------------------------------

// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }

// }

// 1. Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// let iterations = 0;

// for (let i = 2; i < 100; i+=2) {
//     sum += i;
//     iterations++;

// }
// console.log("суммf четных чисел от 2 до 100 равна " + sum + " Кол-во итераций " + iterations);

// 2. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

// const arr = [2, 5, 9, 0, 3, 1, 4];
// sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }
// console.log(sum);

// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = new Array(10);
// result = '';
// for (let i = 1; i < arr.length; i++) {
//     result += "-" + i;

// }
// result += "-";
// console.log(result);

// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

// const arr = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     } else {
//         break;
//     }

// }

// 1. Пусть у нас дан массив состоящий из 10 элементов с
// произвольными числами. Давайте переберем его циклом и числа,
// которые делятся на 2, возведем в квадрат и выведем в консоль, а
// числа, которые делятся на 3, возведем в куб и выведем в консоль.

// const arr = new Array(10);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 10) + 1);
//   // console.log(arr[i]);


// }
// for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         console.log(
//           "Число массива делящееся на 2 " +
//             arr[i] +
//             " Возведенное в степень 2 равно " +
//             Math.pow(arr[i], 2)
//         );
//       }
//       if (arr[i] % 3 === 0) {
//         console.log(
//           "Число массива делящееся на 3 " +
//             arr[i] +
//             " Возведенное в степень 3 равно " +
//             Math.pow(arr[i], 3)
//         );
//       }
    
// }



// 2. С помощью двух вложенных циклов выведите на экран следующую
// строку:
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let quantity_three = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         quantity_three++;
//     }
    
// }
// console.log(quantity_three);

// 1. Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); 
