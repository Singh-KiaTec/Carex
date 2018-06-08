
<?php

header("Access-Control-Allow-Origin: *"); 

$profile = "{
    \"profile\": {
        \"heading\": \"Profil\",
        \"name\": \"Navn\",
        \"address\": \"Adresse\",
        \"dateofbirth\": \"Fødselsdato\",
        \"email\":\"E-mail\",
        \"mobile\":\"Mobil\",
        \"logout\":\"LOG UD\",
        \"notavailable\":\"ikke tilgængelig\"
    }
}";

echo $profile;
?>
