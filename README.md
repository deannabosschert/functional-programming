# Functional Programming
## Assessment
Create a data visualisation with d3 based on given data.
Focus on the data cleaning beforehand.

> Alle teksten in het Nederlands behoren tot de concept/developmentfase, uiteindelijk zal de readme volledig in het Engels zijn. Zo kan ik concept VS eindproduct wat beter scheiden.

# Survey Data Cleaning + Auto’s in de stad
<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/eaf5a426-0c2d-4380-b88d-e4441f880600/deploy-status)](https://app.netlify.com/sites/functional-programming-2021/deploys) ... [link to deploy](https://functional-programming-2021.netlify.app/)-->
![screenshot of website](https://github.com/deannabosschert/functional-programming/blob/trunk/docs/assets/img/screenshot_website.png)
<details>
  <summary><strong>gif screencapture</strong> (click to expand)</summary>
  
![gif of website](https://github.com/deannabosschert/functional-programming/blob/trunk/docs/assets/img/screenshot_website.gif)
</details>

This assignment actually consists of two parts:
* Data cleaning of survey data with functional patterns
* RDW data manipulation and rendering

On the deploy, these two parts are divided between the 'Survey Data' and 'RDW Data'-tabs.
For this repo, I decided to keep it all as it were after the survey data-part, as the whole part of functional programming is to be able to re-use functions anyways. I think it's much cleaner this way too, otherwise I would've had some weird folder structure. The two parts are clearly divived in the documentation in the [wiki](https://github.com/deannabosschert/functional-programming/wiki) though.

## Table of Contents
  * [Assessment](#assessment)
- [Survey Data Cleaning && Auto’s in de stad](#survey-data-cleaning----auto-s-in-de-stad)
  * [✅ To-do](#--to-do)
  * [📋 Concept](#---concept)
  * [🅿️ Parkeergelegenheden in coronatijd](#parkeergelegenheden-in-coronatijd)
  * [⚙️ Installation](#---installation)
  * [↔️ Interaction diagram](#---interaction-diagram)
  * [🗃 Data](#---data)
  * [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
  * [🏫 Assignment](#---assignment)
  * [ℹ️ Resources](#---resources)
  * [🗺️ License](#----license)

## ✅ To-do
See the [project board](https://github.com/deannabosschert/functional-programming/projects/1) for my current to-do's

## 📋 Concept
Conceptvragen zijn hieronder uitgewerkt; zodra de app 'klaar' is zal ik hier onder 'concept' van begin tot eind beschrijven wat de gebruiker specifiek op mijn site kan doen. Zal ook in het Engels uitgeschreven worden.

For more information about the concept, see the [wiki page](https://github.com/deannabosschert/functional-programming/wiki/Concept) (in Dutch).

## 🅿️ Parkeergelegenheden in coronatijd
**Welke bijkomende problemen zijn ontstaan met de komst van corona, met betrekking tot parkeergelegenheden?**    

### Deelvraag 1: avondklok
**Welke parkeerplaatsen zouden qua tijdsframe een probleem kunnen vormen indien er een Corona-avondklok wordt ingevoerd?**    
**Dataset:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq    
**Aanname:** een aantal plaatsen zullen gemarkeerd worden als 'twijfelachtig' of ontoegankelijk voor mensen uit niet-vitale beroepen     
**Schets:** kaart, en nog wat visualisaties in de vorm van een bar chart om de aantallen aan te geven (of time instance/gantt)  , of hierarchic chart voor verhouding met 'niet-conflicterend'.  

<img src="https://github.com/deannabosschert/functional-programming/blob/trunk/assets/img/kaart_avondklok.png" alt="sketch of a datavisualization with a map" width="700" height="300">

Interactive kaart; zoom-able per provincie/stad en tooltips als je een parkeerplaats selecteert.
Vragen:
* Labels in de legenda
* Beide soorten weergeven? Of alleen een landelijke kaart met de plaatsen waarin conflicterende parkeergelegenheden aanwezig zijn
* Combineren met iets als een pie chart en andere charts voor het aantonen van de verhouding; in een soort storytelling-verhaal?        

<img src="https://github.com/deannabosschert/functional-programming/blob/trunk/assets/img/waffle_chart.png" alt="sketch of a waffle chart" style="display: inline-block" width="280" height="155"><img src="https://github.com/deannabosschert/functional-programming/blob/trunk/assets/img/pie_chart_avondklok.png" alt="sketch of a pie chart" style="display: inline-block;"  width="205" height="180">

### Deelvraag 2: parkeergelegenheid coronateststraten
**Is er in de buurt van Coronateststraten, genoeg parkeergelegenheid voor wie moet wachten op zijn/haar test?**    
**Datasets:**    
* https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s      
* Coronateststraten    
* Drukte bij Coronateststraten  

**Aanname:** een aantal zullen niet genoeg parkeergelegenheid hebben    
**Schets:** kaart, en nog een visualisatie in de vorm van een bar chart om de aantallen aan te geven    

### Additional Datasets
* https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7 (thanks to [Zekkie](https://github.com/ZekkieB) via [issue 9](https://github.com/deannabosschert/functional-programming/issues/9))

Persoonlijke noot: de 'deelvragen' zijn waarschijnlijk al onderzoeksvragen op zichzelf, maar ik wacht nog even tot ik locatiedata van teststraten (hopelijk) kan bemachtigen voor ik keuzes maak.

For more ideas, see the [Wiki page about my concept](https://github.com/deannabosschert/functional-programming/wiki)  


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

#### Scripts
```json
  "scripts": {
    "predev": "rimraf docs",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/scss:docs/assets/css/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf docs",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js assets/scss/index.scss docs/assets/css/index.css"
  }
```

## 🗃 Data

### 🐒 API
_What external data source is featured in your project and what are its properties?_
RDW dataset

#### Properties
* AreaID
* Prices

#### Rate limiting
None! Or well, 1.3 million I've heard. Just limit your requests, OK?

### 💽 Data cleaning
_What has been done with the fetched data?_What has been done with the initial data? Cleaning pattern?_

See my [Wiki](https://github.com/deannabosschert/functional-programming-2021/wiki/Data-opschonen) for a detailed view of my data cleaning and functional patterns.


## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_

- [ ] Some script that automatically writes the filtered data to my 'data'-folder in prebuild

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

### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/functional-programming/wiki/Rubric)
![rubric](https://github.com/deannabosschert/functional-programming/blob/master/src/img/rubric.png)

## ℹ️ Resources

### Credits
- Our superamazingteachers at the [Tech Track @CMD](https://github.com/cmda-tt/) :heart:
- Curran :heart:
- My amazing support group :heart:
- Everyone keeping up with/tolerating me in Teams :heart:

### (Small) inspiration sources
- https://www.section.io/engineering-education/templating-your-static-site/ for using ejs with 11ty
- https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1 for the datasets
- Docs of Nunjucks, Eleventy, EJS, D3.js, etc.
- My former projects, like progressive-web-apps

## 🗺️ License
Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/functional-programming/blob/master/LICENSE)      
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
