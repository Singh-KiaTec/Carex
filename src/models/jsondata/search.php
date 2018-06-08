<?php

header("Access-Control-Allow-Origin: *"); 
$searchpage = "{
    \"searchpage\": {
        \"view\": \"Vis\",
        \"search\" : \"Søg\"
    }
}";
echo $searchpage;
?>