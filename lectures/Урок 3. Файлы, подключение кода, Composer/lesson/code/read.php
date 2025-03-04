<?php
// $content = file_get_contents('/code/file.txt');
// if ($content === false) {
//     echo "Не удалось прочитать файл.";
// } else {
//     echo $content;
// }
$fileContents = file_get_contents('/code/file.txt');
echo $fileContents;