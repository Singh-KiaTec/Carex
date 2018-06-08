<?php

header("Access-Control-Allow-Origin: *"); 

$otherrelationer = "{
    \"otherrelationer\": {
        \"heading\": \"Andre Relationer\",
        \"paragraphs\": [
            \"Du befinder dig lige nu i Tryg Sundhed, som er bygget på CareX Connect platformen. Hvis du har flere relationer kan du få adgang til dem, ved at bruge den tværgående app: CareX Connect.\",
            \"CareX Connect samler app adgangen til alle dine relationer, og giver dig overblik over dine data, på tværs af de virksomheder og organisationer som du har en relation til, så du kan se alle relationer i den samme app.\",
            \"Får at få den tværgående adgang, skal du downloade og installere CareX Connect, som du finder på Appstore eller Google Play. Du kan fortsat benytte Tryg Sundhed, selvom du har installeret CareX Connect, og vil så kunne se services fra Tryg Sundhed i begge apps. Gennem CareX Connect bevarer du adgangen til dine nuværende services og tilbud, og får samtidig adgang til dine øvrige services, fra andre relationer som er tilsluttet til CareX platformen. \",
            \"Du logger ind på CareX Connect, med samme brugeroplysninger som du hidtil har brugt i din nuværende app.\",
            \"Hent CareX Connect på Appstore eller Google Play\"
        ]
    }
}";
echo $otherrelationer;
?>
