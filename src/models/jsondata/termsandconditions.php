<?php

header("Access-Control-Allow-Origin: *"); 

$terms = "{
    \"terms\": {
        \"heading\": \"Generelle betingelser\",
        \"paragraphs\": [
            \"Når du bruger TRYG Sundhed, og de ydelser der kan tilgås gennem TRYG Sundhed, kan udbyderen bede om at få overført dine personlige oplysninger, for at udbyderen kan vise dig de ydelser som du har ret til.\",
            \"Du vil blive spurgt i hvert enkelt tilfælde, inden dine oplysninger videregives.\",
            \"Du kan se hvilke oplysninger TRYG Sundhed, har gemt om dig, via genvejene i menuen.\",
            \"Hvis du er blevet viderestillet til en service udenfor TRYG Sundhed, og har registreret data der, skal du henvende dig til udbyderen af servicen, hvis du får brug for at vide hvilke oplysninger udbyderen har registeret om dig.\"
        ],
        \"conditions\": [
        ],
        \"checkboxes\":[
             \"Vis ikke denne meddelelse igen.(Du kan altid finde denne under ”Betingelser” i menuen).\" 
        ]

    }
}";

echo $terms;
?>
