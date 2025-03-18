<?php
function getCurrentTimeWithDeclension()
{
    // Получаем текущее время
    $hours = date('G');  // Часы в 24-часовом формате (0-23)
    $minutes = date('i'); // Минуты (00-59)

    // Определяем склонение для часов
    $hourDeclension = getHourDeclension($hours);
    // Определяем склонение для минут
    $minuteDeclension = getMinuteDeclension($minutes);

    // Формируем строку с текущим временем
    return "$hours $hourDeclension $minutes $minuteDeclension";
}

function getHourDeclension($hours)
{
    // Определяем склонение для часов
    if ($hours % 10 == 1 && $hours % 100 != 11) {
        return 'час';
    } elseif ($hours % 10 >= 2 && $hours % 10 <= 4 && ($hours % 100 < 10 || $hours % 100 >= 20)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

function getMinuteDeclension($minutes)
{
    // Определяем склонение для минут
    if ($minutes % 10 == 1 && $minutes % 100 != 11) {
        return 'минута';
    } elseif ($minutes % 10 >= 2 && $minutes % 10 <= 4 && ($minutes % 100 < 10 || $minutes % 100 >= 20)) {
        return 'минуты';
    } else {
        return 'минут';
    }
}

// Пример использования функции
echo getCurrentTimeWithDeclension();
