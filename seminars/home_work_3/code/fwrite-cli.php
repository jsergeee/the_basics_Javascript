<?php

$address = '/code/birthdays.txt';

// Ввод имени с проверкой
$name = readline("Введите имя: ");
if (!validateName($name)) {
    echo "Ошибка: имя должно содержать только буквы.\n";
    exit; // Завершаем выполнение скрипта при ошибке
}

// Ввод даты рождения
$date = readline("Введите дату рождения в формате ДД-ММ-ГГГГ: ");

if (validate($date)) {
    $data = $name . ", " . $date . "\r\n";
    $fileHandler = fopen($address, 'a');

    if (fwrite($fileHandler, $data)) {
        echo "Запись $data добавлена в файл $address\n";
    } else {
        echo "Произошла ошибка записи. Данные не сохранены\n";
    }

    fclose($fileHandler);
} else {
    echo "Введена некорректная информация\n";
}

// Функция для проверки имени
function validateName(string $name): bool
{
    return preg_match("/^[a-zA-Zа-яА-ЯёЁ\s]+$/u", $name); // Проверка, что имя состоит только из букв и пробелов
}

// Функция для валидации даты
function validate(string $date): bool
{
    $dateBlocks = explode("-", $date);
    if (count($dateBlocks) !== 3) {
        return false;
    }

    list($day, $month, $year) = $dateBlocks;

    if (!is_numeric($day) || !is_numeric($month) || !is_numeric($year)) {
        return false;
    }

    $day = (int)$day;
    $month = (int)$month;
    $year = (int)$year;

    if ($day < 1 || $day > 31 || $month < 1 || $month > 12 || $year < 1900 || $year > date('Y')) {
        return false;
    }

    if (!checkdate($month, $day, $year)) {
        return false;
    }

    return true;
}


// Функция для поиска именинников
function findBirthday($address)
{
    $today = date('d-m'); // Получаем текущую дату в формате ДД-ММ
    $file = fopen($address, 'r');
    if (!$file) {
        echo "Ошибка при открытии файла.\n";
        return;
    }

    echo "Сегодняшние именинники:\n";
    while (($line = fgets($file)) !== false) {
        $line = trim($line); // Удаляем лишние пробелы
        list($name, $birthDate) = explode(", ", $line);

        // Проверяем дату рождения
        if (isset($birthDate) && substr($birthDate, 0, 5) === $today) {
            echo $name . "\n"; // Выводим имя
        }
    }

    fclose($file);
}

// Функция для удаления записи
function deleteEntry($address)
{
    $searchValue = readline("Введите имя или дату для удаления строки: ");
    $lines = file($address, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $found = false;

    foreach ($lines as $key => $line) {
        if (strpos($line, $searchValue) !== false) {
            unset($lines[$key]);
            $found = true;
            echo "Строка '$line' была удалена.\n";
        }
    }

    if (!$found) {
        echo "Строка не найдена.\n";
    } else {
        // Записываем обновлённые данные обратно в файл
        file_put_contents($address, implode(PHP_EOL, $lines) . PHP_EOL);
    }
}

// Поиск именинников
findBirthday($address);

// Удаление записи
deleteEntry($address);
