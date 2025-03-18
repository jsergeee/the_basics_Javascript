<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//подключене файлов логики
require_once('/code/src/main.function.php');
require_once('/code/src/template.function.php');
require_once('/code/src/file.function.php');
//вызов корневой функции

// require_once('vendor\autoload.php');
$result = main('C:\Users\1\Обучение_в _GB\Basics_PHP\lectures\Урок 3. Файлы, подключение кода, Composer\lesson\code\conf.ini');

echo $result;

?>

