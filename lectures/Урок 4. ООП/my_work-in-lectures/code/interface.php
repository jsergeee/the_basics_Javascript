<?php 
interface AbleToKunch {
    public function goToLunch();
}

interface AccessibleToRoom {
    public function checkAccess();
}

class Student implements AbleToLunch {
    public function goToLunch() {
        
    }
    public function checkAccess(){
        
    }
}

?>