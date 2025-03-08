<?php

namespace Geekbrains\Application1;

class Application
{

    private const APP_NAMESPACE = 'Geekbrains\Application1\Controllers\\';

    private string $controllerName;
    private string $methodName;

    public function run(): string
    {
        $routeArray = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

        // Определяем имя контроллера
        if (isset($routeArray[0]) && $routeArray[0] != '') {
            $controllerName = $routeArray[0];
        } else {
            $controllerName = "page";
        }

        $this->controllerName = Application::APP_NAMESPACE . ucfirst($controllerName) . "Controller";

        // Проверяем, существует ли класс контроллера
        if (class_exists($this->controllerName)) {
            // Определяем имя метода
            if (isset($routeArray[1]) && $routeArray[1] != '') {
                $methodName = $routeArray[1];
            } else {
                $methodName = "index";
            }

            $this->methodName = "action" . ucfirst($methodName);

            // Проверяем, существует ли метод
            if (method_exists($this->controllerName, $this->methodName)) {
                $controllerInstance = new $this->controllerName();
                return call_user_func_array(
                    [$controllerInstance, $this->methodName],
                    []
                );
            } else {
                return $this->renderErrorPage(404, "Метод $this->methodName не существует");
            }
        } else {
            return $this->renderErrorPage(404, "Класс $this->controllerName не существует");
        }
    }

    private function renderErrorPage(int $errorCode, string $message): string
    {
        http_response_code($errorCode);
        $render = new Render();
        return $render->renderPage('error.twig', [
            'title' => "Ошибка $errorCode",
            'message' => $message
        ]);
    }

    // css
    public function actionIndex()
    {
        $render = new Render();
        $cssPath = 'C:\Users\1\Обучение_в _GB\Basics_PHP\seminars\home_work_5\seminar_5\code\src\style\style.css';

        return $render->renderPage(
            'user-index.twig',
            [
                'title' => 'Список пользователей',
                'cssPath' => $cssPath,
                'current_time' => date('H:i:s')
            ]
        );
    }
}
