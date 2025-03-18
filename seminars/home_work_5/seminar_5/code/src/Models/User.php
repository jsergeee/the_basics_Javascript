<?php

namespace Geekbrains\Application1\Models;

class User {

    private ?string $userName;
    private ?int $userBirthday;

    private static string $storageAddress = '/storage/birthdays.txt';

    public function __construct(string $name = null, int $birthday = null) {
        $this->userName = $name;
        $this->userBirthday = $birthday;
    }

    public function setName(string $userName): void {
        $this->userName = $userName;
    }

    public function getUserName(): string {
        return $this->userName;
    }

    public function getUserBirthday(): int {
        return $this->userBirthday ?? 0; // Возвращаем 0, если день рождения не установлен
    }

    public function setBirthdayFromString(string $birthdayString): void {
        // Преобразуем дату из формата 'дд-мм-гггг' в timestamp
        $this->userBirthday = strtotime($birthdayString);
    }

    public static function getAllUsersFromStorage(): array|false {
        $address = $_SERVER['DOCUMENT_ROOT'] . self::$storageAddress;

        if (file_exists($address) && is_readable($address)) {
            $file = fopen($address, "r");
            $users = [];

            while (!feof($file)) {
                $userString = fgets($file);
                if (empty(trim($userString))) continue; // Пропускаем пустые строки
                $userArray = explode(",", $userString);

                $user = new User(
                    trim($userArray[0]) // Убираем лишние пробелы
                );
                $user->setBirthdayFromString(trim($userArray[1])); // Убираем лишние пробелы

                $users[] = $user;
            }

            fclose($file);
            return $users;
        } else {
            return false;
        }
    }

    public function saveToStorage(): void {
        $address = $_SERVER['DOCUMENT_ROOT'] . self::$storageAddress;
        $data = $this->userName . "," . date('d-m-Y', $this->userBirthday) . PHP_EOL; // Форматирование даты
        file_put_contents($address, $data, FILE_APPEND);
    }

    
}

// Обработка GET-запроса
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['name']) && isset($_GET['birthday'])) {
        $name = $_GET['name'];
        $birthday = $_GET['birthday'];

        // Создаем нового пользователя
        $user = new User();
        $user->setName($name);
        $user->setBirthdayFromString($birthday);

        // Сохраняем пользователя в хранилище
        $user->saveToStorage();

        echo "Пользователь добавлен: " . htmlspecialchars($user->getUserName());
    } else {
        echo "Не указаны имя или день рождения.";
    }
}
