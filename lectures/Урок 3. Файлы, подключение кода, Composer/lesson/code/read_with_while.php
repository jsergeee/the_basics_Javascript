<?php


$file = fopen('/code/file.txt', 'rb'); //rd - r -read, b - binar(бинарный код)

if ($file === false) {
    echo ('Файл невозможно открыть или он не существует');
} else {
    $contents = '';
    while (!feof($file)) {
        $contents .= fread($file, 100);
    }
    fclose($file);
    echo $contents;
}

//==================
//Второй вариант

$adress = '/code/file.txt';

if (file_exists($adress) && is_readable($adress)) {
    $file = fopen('/code/file.txt', 'rb');
    $contents = '';
    while (!feof($file)) {
        $contents .= fread($file, 100);
    }
    fclose($file);
    echo $contents;
} else {
    echo ('Файл невозможно открыть или он не существует');
}
