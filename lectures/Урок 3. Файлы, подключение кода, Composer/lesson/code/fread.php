<?php
$file = fopen('/code/file.txt', 'rb');
$data = fread($file, 100);
fclose($file);
echo $data;


