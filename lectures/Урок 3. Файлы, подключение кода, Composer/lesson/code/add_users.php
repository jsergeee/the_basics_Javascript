<?php
$adress = '/code/file.txt';

$name = readline('Введие имя: ');
$date = readline('Введите дату рождения в формате ДД-ММ-ГГГГ: ');

$date = $name . ", " . $date . "\r\n";

$fileHandler = fopen($adress, 'a');

if(fwrite($fileHandler, $date)) {
    echo "Запись $date добавлена в файл $adress";
}

else {
    echo "Произошла ошибка записи. Данные не сохранились";
}

fclose($fileHandler);
?>
