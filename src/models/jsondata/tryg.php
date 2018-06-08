

<?php

header("Access-Control-Allow-Origin: *");


$tryg = "{
  \"1\": {
    \"organisation\": \"Tryg Forsikring\",
    \"logo\": \"tryg_logo.png\",
    \"bg_image\": \"tryg-background.png\",
    \"main_color\": \"#DC0000\",
    \"show_buttons\": true,
    \"buttons\": [
      [
        \"1\",
        \"Tal med os\",
        \"16\",
        \"wlc_pensionsordning.php\",
        \"fa\",
        \"187\",
        \"187\",
        \"8\",
        {
          \"103\": {
            \"tab_id\": \"1\",
            \"tab_name\": \"Telefonisk rådgivning\",
            \"sub_id\": \"1\",
            \"text\": [
              \"Har du brug for råd og vejledning til at håndtere stress hos dig eller andre, kan du ringe til os anonymt på StressStop-linjen her: <a href='tel:+4570252643'>70252643</a>\",
              \"Har du brug for råd og vejledning, fx om dine rettigheder, eller hjælp under et patientforløb, kan du kontakte Tryg Vejviser og få hjælp af sundhedsfaglige medarbejdere her: <a href='tel:+4570259449'>70259449</a>\",
              \"Har du en lægehenvisning til undersøgelse eller behandling, kan du anmelde din skade ved at ringe til os her: <a href='tel:+4544202600'>44202600</a>\"
            ]
          }
        }
      ],
      [
        \"2\",
        \"Brug din Sundhedsforsikring\",
        \"16\",
        \"wlc_syg_og_raskmelding.php\",
        \"fa \",
        \"65\",
        \"65\",
        \"17\",
        {
          \"106\": {
            \"tab_id\": \"4\",
            \"tab_name\": \"Sundhedsforsikring\",
            \"sub_id\": \"2\",
            \"text\": [
              \"Tryg Sundhedsforsikring garanterer hurtig behandling og operation på privathospitaler i vores store kvalitetssikrede netværk, hvis du bliver syg eller kommer til skade.\",
              \"Sådan bruger du din Sundhedsforsikring:\",
              \"<ul><li>Gå til din egen læge og få en henvisning.</li> <li>Ring til os</li> <li> Kom i gang med behandling.</li> </ul>\",
              \"Skal du til øre-, næse-, eller halslæge, kiropraktor, zoneterapeut eller akupunktør kræver det ikke lægehenvisning.\"
            ]
          },
          \"412\": {
            \"tab_id\": \"250\",
            \"tab_name\": \"Faktablad\",
            \"sub_id\": \"2\",
            \"text\": [
              \"Her finder du fakta om Sundhedsforsikring:\",
              \"<a  href='http://udv-admin.carex.dk/config/assets/imgs/searchimages/fakta-om-tryg-sundhed-fak20243_tcm110-137942.pdf'>Link til faktablad</a>\"
            ]
          },
          \"413\": {
            \"tab_id\": \"251\",
            \"tab_name\": \"Betingelser\",
            \"sub_id\": \"2\",
            \"text\": [
              \"Her finder du betingelser på Sundhedsforsikring:\",
              \"<a  href='http://udv-admin.carex.dk/config/assets/imgs/searchimages/sundhedsforsikring-forsikringsbetingelser-sun1706af.pdf'> Link til betingelser</a>\"
            ]
          }
        }
      ],
      [
        \"3\",
        \"Brug din Lægehotline og Apotek\",
        \"16\",
        \"wlc_sundhedsscreening.php\",
        \"fa \",
        \"65\",
        \"65\",
        \"13\",
        {
          \"007\": {
            \"tab_id\": \"4\",
            \"tab_name\": \"Lægehotline og Apotek\",
            \"sub_id\": \"2\",
            \"text\": [
              \"Få lægen direkte hjem til dig via video. Med Tryg Lægehotline ”besøger” du lægen på din mobil, tablet eller computer, når din egen læge har lukket.\",
              \"Åbningstider: <br> Man-fre. 12-13 og 16-22 <br>Lør-søn. 9-17\",
              \"Du får altid kontakt til en almen praktiserende læge – helt som din egen læge.\",
              \"Pris pr. konsultation er 249 kr. Du kan betale med Mobilepay og betalingskort.\",
              \"Benyt Lægehotline og Apotek her <a href='https://trygsundhed.aleris.dk/Home/AboutHotline'>https://trygsundhed.aleris.dk/Home/AboutHotline</a>\"
            ]
          }
        }
      ],
      [
        \"4\",
        \"APV/Sundhedsscreening\",
        \"16\",
        \"wlc_stress_og_trivsel.php\",
        \"fa\",
        \"65\",
        \"65\",
        \"10\",
        {
          \"107\": {
            \"tab_id\": \"5\",
            \"tab_name\": \"APV / Sundhedsscreening\",
            \"sub_id\": \"4\",
            \"starttest\":\"Start test\",
            \"starttestLink\": \"https://app-vital.life-partners.com/#/cx/\",
            \"text\": [
              \"APV og sundhedsscreeningen løser virksomhedens lovpligtige opgave med at gennemføre arbejdspladsvurdering, og giver samtidig dig mulighed for at få et indblik i din sundhedstilstand, forebygge livsstilsgener og styrke din sundhed i arbejds- og privatliv.\",
              \"Sundhedsscreeningen er anonym, kan kun åbnes af dig, og giver dig:\",
              \"<ul><li>Indblik i din egen sundhedstilstand og risikoområder</li> <li> Forslag til prioritering af mulige indsatsområder</li> <li> Kobling til relevante sundhedsfremmende indsatser </li> <li>  Individuel rådgivning og hjælp til at vælge og bruge relevante sundhedsfremmende ydelser </li> <li>  Inspiration og viden om sundhedsemner der er relevante, for netop din sundhedstilstand.</li> \"
            ]
          }
        }
      ],
      [
        \"5\",
        \"Øvelser og træning\",
        \"16\",
        \"wlc_ledersparring.php\",
        \"fa\",
        \"135\",
        \"135\",
        \"17\",
        {
          \"424\": {
            \"tab_id\": \"252\",
            \"tab_name\": \"Træning\",
            \"sub_id\": \"5\",
            \"text\": [
              \"Tryg og Team Danmark samarbejder om et sundere Danmark. Vi har udarbejdet forskellige programmer for, at du kan komme godt i gang med træning. Du kan også få hjælp til at undgå træningsskader med nogle af Danmarks bedste behandlere. Find programmerne her:\",
              \"<a href='https://www.falckhealthcare.dk/tryg/sundhedsportal/traning/'>https://www.falckhealthcare.dk/tryg/sundhedsportal/traning/</a>\"
            ]
          },
          \"425\": {
            \"tab_id\": \"253\",
            \"tab_name\": \"Fysiske øvelser\",
            \"sub_id\": \"5\",
            \"text\": [
              \"Hvis du har et stillesiddende arbejde, eller kroppen trænger til udstrækning, kan du finde forskellige fysiske øvelser, der hjælper med at forebygge smerter. Øvelserne er udarbejdet sammen med fysiske behandlere og er gode til at forebygge fx ondt i ryggen, nakkesmerter og andre smerter. Du finder øvelserne her:\",
              \"<a href='https://www.falckhealthcare.dk/tryg/sundhedsportal/fysisk-sundhed/'>tryg sundhedsportal fysisk-sundhed/</a>\"
            ]
          },
          \"427\": {
            \"tab_id\": \"253\",
            \"tab_name\": \"Mentale øvelser\",
            \"sub_id\": \"5\",
            \"text\": [
              \"Vi har lavet nogle enkle øvelser, der hjælper dig til at finde ro og overskud til at holde fokus. Du kan finde øvelserne her:\",
              \"<a href='https://www.falckhealthcare.dk/tryg/sundhedsportal/psykisk-sundhed/'> tryg sundhedsportal psykisk-sundhed/</a>\"
            ]
          }
        }
      ],
      [
        \"37\",
        \"Test dig selv\",
        \"16\",
        \"wlc_default.php\",
        \"fa\",
        \"1\",
        \"1\",
        \"100\",
        {
          \"491\": {
            \"tab_id\": \"274\",
            \"tab_name\": \"Test dig selv\",
            \"sub_id\": \"37\",
            \"text\": [
              \"Test din sundhed, og få overblik og motivation til en sundere livsstil inden for kost, rygning, alkohol, motion og stress. Når testen er afsluttet, får du en rød, gul eller grøn indikator samt gode råd til at ændre dine vaner mod en sund livsstil.\",
              \"<a  href='https://trygsundhed.aleris.dk/Home/AboutHealthCheck'>https://trygsundhed.aleris.dk/Home/AboutHealthCheck</a>\",
              \"Husk, at selv små ændringer kan give store resultater.\"
            ]
          }
        }
      ],
      [
        \"7\",
        \"Smart søg\",
        \"16\",
        \"wlc_sundhedsydelser.php\",
        \"fa \",
        \"65\",
        \"65\",
        \"15\",
        {
          \"108\": {
            \"tab_id\": \"6\",
            \"tab_name\": \"Smart søg\",
            \"sub_id\": \"7\",
            \"text\": [
              \"Søg på fx ondt i knæet, stress eller vægttab, og få en liste over de muligheder, du har for hjælp.\"
            ]
          }
        }
      ],
      [
        \"8\",
        \"Sundhed.dk\",
        \"16\",
        \"wlc_sundheds_forsikring.php\",
        \"fa\",
        \"65\",
        \"65\",
        \"12\",
        {
          \"109\": {
            \"tab_id\": \"7\",
            \"tab_name\": \"Sundhed.dk\",
            \"sub_id\": \"8\",
            \"text\": [
              \"På Sundhed.dk kan du se dine sundhedsoplysninger i det offentlige, fx tidligere indlæggelser, prøvesvar og lægehenvisninger.\",
              \"Du skal logge på med NemID for at få adgang til Sundhed.dk\",
              \"<a href='https://www.sundhed.dk/'>https://www.sundhed.dk/</a>\"
            ]
          }
        }
      ],
      [
        \"9\",
        \"E-boks.dk\",
        \"16\",
        \"wlc_raadgivningslinje.php\",
        \"fa\",
        \"7\",
        \"7\",
        \"7\",
        {
          \"1019\": {
            \"tab_id\": \"7\",
            \"tab_name\": \"E-boks.dk\",
            \"sub_id\": \"8\",
            \"text\": [
              \"Hvis du får indkaldelser til undersøgelser fra det private eller offentlige sundhedsvæsen, modtager du dem i e-Boks.\",
              \"Du skal logge på med NemID for at få adgang til e-Boks.\",
              \"<a href='https://www.e-boks.com/danmark/da'>https://www.e-boks.com/danmark/da</a>\"
            ]
          }
        }
      ]
    ]
  }
}";

echo $tryg;
?>
