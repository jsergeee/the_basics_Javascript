<?php

require 'Book.php'; // Подключаем файл с абстрактным классом
require 'EBook.php';
require 'PrintedBook.php';

// Создание экземпляров книг
$ebook = new EBook("PHP для начинающих", "Иван Иванов", 2021, "https://example.com/download/php-beginners");
$printedBook = new PrintedBook("PHP для профессионалов", "Петр Петров", 2019, "ул. Ленина, 10, Библиотека №1");

// Получение доступа к книгам
echo $ebook->getAccess() . PHP_EOL; // Ссылка на скачивание: https://example.com/download/php-beginners
echo $printedBook->getAccess() . PHP_EOL; // Адрес библиотеки: ул. Ленина, 10, Библиотека №1

// Увеличение количества прочтений
$ebook->incrementReadCount();
$printedBook->incrementReadCount();
$printedBook->incrementReadCount(); // Увеличиваем для печатной книги дважды

// Получение статистики
echo "Количество прочтений электронной книги: " . $ebook->getReadCount() . PHP_EOL; // 1
echo "Количество прочтений печатной книги: " . $printedBook->getReadCount() . PHP_EOL; // 2
