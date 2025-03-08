<?php

namespace Geekbrains\Application1\Controllers;

use Geekbrains\Application1\Render;
use Geekbrains\Application1\Models\User;

class UserController {

    public function actionAddUser () {
        // Проверяем наличие параметров name и birthday в GET-запросе
        if (isset($_GET['name']) && isset($_GET['birthday'])) {
            $user = new User();
            $user->setName($_GET['name']);
            $user->setBirthdayFromString($_GET['birthday']);

            // Сохраняем пользователя в хранилище
            $this->saveUserToStorage($user); // Исправлено название метода

            return "Пользователь добавлен: " . htmlspecialchars($user->getUserName());
        }
        return "Не указаны имя или день рождения.";
    }

    public function actionIndex() {
        $users = User::getAllUsersFromStorage();

        $render = new Render();

        if (!$users) {
            return $render->renderPage(
                'user-empty.twig',
                [
                    'title' => 'Список пользователей в хранилище',
                    'message' => "Список пуст или не найден"
                ]
            );
        } else {
            return $render->renderPage(
                'user-index.twig',
                [
                    'title' => 'Список пользователей в хранилище',
                    'users' => $users
                ]
            );
        }
    }

    private function saveUserToStorage(User $user) { // Исправлено название метода
        $address = $_SERVER['DOCUMENT_ROOT'] . User::$storageAddress; // Используем статическое свойство
        $data = $user->getUserName() . "," . date('Y-m-d', $user->getUserBirthday()) . PHP_EOL;
        file_put_contents($address, $data, FILE_APPEND);
    }
}
