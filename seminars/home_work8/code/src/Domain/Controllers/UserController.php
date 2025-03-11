<?php

namespace Geekbrains\Application1\Domain\Controllers;

use Geekbrains\Application1\Application\Application;
use Geekbrains\Application1\Application\Render;
use Geekbrains\Application1\Application\Auth;
use Geekbrains\Application1\Domain\Models\User;

class UserController extends AbstractController
{

    protected array $actionsPermissions = [
        'actionHash' => ['admin', 'some'],
        'actionSave' => ['admin'],
        'actionAuth' => ['guest'], // Разрешение для неавторизованных пользователей
        'actionLogin' => ['guest'], // Разрешение для неавторизованных пользователей
    ];

    public function actionIndex(): string
    {
        $users = User::getAllUsersFromStorage();

        $render = new Render();

        if (!$users) {
            return $render->renderPage(
                'user-empty.tpl',
                [
                    'title' => 'Список пользователей в хранилище',
                    'message' => "Список пуст или не найден"
                ]
            );
        } else {
            return $render->renderPage(
                'user-index.tpl',
                [
                    'title' => 'Список пользователей в хранилище',
                    'users' => $users
                ]
            );
        }
    }

    public function actionSave(): string
    {
        if (User::validateRequestData()) {
            $user = new User();
            $user->setParamsFromRequestData();
            $user->saveToStorage();

            $render = new Render();

            return $render->renderPage(
                'user-created.tpl',
                [
                    'title' => 'Пользователь создан',
                    'message' => "Создан пользователь " . $user->getUserName() . " " . $user->getUserLastName()
                ]
            );
        } else {
            throw new \Exception("Переданные данные некорректны");
        }
    }

    public function actionEdit(): string
    {
        $render = new Render();

        return $render->renderPageWithForm(
            'user-form.tpl',
            [
                'title' => 'Форма создания пользователя'
            ]
        );
    }

    public function actionAuth(): string
    {
        $render = new Render();

        // Генерация CSRF токена
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

        return $render->renderPageWithForm(
            'user-auth.tpl',
            [
                'title' => 'Форма логина',
                'csrf_token' => $_SESSION['csrf_token'], // Передаем CSRF токен
                'auth-success' => true, // Установите по умолчанию, если нужно
                'auth-error' => '' // Ошибка по умолчанию
            ]
        );
    }

    public function actionHash(): string
    {
        return Auth::getPasswordHash($_GET['pass_string']);
    }

    public function actionLogin(): string
    {
        error_log("Attempting to log in..."); // Логирование попытки входа
        $result = false;

        if (isset($_POST['login']) && isset($_POST['password'])) {
            // Проверка CSRF токена
            if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
                return "Неверный CSRF токен"; // Обработка ошибки CSRF
            }

            $result = Application::$auth->proceedAuth($_POST['login'], $_POST['password']);
        }

        if (!$result) {
            $render = new Render();

            return $render->renderPageWithForm(
                'user-auth.tpl',
                [
                    'title' => 'Форма логина',
                    'auth-success' => false,
                    'auth-error' => 'Неверные логин или пароль'
                ]
            );
        } else {
            header('Location: /'); // Перенаправление после успешного входа
            exit; // Обязательно добавьте exit после header
        }
    }
}
