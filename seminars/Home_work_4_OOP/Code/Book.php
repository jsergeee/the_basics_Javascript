<?php

abstract class Book
{
    protected $title;
    protected $author;
    protected $publicationYear;
    protected $readCount;

    public function __construct($title, $author, $publicationYear)
    {
        $this->title = $title;
        $this->author = $author;
        $this->publicationYear = $publicationYear;
        $this->readCount = 0;
    }

    abstract public function getAccess();

    public function incrementReadCount()
    {
        $this->readCount++;
    }

    public function getReadCount()
    {
        return $this->readCount;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getAuthor()
    {
        return $this->author;
    }

    public function getPublicationYear()
    {
        return $this->publicationYear;
    }
}
