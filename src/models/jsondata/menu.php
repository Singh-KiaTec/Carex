<?php

header("Access-Control-Allow-Origin: *"); 

$menu = "{
    \"menu\": {
        \"appName\": \"Tryg Sundhed\",
        \"mymenu\": \"Min menu\",
        \"myrelation\": \"Mine relationer\",
        \"profile\": \"Profil\",
        \"notification\" : \"Notifikationer\",
        \"termsandContion\":\"Betingelser\",
        \"otherrelation\": \"Andre Relationer\"
    }
}";
echo $menu;
?>