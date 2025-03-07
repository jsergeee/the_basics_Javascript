<?php
class PrintedBook extends Book
{
    private $libraryAddress;

    public function __construct($title, $author, $publicationYear, $libraryAddress)
    {
        parent::__construct($title, $author, $publicationYear);
        $this->libraryAddress = $libraryAddress;
    }

    public function getAccess()
    {
        return "Адрес библиотеки: " . $this->libraryAddress;
    }
}

?>