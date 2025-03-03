<?php
function calculate($num1, $num2, $operation)
{
    switch ($operation) {
        case 'add':
            return $num1 + $num2; // Сложение
        case 'subtract':
            return $num1 - $num2; // Вычитание
        case 'multiply':
            return $num1 * $num2; // Умножение
        case 'divide':
            if ($num2 != 0) {
                return $num1 / $num2; // Деление
            } else {
                return 'Ошибка: Деление на ноль'; // Обработка деления на ноль
            }
        default:
            return 'Ошибка: Неверная операция'; // Обработка неверной операции
    }
}

// Примеры использования функции
echo calculate(10, 5, 'add') . "\n";        // 15
echo calculate(10, 5, 'subtract') . "\n";   // 5
echo calculate(10, 5, 'multiply') . "\n";   // 50
echo calculate(10, 5, 'divide') . "\n";     // 2
echo calculate(10, 0, 'divide') . "\n";     // Ошибка: Деление на ноль
echo calculate(10, 5, 'unknown') . "\n";    // Ошибка: Неверная операция
