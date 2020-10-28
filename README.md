# Functional Programming
## Assessment
Create a data visualisation with d3 based on given data.
Focus on the data cleaning beforehand.

# Auto’s in de stad
[![Netlify Status](https://api.netlify.com/api/v1/badges/eaf5a426-0c2d-4380-b88d-e4441f880600/deploy-status)](https://app.netlify.com/sites/functional-programming-2021/deploys) ... [link to deploy](https://functional-programming-2021.netlify.app/)
![screenshot of website](https://paper-attachments.dropbox.com/s_32CDEAFA631B217EFA0891F586D7083AA233C4CE2AD042263B6C54D870A69D7E_1603883617505_image.png)
(deze screenshot klopt natuurlijk totaal niet met de uiteindelijke site en is gemaakt tijdens development/testing maar fungeert momenteel even als dummy ter opvulling)

## Parkeergelegenheden in coronatijd
**Welke bijkomende problemen zijn ontstaan met de komst van corona, met betrekking tot parkeergelegenheden?**    

### Deelvraag 1: avondklok
**Welke parkeerplaatsen zouden qua tijdsframe een probleem kunnen vormen indien er een Corona-avondklok wordt ingevoerd?**    
**Dataset:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq    
**Aanname:** een aantal plaatsen zullen gemarkeerd worden als 'twijfelachtig' of ontoegankelijk voor mensen uit niet-vitale beroepen     
**Schets:** kaart, en nog een visualisatie in de vorm van een bar chart om de aantallen aan te geven (of time instance/gantt?)    

### Deelvraag 2: parkeergelegenheid coronateststraten
**Is er in de buurt van Coronateststraten, genoeg parkeergelegenheid voor wie moet wachten op zijn/haar test?**    
**Datasets:**    
* https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s      
* Coronateststraten    
* Drukte bij Coronateststraten  

**Aanname:** een aantal zullen niet genoeg parkeergelegenheid hebben    
**Schets:** kaart, en nog een visualisatie in de vorm van een bar chart om de aantallen aan te geven    

### Deelvraag 3: misgelopen parkeerkosten
**Wat zouden de misgelopen parkeerkosten zijn bij de Coronateststraten?**      
_Indien je je moet laten testen, mag je op de nabijgelegen parkeerplaats gratis parkeren voor de tijd dat je in de rij staat voor de test.   
Hoe hoog is het bedrag aan misgelopen parkeerkosten, wanneer je het vergelijkt met de winsten op die plek pre-corona?_    
**Datasets:**    
* https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg.   
* Coronateststraten    

**Aanname:** er zal wel een verlies zichbaar zijn, tenzij er bij velen niet duidelijk is     aangegeven dat je geen parkeergeld hoeft te betalen en er dan dus juist wél parkeerkaartjes worden gekocht   
**Schets:** line graph, en kaart (bubble map) met de gebieden met grootste verliezen worden aangeduid?    

### Deelvraag 4: parkeerplaatsen bezet door thuiswerkers
**Zijn er parkeerplekken die momenteel bezet worden gehouden doordat ze thuiswerken, terwijl ze normaal vrij zijn voor bijv winkelend bezoek van de stad?**     
**Dataset:** pre-corona parkeerdata en huidige parkeerdata in stadscentra?    
**Aanname:** er is een verschil in parkeergedrag zichtbaar; mensen parkeren ergens voor langere tijd ipv voor korte periodes aaneen    
**Schets:** kaart, en gantt/instance chart per situatie om de verschillen in parkeergedrag te tonen?    

Persoonlijke noot: de 'deelvragen' zijn waarschijnlijk al onderzoeksvragen op zichzelf, maar ik wacht nog even tot ik locatiedata van teststraten (hopelijk) kan bemachtigen voor ik keuzes maak.

For more ideas, see the [Wiki page about my concept](https://github.com/deannabosschert/functional-programming/wiki)  

<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [⚙️ Installation](#---installation)
<!-- - [🧑🏼‍ Actor Diagram](#------actor-diagram)
- [↔️ Interaction diagram](#---interaction-diagram) -->
- [🌍 Design patterns](#---design-patterns)
- [👍🏽 Best practices](#-----best-practices)
- [🗃 Data](#---data)
  * [🐒 Github API](#---github-api)
    + [Endpoint(s)](#endpoint-s-)
    + [Rate limiting](#rate-limiting)
  * [💽 Data cleaning](#---data-cleaning)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [🏫 Assignment](#---assignment)
  * [Learning goals](#learning-goals)
  * [Week 1 - Hello API 🐒](#week-1---hello-api---)
  * [Week 2 - Design and Refactor 🛠](#week-2---design-and-refactor---)
  * [Week 3 - Wrapping up 🎁](#week-3---wrapping-up---)
  * [Rubric](#rubric)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Small inspiration sources](#small-inspiration-sources)
- [🗺️ License](#----license)

<!-- tocstop -->

</details>

## ✅ To-do
- [x] Refactor; njk to ejs
- [x] Change folder structure
- [x] Render data via ejs on screen
- [x] Refactor: ejs to njk
- [x] Render data via njk
- [ ] Render data correctly
- [ ] Add cleaning-functions to /lib
- [ ] Fetch data from API

## 📋 Concept
_What does your app do, what is the goal? (passing butter)_   
Conceptvragen zijn hierboven al uitgewerkt; zodra de app 'klaar' is zal ik hier onder 'concept' van begin tot eind beschrijven wat de gebruiker specifiek op mijn site kan doen. Zal ook in het Engels uitgeschreven worden.

## ⚙️ Installation
Clone this repository to your own device:
```bash
$ git https://github.com/deannabosschert/functional-programming.git
```
Then, navigate to this folder and run:

```bash
npm install
```

To run the project:

```bash
npm run dev
```

#### Dependencies
```json
"devDependencies": {
    "@11ty/eleventy": "^0.11.0",
    "cross-env": "^7.0.2",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "node-fetch": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "csvtojson": "^2.0.10",
    "mkdirp": "^0.5.1"
  },
  "dependencies": {
    "d3": "^5.16.0",
    "nodemon": "^2.0.2"
  }
```


<!-- ## 🧑🏼‍ Actor Diagram
_Which actors are there in your application? (actor diagram)_
![actor diagram](https://github.com/deannabosschert/functional-programming-2021/blob/master/src/img/actordiagram.png)

## ↔️ Interaction diagram
_How does flowed interaction through the application? (interaction diagram)_
![interaction diagram](https://github.com/deannabosschert/functional-programming-2021/blob/master/src/img/interactiondiagram.png) -->

<!-- ## 🌍 Design patterns

- opsomming
- van
- patterns -->

## 👍🏽 Best practices
- Make sure everything's in functions. No global stuff!
- Keep your functions as 'to the point' as possible; every function should only return 1 thing.
- Every function should also return _something_.


## 🗃 Data

### 🐒 API
_What external data source is featured in your project and what are its properties?_
RDW dataset

#### Properties
* AreaID
* Prices

#### Rate limiting
None! Or well, 1.3 million I've heard.

### 💽 Data cleaning
_What has been done with the fetched data?_What has been done with the initial data? Cleaning pattern?

See my [Wiki](https://github.com/deannabosschert/functional-programming-2021/wiki/Data-opschonen) for a more detailed view.

```js
```

outcome:
```json
```

## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_

- [ ] Some script that automatically writes the cleaned data to my 'data'-folder in prebuild

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
In this course we were rated on:

- Application of subject matter
- Understanding
- Quality
- Process

### Learning goals
This assessment focusses on:
* goal 1 (learn how to create with libraries)
* goal 2 (create interactive visualisations from external data)
* subgoal 1 (read docs)
* subgoal 2 (write docs)
* subgoal 5 (manipulate elements)
* subgoal 6 (load external data)
* subgoal 7 (transform data)
* subgoal 8 (use svg)
* subgoal 9 (use libraries)


### Week 1 - Data Cleaning 🐒

**Goal**: learn how to create with libraries   
I've learned how to load data locally and to fetch externally from an API, to clean that data and render this data.    
See my [wiki](https://github.com/deannabosschert/functional-programming/wiki) for more.    

### Week 2 - Datavisualizations 📊
**Goal**: create interactive visualisations from external data    
I've learned how to visualize the previous cleaned data in an interactive datavisualization, made with D3.js   
See my [wiki](https://github.com/deannabosschert/functional-programming/wiki) for more.    

</details>

<!-- ### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/functional-programming/wiki/Rubric)
![rubric](https://github.com/deannabosschert/functional-programming/blob/master/src/img/rubric.png) -->

## ℹ️ Resources

### Credits

- Our superamazingteachers at the [Tech Track @CMD](https://github.com/cmda-tt/)
- Curran :heart:

### (Small) inspiration sources

- https://www.section.io/engineering-education/templating-your-static-site/ for using ejs with 11ty
- https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1 for the datasets
- Docs of Nunjucks, Eleventy, EJS, D3.js, etc.
- My former projects, like progressive-web-apps

## 🗺️ License

Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/functional-programming/blob/master/LICENSE)
