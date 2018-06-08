<?php
 
 
header("Access-Control-Allow-Origin: *");


$smartsearch = "{
    \"view\": \"Vis\",
    \"search\": \"Søg\",
    \"reset\": \"Reset\",
    \"dropdowns\": [
        {
            \"label\": \"Helbredskategorier\",
            \"dropdownlist\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ]
        },
        {
            \"label\": \"Emner\",
            \"dropdownlist\": [
                \"Alkohol\",
                \"Arbejdsforhold\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Kost\",
                \"Mental sundhed\",
                \"Motion\",
                \"Osteporose\",
                \"Rygning\",
                \"Smerter og bevægeapparat\",
                \"Sygdom\",
                \"Søvn\",
                \"Trivsel\"
            ]
        }
    ],
    \"text\": [
        {
            \"label\": \"Vælg ud fra fritekst søgeord (eks. stress, lænderyg, osv.) :\"
        }
    ],
    \"searchlist\": [
        {
            \"id\": \"Y0001\",
            \"heading\": \"Fysioterapi\",
            \"teaser\": \"Din sundhedsforsikring kan dække behandling hos en fysioterapeut.\",
            \"details\": [
                \"Hvis du har smerter eller gener i kroppen, kan du få behandling hos en fysioterapeut. For at få fysioterapi  skal du have en lægehenvisning fra din egen læge. Du kan kontakte vores sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a> og starte din behandling.\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"test.pdf\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\",
                \"Osteoporose\",
                \"Trivsel\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"fysioterapi\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\"
            ]
        },
        {
            \"id\": \"Y0002\",
            \"heading\": \"Kiropraktik\",
            \"teaser\": \"Din sundhedsforsikring kan dække behandling hos en kiropraktor.\",
            \"details\": [
                \"Hvis du har smerter eller gener i kroppen, kan du få behandling hos en kiropraktor.  Du kan kontakte vores sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a> og starte din behandling.\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\",
                \"Osteoporose\"
            ],
            \"tags\": [
                \"smerter\",
                \"kiropraktor\",
                \"kiropraktik\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"hofte\",
                \"arme\",
                \"ben\"
            ]
        },
        {
            \"id\": \"Y0003\",
            \"heading\": \"Osteopati\",
            \"teaser\": \"Din sundhedsforsikring kan dække behandling hos en osteopat.\",
            \"details\": [
                \"Hvis du har smerter eller gener i kroppen, kan du få behandling hos en osteopat. For at få behandling, skal du have en lægehenvisning til fysioterapi fra din egen læge.Du kan kontakte vores sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>  og starte din behandling.\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\",
                \"Osteoporose\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"osteopati\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\"
            ]
        },
        {
            \"id\": \"Y0004\",
            \"heading\": \"Sundhedsportal / Psykisk sundhed\",
            \"teaser\": \"Online webportal med gode råd og vejledning om psykisk sundhed\",
            \"details\": [
                \"Portalen indeholder råd og vejledning til psykisk krisehjælp, stress, angst og depression. Du kan også finde mindfulness-øvelser, der kan hjælpe med at få ro på sindet. <br><br><a href='https://www.falckhealthcare.dk/tryg/sundhedsportal/psykisk-sundhed/'>Klik her</a>\"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Trivsel\",
                \"Søvn\"
            ],
            \"tags\": [
                \"stress\",
                \"trivsel\",
                \"krisehjælp\",
                \"angst\",
                \"mindfulness\",
                \"psykolog\",
                \"depression\",
                \"psykisk førstehjælp\",
                \"mental sundhed\"
            ]
        },
        {
            \"id\": \"Y0005\",
            \"heading\": \"Sundhedsportal / Fysisk Sundhed \",
            \"teaser\": \"Online webportal med gode råd og vejledning om fysisk sundhed\",
            \"details\": [
                \"Portalen indeholder råd og vejledning til fysisk sundhed, afspænding, smertehåndtering og akutte skader. Du kan også finde øvelser til udstrækning af både nakke, lænd og skuldre.<br><br><a ='https://www.falckhealthcare.dk/tryg/sundhedsportal/fysisk-sundhed/'>Klik her</a>\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Kost\",
                \"Motion\",
                \"Smerter og bevægeapparat\",
                \"Arbejdsforhold\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\"
            ]
        },
        {
            \"id\": \"Y0006\",
            \"heading\": \"Sundhedsportal / Træning\",
            \"teaser\": \"Online webportal med gode råd og vejledning om træning\",
            \"details\": [
                \"Portalen indeholder træningsprogrammer som du kan bruge til at starte en aktiv livsstil, eller udfordre dig selv på en ny motionsform. Der er også en online bog om sportsskade, både hvordan du forebygger og hvordan du selv behandler dem. <br><br><a href='https://www.falckhealthcare.dk/tryg/sundhedsportal/traning/'>Klik her</a>\"
            ],
            \"image\": \"24275.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Motion\",
                \"Trivsel \",
                \"Smerter og bevægeapparat\",
                \"Hjerte-karsygdomme\",
                \"Diabetes \",
                \"Osteoporose\",
                \"Kost\"
            ],
            \"tags\": [
                \"xxx\",
                \"xxx\",
                \"xxx\"
            ]
        },
        {
            \"id\": \"Y0007\",
            \"heading\": \"Sundhedsportal / KRAMS\",
            \"teaser\": \"Online webportal med gode råd og vejledning om KRAMS-faktorer\",
            \"details\": [
                \"Portalen indeholder råd og vejledning om KRAMS-faktorer, herunder kost, rygning, alkohol, motion og søvn. \",
                \"Du kan få relevant information både om hvordan du ændrer vaner, og hvordan du forebygger livsstilssygdomme.<br><br><a ='https://www.falckhealthcare.dk/tryg/sundhedsportal/'>Klik her</a>\"
            ],
            \"image\": \"24275.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Andet helbredsproblem\",
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Kost\",
                \"Motion\",
                \"Alkohol\",
                \"Søvn\",
                \"Rygning\"
            ],
            \"tags\": [
                \"kost\",
                \"rygning\",
                \"alkohol\",
                \"motion\",
                \"stress\",
                \"søvn\",
                \"velvære\",
                \"trivsel\",
                \"mental sundhed\"
            ]
        },
        {
            \"id\": \"Y0008\",
            \"heading\": \"StressStop-linjen\",
            \"teaser\": \"Anonym telefonisk rådgivning om stress\",
            \"details\": [
                \"Har du brug for råd og vejledning til at håndtere stress hos dig eller andre, kan du ringe anonymt til os på <a href='tel:+4570252643'>70 25 26 43</a> .\",
                \"Du bliver mødt af sundhedsfagligt personale, der kan hjælpe dig med din udfordring.  \"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Trivsel \",
                \"Søvn\"
            ],
            \"tags\": [
                \"stress\",
                \"trivsel\",
                \"krisehjælp\",
                \"angst\",
                \"mindfulness\",
                \"psykolog\",
                \"depression\",
                \"psykisk førstehjælp\",
                \"mental sundhed\"
            ]
        },
        {
            \"id\": \"Y0009\",
            \"heading\": \"Tryg Vejviser\",
            \"teaser\": \"Rådgivning til dig som patient i sundhedsvæsenet\",
            \"details\": [
                \"Har du brug for råd og vejledning, fx om dine rettigheder, eller hjælp under et patientforløb, kan du ringe til Tryg Vejviser på <a href='tel:+4570259449'>70 25 94 49</a> og få hjælp af sundhedsfagligt personale.\"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Alkohol\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Mental sundhed\",
                \"Smerter og bevægeapparat\",
                \"Sygdom\",
                \"Trivsel\"
            ],
            \"tags\": [
                \"Patient\",
                \"Patientforløb\",
                \"sygehus\",
                \"sygehusvæsen\",
                \"patientklage\",
                \"patientklagenævnet\",
                \"offentlig sundhedsvæsen\",
                \"journal\",
                \"lægejournal\"
            ]
        },
        {
            \"id\": \"Y0010\",
            \"heading\": \"Videokonsultation - Læge\",
            \"teaser\": \"Få kontakt med en almen praktiserende læge uden for egen læges åbningstid\",
            \"details\": [
                \"Få lægen direkte hjem til dig via video. Med Tryg Lægehotline ”besøger” du lægen på din mobil, tablet eller computer, når din egen læge har lukket.Pris pr. konsultation er 249 kr. Du kan betale med Mobilepay og betalingskort.\" ],
            \"image\": \"9968.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Alkohol\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Osteoporose\",
                \"Smerter og bevægeapparat\",
                \"Sygdom\"
            ],
            \"tags\": [
                \"lægekonsultation\",
                \"egen læge\",
                \"vagtlæge\",
                \"recepter\",
                \"recept\",
                \"videolæge\",
                \"videodoktor\",
                \"doktor\",
                \"konsultation\",
                \"undersøgelse\",
                \"online\",
                \"behandling\"
            ]
        },
        {
            \"id\": \"Y0011\",
            \"heading\": \"Undersøgelse hos speciallæge\",
            \"teaser\": \"Mulighed for at blive undersøgt af speciallæge\",
            \"details\": [
                \"Hvis du har brug for at få foretaget undersøgelse af symptomer eller gener, kan du få en konsultation hos en speciallæge i vores kvalitetssikret netværk. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Osteoporose\",
                \"Smerter og bevægeapparat\",
                \"Sygdom\"
            ],
            \"tags\": [
                \"undersøgelse\",
                \"forundersøgelse\",
                \"diagnose\",
                \"diagnosticering\",
                \"læge\",
                \"speciallæge\",
                \"røntgen\",
                \"scanning\",
                \"klinik\",
                \"privatklinik\",
                \"hospital\",
                \"privathospital\",
                \"blodprøver\",
                \"prøver\"
            ]
        },
        {
            \"id\": \"Y0012\",
            \"heading\": \"Diætist\",
            \"teaser\": \"Mulighed for at få hjælp af en diætist\",
            \"details\": [
                \"Hvis en speciallæge har anbefalet et diætistforløb i forbindelse med behandling eller operation, kan du kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"23850.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Kost\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\"
            ],
            \"tags\": [
                \"kost\",
                \"sund kost\",
                \"maveproblemer\",
                \"tarmproblemer\",
                \"vægttab\",
                \"fedme\",
                \"tabe vægt\",
                \"overvægt\",
                \"IBS\",
                \"kronisk irriteret tyktarm\",
                \"irriteret tarm\"
            ]
        },
        {
            \"id\": \"Y0013\",
            \"heading\": \"Misbrugsrådgivning\",
            \"teaser\": \"Mulighed for at få behandling af misbrug\",
            \"details\": [
                \"Du kan få behandling af et misbrugsproblem, fx alkohol eller receptpligtig medicin på din sundhedsforsikring. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"22001.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\",
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Alkohol\",
                \"Trivsel \"
            ],
            \"tags\": [
                \"misbrug\",
                \"alkohol\",
                \"narko\",
                \"stoffer\",
                \"narkotika\",
                \"ludomani\",
                \"spil\",
                \"medicin\",
                \"receptpligtig medicin\",
                \"afvænning\",
                \"antabus\"
            ]
        },
        {
            \"id\": \"Y0014\",
            \"heading\": \"Sundhedsforsikring\",
            \"teaser\": \"Hjælp til forskellige helbredsudfordringer\",
            \"details\": [
                \"For at gøre brug af din Sundhedsforsikring, skal du ringe til vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Alkohol\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Osteoporose\",
                \"Smerter og bevægeapparat\",
                \"Sygdom\"
            ],
            \"tags\": [
                \"undersøgelse\",
                \"forundersøgelse\",
                \"diagnose\",
                \"diagnosticering\",
                \"læge\",
                \"speciallæge\",
                \"røntgen\",
                \"scanning\",
                \"klinik\",
                \"privatklinik\",
                \"hospital\",
                \"privathospital\",
                \"blodprøver\",
                \"prøver\",
                \"syg\",
                \"sygdom\",
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\",
                \"behandling\",
                \"osteopati\",
                \"psykolog\",
                \"kiropraktor\",
                \"zoneterapi\",
                \"akupunktur\",
                \"smerterudredning\",
                \"fysioterapi\",
                \"psykiater\",
                \"allergi\",
                \"allergiudredning\"
            ]
        },
        {
            \"id\": \"Y0015\",
            \"heading\": \"Akupunktur\",
            \"teaser\": \"Din sundhedsforsikring kan dække behandling hos en akupunktør.\",
            \"details\": [
                \"Hvis du har smerter eller gener i kroppen, kan du få behandling hos en akupunktør.Du kan kontakte vores sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a> og starte din behandling.\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\",
                \"akupunktur\",
                \"akupunktør\",
                \"nåle\",
                []
            ]
        },
        {
            \"id\": \"Y0016\",
            \"heading\": \"Zoneterapi\",
            \"teaser\": \"Din sundhedsforsikring kan dække behandling hos en zoneterapeut.\",
            \"details\": [
                \"Hvis du har smerter eller gener i kroppen, kan du få behandling hos en zoneterapeut.Du kan kontakte vores sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a> og starte din behandling.\"
            ],
            \"image\": \"9802.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\",
                \"fødder\",
                \"fodbehandling\",
                \"zoneterapi\",
                \"zoneterapeut\"
            ]
        },
        {
            \"id\": \"Y0017\",
            \"heading\": \"Behandling hos speciallæge\",
            \"teaser\": \"Mulighed for behandling hos en speciallæge\",
            \"details\": [
                \"Hvis du har brug for at få behandling eller operation, kan du få en konsultation hos en speciallæge i vores kvalitetssikret netværk. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\",
                \"Sygdom\"
            ],
            \"tags\": [
                \"undersøgelse\",
                \"forundersøgelse\",
                \"diagnose\",
                \"diagnosticering\",
                \"læge\",
                \"speciallæge\",
                \"røntgen\",
                \"scanning\",
                \"klinik\",
                \"privatklinik\",
                \"hospital\",
                \"privathospital\",
                \"blodprøver\",
                \"prøver\",
                \"operation\",
                \"behandling\",
                \"operere\"
            ]
        },
        {
            \"id\": \"Y0018\",
            \"heading\": \"Smerteudredning\",
            \"teaser\": \"Udredning af kroniske smerter\",
            \"details\": [
                \"Hvis du har kroniske smerter, kan du få udredning af dine smerter på en smerteklinik. Udredningen foretages af eksperter på området. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"smerter\",
                \"udredning\",
                \"kroniske smerter\"
            ]
        },
        {
            \"id\": \"Y0019\",
            \"heading\": \"Psykiatri\",
            \"teaser\": \"Psykiatrisk behandling for mentale udfordringer\",
            \"details\": [
                \"Har du brug for psykiatrisk behandling, kan du komme til en psykiater via din sundhedsforsikring. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Trivsel\",
                \"Søvn\",
                \"Sygdom\"
            ],
            \"tags\": [
                \"stress\",
                \"trivsel\",
                \"krisehjælp\",
                \"angst\",
                \"mindfulness\",
                \"psykolog\",
                \"depression\",
                \"psykisk førstehjælp\",
                \"mental sundhed\",
                \"psykiatri\",
                \"psykiater\",
                \"lykkepiller\"
            ]
        },
        {
            \"id\": \"Y0020\",
            \"heading\": \"Helbredsundersøgelse hos sygeplejerske\",
            \"teaser\": \"Få undersøgt din generelle helbredstilstand hos en sygeplejerske\",
            \"details\": [
                \"Du har mulighed for at få en helbredsundersøgelse på ca. 15 minutter hos en sygeplejerske. Du får foretaget en række målinger, der giver dig overblik over din sundhedstilstand og vejledning til at forbedre den.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Alkohol\",
                \"Diabetes \",
                \"Hjerte-karsygdomme\",
                \"Kost\",
                \"Motion\",
                \"Rygning\",
                \"Søvn\"
            ],
            \"tags\": [
                \"helbredstjek\",
                \"sundhedstjek\",
                \"helbredsundersøgelse\",
                \"helbredstest\",
                \"sundhedsundersøgelse\",
                \"målinger\",
                \"sygeplejerske\",
                \"helbredstilstand\",
                \"blodprøver\",
                \"prøver\",
                \"helbred\",
                \"sundhed\"
            ]
        },
        {
            \"id\": \"Y0021\",
            \"heading\": \"Helbredsundersøgelse hos læge\",
            \"teaser\": \"Få undersøgt din generelle helbredstilstand hos en læge\",
            \"details\": [
                \"Du har mulighed for at få en helbredsundersøgelse på ca. halvanden time hos en læge. Du får foretaget en række målinger, der giver dig overblik over din sundhedstilstand og vejledning til at forbedre den.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Neurologisk sygdom (eks. sklerose)\",
                \"Underlivsproblem (symptomer ifm. graviditet, infektioner, mfl.)\",
                \"Symptomer fra fordøjelsessystem (marve-, tarm, ernæringsproblemer, mfl.)\",
                \"Symptomer fra en kræftsygdom\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Alkohol\",
                \"Diabetes\",
                \"Hjerte-karsygdomme\",
                \"KOL\",
                \"Kost\",
                \"Motion\",
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"helbredstjek\",
                \"sundhedstjek\",
                \"helbredsundersøgelse\",
                \"helbredstest\",
                \"sundhedsundersøgelse\",
                \"målinger\",
                \"læge\",
                \"helbredstilstand\",
                \"blodprøver\",
                \"prøver\",
                \"helbred\",
                \"sundhed\"
            ]
        },
        {
            \"id\": \"Y0022\",
            \"heading\": \"Rygtræningshold\",
            \"teaser\": \"Træn din ryg stærk\",
            \"details\": [
                \"Du har mulighed for at deltage på et rygtræningshold, og træne din ryg stærk med hjælp fra en uddannet træner. Du skal kontakte din HR repræsentant for at bestille det.\"
            ],
            \"image\": \"24275.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\"
            ],
            \"emner\": [
                \"Arbejdsforhold\",
                \"Motion\",
                \"Smerter og bevægeapparat\",
                \"Trivsel\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\"
            ]
        },
        {
            \"id\": \"Y0023\",
            \"heading\": \"Træningshold\",
            \"teaser\": \"Træn dig stærk\",
            \"details\": [
                \"Du har mulighed for at deltage på et træningshold, og træne din krop stærk med hjælp fra en uddannet træner. Du skal kontakte din HR repræsentant for at bestille det.\"
            ],
            \"image\": \"24275.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Arbejdsforhold\",
                \"Motion\",
                \"Smerter og bevægeapparat\",
                \"Trivsel\"
            ],
            \"tags\": [
                \"smerter\",
                \"motion\",
                \"stivhed\",
                \"nakke\",
                \"skuldre\",
                \"lænd\",
                \"ryg\",
                \"knæ\",
                \"skader\",
                \"sportsskade\",
                \"hofte\",
                \"arme\",
                \"ben\",
                \"træning\",
                \"løb\",
                \"sport\"
            ]
        },
        {
            \"id\": \"Y0024\",
            \"heading\": \"Kontorergonomi\",
            \"teaser\": \"Få en korrekt arbejdsstilling på din arbejdsplads\",
            \"details\": [
                \"Du kan få råd og vejledning fra en ergoterapeut til, at få den bedste arbejdsstilling på din arbejdsplads. Du skal kontakte din HR repræsentant for at bestille det.\"
            ],
            \"image\": \"9968.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\"
            ],
            \"emner\": [
                \"Arbejdsforhold\",
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"Arbejdsplads\",
                \"arbejdsstilling\",
                \"arbejdsmiljø\",
                \"arbejdsforhold\"
            ]
        },
        {
            \"id\": \"Y0025\",
            \"heading\": \"Erhvervspsykologi\",
            \"teaser\": \"Få råd og vejledning af en erhvervspsykolog\",
            \"details\": [
                \"Du kan få råd og vejledning af en erhvervspsykolog, fx ved et foredrag eller enkeltsessioner på din arbejdsplads. Du skal kontakte din HR repræsentant for at bestille det.\"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Trivsel \"
            ],
            \"tags\": [
                \"stress\",
                \"trivsel\",
                \"krisehjælp\",
                \"angst\",
                \"mindfulness\",
                \"psykolog\",
                \"depression\",
                \"mental sundhed\",
                \"erhvervspsykolog\"
            ]
        },
        {
            \"id\": \"Y0026\",
            \"heading\": \"Rygestopkursus\",
            \"teaser\": \"Få hjælp til at holde et rygestop\",
            \"details\": [
                \"Du har muligheden for at deltage på et rygestopkursus, hvor du kan få hjælp til at stoppe med at ryge, og holde dit rygestop. Du skal kontakte din HR repræsentant for at bestille det.\"
            ],
            \"image\": \"22001.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Hjerte- eller kredsløbsproblemer\"
            ],
            \"emner\": [
                \"Rygning\"
            ],
            \"tags\": [
                \"rygestop\",
                \"rygning\",
                \"stop rygning\",
                \"rygestopkursus\",
                \"ryge stop\",
                \"KOL\",
                \"livsstilssygdom\",
                \"kol\",
                \"hjerte-kar\",
                \"hjerte\",
                \"lunger\",
                \"hoste\",
                \"slim\"
            ]
        },
        {
            \"id\": \"Y0027\",
            \"heading\": \"Folder om alkohol\",
            \"teaser\": \"Læs mere om alkohol, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om alkohol på download linket.\"
            ],
            \"image\": \"Brochure_alkohol.JPG\",
            \"bilag\": \"Bilag E ALKOHOL_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Alkohol\"
            ],
            \"tags\": [
                \"Alkohol\"
            ]
        },
        {
            \"id\": \"Y0028\",
            \"heading\": \"Folder om arbejdsforhold\",
            \"teaser\": \"Læs mere om arbejdsforhold, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om arbejdsforhold  på download linket\"
            ],
            \"image\": \"Brochure_arbejdsforhold.JPG\",
            \"bilag\": \"Bilag E ARBEJDSFORHOLD_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Arbejdsforhold\"
            ],
            \"tags\": [
                \"Arbejdsplads\",
                \"arbejdsstilling\",
                \"arbejdsmiljø\",
                \"arbejdsforhold\"
            ]
        },
        {
            \"id\": \"Y0029\",
            \"heading\": \"Folder om diabetes\",
            \"teaser\": \"Læs mere om diabetes, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om diabetes  på download linket\"
            ],
            \"image\": \"Brochure_diabetes.JPG\",
            \"bilag\": \"Bilag E DIABETES_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Diabetes \"
            ],
            \"tags\": [
                \"Diabetes \"
            ]
        },
        {
            \"id\": \"Y0030\",
            \"heading\": \"Folder om hjerte-kar\",
            \"teaser\": \"Læs mere om hjerte-kar sygdomme, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om hjerte-kar  på download linket\"
            ],
            \"image\": \"Brochure_hjerte_kar.JPG\",
            \"bilag\": \"Bilag E HJERTEKAR_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Hjerte- eller kredsløbsproblemer\"
            ],
            \"emner\": [
                \"Hjerte-karsygdomme\"
            ],
            \"tags\": [
                \"Hjerte-karsygdomme\"
            ]
        },
        {
            \"id\": \"Y0031\",
            \"heading\": \"Folder om KOL\",
            \"teaser\": \"Læs mere om KOL, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om KOL på download linket\"
            ],
            \"image\": \"Brochure_KOL.JPG\",
            \"bilag\": \"Bilag E KOL_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Luftvejsproblemer (KOL, astma, mfl.)\"
            ],
            \"emner\": [
                \"KOL\"
            ],
            \"tags\": [
                \"KOL\"
            ]
        },
        {
            \"id\": \"Y0032\",
            \"heading\": \"Folder om kost\",
            \"teaser\": \"Læs mere om kost, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om kost på download linket\"
            ],
            \"image\": \"Brochure_kost.JPG\",
            \"bilag\": \"Bilag E KOST_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Kost\"
            ],
            \"tags\": [
                \"Kost\"
            ]
        },
        {
            \"id\": \"Y0033\",
            \"heading\": \"Folder om mental sundhed\",
            \"teaser\": \"Læs mere om mental sundhed, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om mental sundhed  på download linket\"
            ],
            \"image\": \"Brochure_mental_sundhed.JPG\",
            \"bilag\": \"Bilag E MENTAL_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\"
            ],
            \"tags\": [
                \"Mental sundhed\"
            ]
        },
        {
            \"id\": \"Y0034\",
            \"heading\": \"Folder om motion\",
            \"teaser\": \"Læs mere om motion, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om motion  på download linket\"
            ],
            \"image\": \"Brochure_motion.JPG\",
            \"bilag\": \"Bilag E MOTION_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Hjerte- eller kredsløbsproblemer\",
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Motion\"
            ],
            \"tags\": [
                \"Motion\"
            ]
        },
        {
            \"id\": \"Y0035\",
            \"heading\": \"Folder om muskel- og skeletsygdom\",
            \"teaser\": \"Læs mere om muskel- og skeletsygdomme, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om muskel- og skeletsygdom på download linket\"
            ],
            \"image\": \"Brochure_muskel_skelet.JPG\",
            \"bilag\": \"Bilag E MUSKEL-SKELET_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"Smerter og bevægeapparat\",
                \"Muskel\",
                \"Muskler\",
                \"Skelettet\"
            ]
        },
        {
            \"id\": \"Y0036\",
            \"heading\": \"Folder om osteoporose\",
            \"teaser\": \"Læs mere om osteoporose, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om osteoporose  på download linket\"
            ],
            \"image\": \"Brochure_osteoporose.JPG\",
            \"bilag\": \"Bilag E OSTEOPOROSE_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Osteoporose\"
            ],
            \"tags\": [
                \"Osteoporose\",
                \"Skelettet\",
                \"Knogler\",
                \"Knogleskørhed\"
            ]
        },
        {
            \"id\": \"Y0037\",
            \"heading\": \"Folder om rygning\",
            \"teaser\": \"Læs mere om rygning, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om rygning  på download linket\"
            ],
            \"image\": \"Brochure_rygning.JPG\",
            \"bilag\": \"Bilag E RYGNING_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Luftvejsproblemer (KOL, astma, mfl.)\"
            ],
            \"emner\": [
                \"Rygning\"
            ],
            \"tags\": [
                \"rygestop\",
                \"rygning\",
                \"stop rygning\",
                \"rygestopkursus\",
                \"ryge stop\",
                \"KOL\",
                \"livsstilssygdom\",
                \"hjerte-kar\",
                \"hjerte\",
                \"lunger\",
                \"hoste\",
                \"slim\"
            ]
        },
        {
            \"id\": \"Y0038\",
            \"heading\": \"Folder om smerter\",
            \"teaser\": \"Læs mere om smerter, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om smerter på download linket\"
            ],
            \"image\": \"Brochure_smerter.JPG\",
            \"bilag\": \"Bilag E SMERTER_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Smerteproblem i kroppens øvre del (nakke, skulder, albue, hånd, mfl.)  \",
                \"Smerteproblem i kroppens nedre del (lænderyg, hofte, knæ, ankel, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Smerter og bevægeapparat\"
            ],
            \"tags\": [
                \"Smerter\",
                \"Smerter og bevægeapparat\"
            ]
        },
        {
            \"id\": \"Y0039\",
            \"heading\": \"Folder om sygdomsbillede\",
            \"teaser\": \"Læs mere om sygdomsbillede, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om sygdomsbillede på download linket\"
            ],
            \"image\": \"Brochure_sygdomsbillede.JPG\",
            \"bilag\": \"Bilag E SYGDOMSBILLEDE_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Sygdom\"
            ],
            \"tags\": [
                \"Sygdom\"
            ]
        },
        {
            \"id\": \"Y0040\",
            \"heading\": \"Folder om søvn\",
            \"teaser\": \"Læs mere om søvn, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om søvn på download linket\"
            ],
            \"image\": \"Brochure_søvn.JPG\",
            \"bilag\": \"Bilag E SØVN_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Søvn\"
            ],
            \"tags\": [
                \"Søvn\"
            ]
        },
        {
            \"id\": \"Y0041\",
            \"heading\": \"Folder om trivsel og selvvurderet helbred\",
            \"teaser\": \"Læs mere om trivsel og selvvurderet helbred, og hvordan det påvirker dig.\",
            \"details\": [
                \"Hent folder om trivsel og selvvurderet helbred på download linket\"
            ],
            \"image\": \"Brochure_trivlsel.JPG\",
            \"bilag\": \"Bilag E TRIVSEL_TRYG_A4.pdf\",
            \"helbredskategorier\": [
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Trivsel \"
            ],
            \"tags\": [
                \"Trivsel \"
            ]
        },
        {
            \"id\": \"Y0042\",
            \"heading\": \"Psykologisk rådgivning\",
            \"teaser\": \"Psykologisk rådgivningsforløb til mentale udfordringer\",
            \"details\": [
                \"Har du brug for psykologisk rådgivning, kan du komme til en psykolog via din sundhedsforsikring. Du skal have en lægehenvisning eller anbefaling fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"24229.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Psykisk helbredsproblem (stress, angst, depression, mfl.)\"
            ],
            \"emner\": [
                \"Mental sundhed\",
                \"Søvn\",
                \"Trivsel\"
            ],
            \"tags\": [
                \"Psykologisk rådgivning\",
                \"Søvn\",
                \"Trivsel\"
            ]
        },
        {
            \"id\": \"Y0043\",
            \"heading\": \"Allergiudredning\",
            \"teaser\": \"Udredning af allergier\",
            \"details\": [
                \"Hvis du har symptomer på allergi, og almindelige tests ikke viser allergener, kan du blive udredt af eksperter på området. Du skal have en lægehenvisning fra egen læge, og du kan kontakte vores Sundhedsteam på <a href='tel:+4544202600'>44 20 26 00</a>.\"
            ],
            \"image\": \"Tryg-laege-03.jpg\",
            \"bilag\": \"\",
            \"helbredskategorier\": [
                \"Luftvejsproblemer (KOL, astma, mfl.)\",
                \"Andet helbredsproblem\"
            ],
            \"emner\": [
                \"Sygdom\"
            ],
            \"tags\": [
                \"Allergiudredning\"
            ]
        }
    ]
}";

echo $smartsearch;

?>