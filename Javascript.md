# Урок 1. Лекция. Знакомство с JavaScript



__JavaScript__ – язык программирования. С помощью которого мы можем добавить любой интерактив на страницу, любое взаимодействие с пользователем. Простыми словами это язык программирования который может реализовать любой функционал на вашем сайте в зависимости от того, что за действие вы выполняете на сайте, это может быть ввод значений в поле ввода и нажатие на элемент левой клавишей мыши.

###  Переменные

__let__

__const__

__var__ - устаревшая, не используем.

Отличаются видимостью - __var__ видит везде.

## Типы данных 

В JS выделяют 8 типов данных: 

- строка (string); 

- число (number); 

- булево значение (boolean); 

- undefined; 

- объект (object); 

- null; 

- symbol; 

- большое число (BigInt). 

  Чтобы определить, к какому типу данных относится значение, мы можем применить оператор __typeof__

# Урок 2. Семинар. Знакомство с JavaScript

Подключение файла со скриптами:

```
<script src="/script/script.js"></script>
```



# Урок 3. Лекция. Основы JavaScript

План урока:
\- Работа с операторами
\- Операторы сравнения
\- Преобразования типов данных
\- Приведение типов
\- Встроенные функции alert, prompt, confirm
\- Работа с отладчиком браузера
\- Логические и арифметические операторы

---

__!__ - значение отрицания - не (равно).

![image-20250302204947015](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20250302204947015.png)



Тернарные операторы:

 if (userAnswer === "Ёлка") {

 alert('Молодец!!');

 } else {

 alert('Не угадал!')

 }



Аналог этой конструкции:

схема:  (условие) ? ДА : НЕТ

```
(userAnswer === "Ёлка") ? alert("Молодец!!") : alert("Не угадал!");
```

### Урок 4. Семинар. Основы JavaScript

Задание 1 (тайминг 15 минут) 

екст задания 1. Создать новый файл lesson2.html 2. Создать переменную и спросить у пользователя “Ваш возраст” 3. Вывести на экран текст. Вам “возраст пользователя” лет 4. Спросить у пользователя его имя 5. Вывести на экран, Добро пожаловать на сайт “Имя пользователя” 

Задание 2 (тайминг 15 минут) 

екст задания 1. Найти остаток от деления двух переменных a. let a = 13; b. let b = 5; 2. Что выведет на экран (Сначала проговорите, потом проверьте) a. let a; b. alert(a); 3. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('abc' * 3); 4. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert( 1 / 0); b. alert(-1 / 0); 5. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('2' * '3'); 

Задание 3 (тайминг 15 минут).

Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка. 2. Необходимо вывести в консоль результат суммы данных переменных a. let a = '2'; b. let b = '3'; 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст a. Сумма чисел равна “результат” b. Разность чисел равна “результат” c. Произведение чисел равно “результат” d. Частное чисел равно “результат” e. Остаток от деления чисел равен “результат” 

Задание 4 (тайминг 15 минут) 

1. Не запуская код, определите, что выведется в консоль: a. console.log(String(true)); 2. Не запуская код, определите, что выведется в консоль: a. console.log('a' + true); 3. Не запуская код, определите, что выведется в консоль: a. console.log(Number(true)); 4. Не запуская код, определите, что выведется в консоль: a. console.log(true + 1); 5. Не запуская код, определите, что выведется в консоль: a. console.log(true + true) 6. Не запуская код, определите, что выведется в консоль: a. console.log(true - true) 7. Не запуская код, определите, что выведется в консоль: a. console.log( String(true) + Number(true) ) Задание 5 (тайминг 25 минут) 

Задание 5 (тайминг 25 минут)

1. Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который a. Выводит в консоль “Число больше 5” b. Выводит в консоль “Число меньше 5” c. Выводит в консоль “Число равно 5” 

2. Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение. 

3. Пользовать с клавиатуры вводит 2 числа a. Необходимо найти какое из двух чисел минимальное 

4. Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

```
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

```



### Урок 5. Лекция. Знакомство с функциями в JavaScript

Описание

План урока:
\- Рассмотрим, что такое функции и для чего они используются
\- Виды функций
\- Область видимости функций
\- Имена функций
\- Браузерные события
\- Реализация игры в загадки

_______________

Декларативный подход - прописывается "function"

Функции:

● именованные; 

● анонимные().

Снипет вывод стрелочной функции "nfn".







### Урок 7. Лекция. Циклы и массивы



План урока:
\- Что такое циклы
\- Виды циклов
\- Что такое массивы
\- Методы работы с массивами
\- Комбинирование циклов и массивов





























