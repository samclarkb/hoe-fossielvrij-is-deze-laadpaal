# 🔋 Hoe fossielvrij is deze laadpaal? 

## Table of Contents 
* [Assesment](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#books-assessment)
* [Concept](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#bulb-concept)
* [Features](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#clipboard-Features)
* [Process](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#chart_with_upwards_trend-process)
* [Wireframe](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#pushpin-Wireframe)
* [API](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#repeat-API)
* [Wishlist](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#memo-wishlist)
* [Installation](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#wrench-installation)
* [Recources](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal#mag_right-recources)
* [License](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal2#bookmark-license)

## :books: Assesment 
### Case:
Nederland gaat in hoog tempo over op elektrisch rijden. Maar elektriciteit is nog niet fossielvrij. En met het laden van je elektrische auto stoot je dus CO2 uit. Hoeveel CO2 er vrijkomt hangt af van waar, wanneer en natuurlijk hoeveel energie (kWh) je laadt. Dus hoe weet je hoeveel CO2 er vrijkomt als je je elektrische auto in een specifieke laadpaal plugt? De Green Caravan heeft een datamodel ontwikkeld waarin energie-opwekking en -handel door heel Europa wordt gecombineerd met energie-mixen van energie-providers. Zo kun je tot op de laadpaal nauwkeurig opvragen hoeveel CO2, zon, wind, hydro, nucleair, kolen, gas en nog meer in een laadsessie zit. Green Caravan heeft niet alleen historische data, maar ook voorspellingen voor de nabije toekomst.

### Rubric:
Met de Meesterproef laat je zien wat je hebt geleerd tijdens de minor. Studenten die de vakken hebben gehaald kunnen aan de Meesterproef beginnen. Het eindproject wordt beoordeeld op een Design rationale, een Product biografie en een reflectie op het eigen niveau. Én of de klant blij is met het gemaakte project.

**Design Rationale**
In de Design Rationale schrijf je de debriefing, de probleem-definitie, toon je de oplossing en schrijf je een uitleg van de code. De Design Rationale is een verantwoording van je ontwerp. Als je in een team werkt kun je de Design Rationale als team schrijven. (TIP: Doe dit dan in de project repo)

**Product Biografie**
In de Product Biografie hou je per week bij wat je allemaal hebt gedaan. Je schrijft over het proces, de iteraties, de werkwijze en de planning. Ook schetsen, testen, voorbeeld code en inspiratie zijn deel van de Product Biografie. De Product Biografie is individueel, ook als je in een team werkt.

**Reflectie op eigen niveau**
Aan het eind van het project reflecteer je systematisch op je werk en het proces. Aan de hand van de vak-rubrics schrijf je welke vakken wel of niet aan bod zijn gekomen en waarom. Zo krijg je een goed beeld van je eigen niveau, mogelijke aandachtspunten in techniek, interactie en/of aspecten van het design-proces waar je je nog op kan verbeteren.

**Een blije klant**
Voor de klant werk je aan een bestaand product of maak je een (werkend) prototype. Gericht op een bepaalde gebruikersgroep, geschikt voor verschillende apparaten, met echte data, én een goede UX. (Jeweettoch) Een blije klant is een goede klant. Soms ontkom je er niet aan dat je een beetje eigenwijs moet doen. Dan doe je juist niet wat de klant wil en probeer je de opdrachtgever te overtuigen met een proof-of-concept. En soms kan het voorkomen dat het proces niet helemaal soepel loopt. Dat hoort erbij en daar leer je van. Aan het eind van het project vragen we de klant feedback op het geleverde werk en het proces.

Klik [hier](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal/wiki/Debrief) voor een uitgebreide debrief van de opdracht.

## :bulb: Concept
Deze applicatie maakt het mogelijk om te zien waar alle elektrische laadpalen bij jou in de buurt zijn. Daarnaast zie je in één oogopslag welke laadpalen duurzaam zijn en welke niet. Alle laadpalen worden weergegeven d.m.v. een icoon op een map. Je kunt er ook voor kiezen om gebruik te maken van de zoek balk boven in het scherm. Deze zoek balk maakt het mogelijk om inzicht te krijgen over andere gebieden en de daarbij horende laadpalen.

Ieder icoon is voorzien van één of twee kleuren en iedere kleur heeft zijn eigen betekenis. De hoofd kleur (ingekleurd) van het icoon staat voor de mate van duurzaamheid ten opzichte van een absolute schaal. Het hangt heel erg af van het moment of een laadpaal duurzaam is of niet en door middel van deze kleur geef ik aan of het een goed (duurzaam) moment is om te laden. Hiervoor heb ik een schaal van drie verschillende kleuren gebruikt. Groen staat voor duurzaam, oranje staat voor redelijk duurzaam en rood staat voor niet duurzaam. Daarnaast heeft ieder icoon ook een gekleurde rand. Deze rand geeft hoe duurzaam de laadpaal is ten opzichte van andere laadpalen, dus relatief. Hiervoor gebruik de kleuren rood en groen. Wanneer de rand groen gekleurd is, betekent dat de laadpaal onder het gemiddelde CO2 gr uitstoot per kilowattuur zit ten opzichte van alle laadpalen in de buurt. Wanneer de rand rood gekleurd is weet je dat de laadpaal boven het gemiddelde zit van alle laadpalen in de buurt. Zo wil ik gebruiker informeren over wat op het moment de betere keuze is. Het kan ook voorkomen dat een laadpaal grijs is gekleurd, dit betekent dat de laadpaal niet beschikbaar is op dat moment. 

Wanneer je op een icoontje drukt, komt er een pop tevoorschijn met daarin verdere informatie over de laadpaal. Zo zie je bijvoorbeeld  of de laadpaal beschikbaar is en hoeveel CO2 gram uitstoot per kilowattuur. Hiernaast wordt de absolute schaal van de laadpaal ook meegegeven aan de popup. Wanneer je bijvoorbeeld op een rode laadpaal klikt, krijg je in de pop up het volgende te zien: Warning: this charger is unsustainable! 

**Doel:**
Het doel van de app is om de gebruiker inzicht te geven over waar alle laadpalen in de buurt gelegen zijn en of ze duurzaam zijn of niet. Door in één oogopslag weer te geven wat de absolute duurzaamheid en de relatieve duurzaamheid is van een laadpaal, hoop ik de gebruiker te kunnen helpen bij het maken van zijn/haar beste keuze. 

**Uiterlijk:**

<img src='https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal/blob/main/public/images/finalGif.gif' width='200px' height='500px' />

## :clipboard: Features
- Een weergave van alle laadpalen in de buurt van dan de gebruiker
- Een weergave van waar de gebruiker zich op het moment bevindt 
- Een overzicht van welke laadpalen het meest duurzaam zijn ten opzichte van elkaar
- De gebruiker kan een overzicht van laadpalen te zien krijgen van een locatie naar keuze
- De gebruiker krijgt te zien of de laadpaal beschikbaar is of niet
- De gebruiker kan in en uitzoomen 
 
## :chart_with_upwards_trend: Process
geinteresseerd in mijn proces tijdens het maken van dit project? klik [hier](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal/wiki/Process)! 

## 📌 Wireframe

<img src='https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal/blob/main/public/images/finalWireframe.png' width='1000px'/>

## :repeat: API
Ik heb verschillende api’s gebruikt tijdens het maken van deze app. De Mapbox api heb ik als eerste geïmplementeerd, deze api zorgt ervoor dat de map wordt getoond. Door het volgende stuk code in mijn head te zetten, zorg ik ervoor dat ik toegang heb tot Mapbox: ```<script defer src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script> ```.

Daarnaast heb ik gebruik gemaakt van de shell recharge api. Met deze api haal ik informatie van  iedere laadpaal in Nederland op. Zo krijg je o.a. toegang tot de locatie van de laadpaal en krijg je inzicht of een laadpaal beschikbaar is of niet. Ik heb de volgende url opgehaald op de server door middel van een fetch ```url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${long - 0.02}/${long + 0.02}/${lat - 0.015}/${lat + 0.015}/15```. Door + en - te gebruiken baken ik een gebied af waarin ik alle laadpalen laat zien op de map.

Tot slot heb ik gebruikt gemaakt van INFLUXDB voor het ophalen van de uitstoot per iedere laadpaal. Het stukje code rondom deze api hebben we mogen overnemen van Jasper (De Voorhoede).

## :memo: Wishlist
Er zijn een paar dingen waar ik niet aan toe ben gekomen, maar graag had willen doen:
- Service worker implementeren, zodat ik het gedrag van de gebruiker kan weergeven
- Het niveau van duurzaamheid niet aangeven door middel van alleen kleur 
- Een route beschrijving naar de gekozen laadpaal
- Weergeven wat de beste tijd is om te laden gedurende de dag 
- Een waarschuwende popup weergeven wanneer meerendeel van de laadpalen niet duurzaam zijn
- Script.js in modules verdelen 

## :wrench: Installation

Mocht je er zelf wat aan toe willen voegen, neem vooral je tijd! 

Begin met het kopieren van de repository door middel van het onderstaande stuk code

``` git clone https://github.com/samclarkb/browser-technologies-2122.git ```

Vervolgens installeer je al de NPM packages 

``` npm install ```

Zet de server aan door het volgende uit te voeren

```npm run start```

## :mag_right: Recources 
- mapbox. (z.d.). Getting started. docs.mapbox. Geraadpleegd op 23 juni 2022, van https://docs.mapbox.com/help/getting-started/
- Shell. (z.d.). B2B EV Locations. developer.shell. Geraadpleegd op 23 juni 2022, van https://developer.shell.com/api-catalog/v1.0.1/b2b-ev-locations
- Moelker, J. (z.d.). gc-providers. https://codesandbox.io/. Geraadpleegd op 23 juni 2022, van https://codesandbox.io/s/gc-providers-65hd8r

## :bookmark: License 
Copyright (c) 2021 Sam Clark Boot, [MIT](https://github.com/samclarkb/hoe-fossielvrij-is-deze-laadpaal/blob/main/LICENSE)

