<?php

class EBook extends Book {
private $downloadLink;

public function __construct($title, $author, $publicationYear, $downloadLink) {
parent::__construct($title, $author, $publicationYear);
$this->downloadLink = $downloadLink;
}

public function getAccess() {
return "Ссылка на скачивание: " . $this->downloadLink;
}
} 

?>