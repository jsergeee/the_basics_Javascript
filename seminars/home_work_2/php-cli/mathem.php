<?php
// Функция для выполнения арифметических операций
function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation) {
        case 'add':
            return add($arg1, $arg2); // Сложение
        case 'subtract':
            return subtract($arg1, $arg2); // Вычитание
        case 'multiply':
            return multiply($arg1, $arg2); // Умножение
        case 'divide':
            return divide($arg1, $arg2); // Деление
        default:
            return 'Ошибка: Неверная операция'; // Обработка неверной операции
    }
}

// Функции для каждой арифметической операции
function add($a, $b)
{
    return $a + $b;
}

function subtract($a, $b)
{
    return $a - $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function divide($a, $b)
{
    if ($b != 0) {
        return $a / $b;
    } else {
        return 'Ошибка: Деление на ноль'; // Обработка деления на ноль
    }
}

// Примеры использования функции
echo mathOperation(10, 5, 'add') . "\n";        // 15
echo mathOperation(10, 5, 'subtract') . "\n";   // 5
echo mathOperation(10, 5, 'multiply') . "\n";   // 50
echo mathOperation(10, 5, 'divide') . "\n";     // 2
echo mathOperation(10, 0, 'divide') . "\n";     // Ошибка: Деление на ноль
echo mathOperation(10, 5, 'unknown') . "\n";    // Ошибка: Неверная операция
