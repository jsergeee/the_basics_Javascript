// Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
// которые больше или равны 3.


const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

for (let key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}

// Задание 2
// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.
const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
// использованием метода forEach.


// const products = [
// {
// id: 3,
// price: 200,
// },
// {
// id: 4,
// price: 900,
// },
// {
// id: 1,
// price: 1000,
// },
// ];


products.forEach(products => {
    products.price *= 0.58;
    console.log(products);
});

// Задание 4
// Описание задачи:
// 1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
// фотография, используя метод filter.
// 2. Отсортируйте массив products по цене в порядке возрастания и выведите
// отсортированный массив в консоль.


const products = [
{
id: 3,
price: 127,
photos: ["1.jpg", "2.jpg"],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: ["3.jpg"],
},
{
id: 8,
price: 78,
},
];


// // 1. Фильтруем продукты с фотографиями
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log("Продукты с фотографиями:", productsWithPhotos);

// // 2. Сортируем массив по цене в порядке возрастания
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log("Отсортированные продукты по цене:", sortedProducts);


// Задание 5 
// Описание задачи: Есть два массива en и ru. Объедините их в объект, где значения из
// первого массива будут ключами, а значения из второго массива — значениями.


const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const days = {}; // Создаем пустой объект

for (let i = 0; i < en.length; i++) {
    days[en[i]] = ru[i]; // Используем элементы из en как ключи и из ru как значения
}

console.log(days); // Выводим полученный объект


