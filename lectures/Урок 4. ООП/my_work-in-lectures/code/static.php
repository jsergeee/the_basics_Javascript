<?php

use StorageProviders\Csv\Storage;

class Student
{
    public string $name;
    public int $age;
    public static float $discount = 0.5;

    function __construct(string $name, int $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    function sayHallo(): string
    {
        return "Привет! Меня зовут {$this->name} и мне {$this->age} лет. \r\n";
    }

    public static function getDiscount(float $mealPrise): float
    {
        return $mealPrise * Student::$discount;
    }
}
$students = [
    new Student("Ольга", 20),
    new Student("Иван", 18),
    new Student("Сергей", 48),
    new Student("Феоктист", 108)
];

foreach ($students as $student) {
    echo $student->sayHallo();
}

echo Student::getDiscount(50);

// echo "array_walk \r\n";
// array_walk($students, function ($student) {
//     echo $student->sayHallo();
// });

// echo "for \r\n";
// for ($i = 0; $i < count($students); $i++) {
//     echo $students[$i]->sayHallo();
// }
