#### functional programming
## Assessment
Learn how to clean data using functional programming patterns.
Later (during frontend data), create a data visualisation with d3 based on given data. See repo.

# Survey Data Cleaning
[![Netlify Status](https://api.netlify.com/api/v1/badges/83e1acb5-f54f-4736-b142-43061eacecb9/deploy-status)](https://app.netlify.com/sites/functional-programming-2021/deploys)
 ... [link to deploy](https://functional-programming-2021.netlify.app/)

![screenshot of website](https://github.com/deannabosschert/functional-programming/blob/trunk/_site/assets/img/screenshot_website.png)
<details>
  <summary><strong>gif screencapture</strong> (click to expand)</summary>

![gif of website](https://github.com/deannabosschert/functional-programming/blob/trunk/_site/assets/img/screenshot_website.gif)
</details>

This assignment actually consists of two parts:
* Data cleaning of survey data with functional patterns
* RDW data manipulation and rendering

On the deploy, I first wanted to keep these two parts are divided between the 'Survey Data' and 'RDW Data'-tabs.

But then for, I decided to keep this repo all as it were after the survey data-part, as the whole part of functional programming is to be able to re-use functions anyways. I think it's much cleaner this way too, otherwise I would've had some weird folder structure. The two parts are clearly divided in the documentation in the [wiki](https://github.com/deannabosschert/functional-programming/wiki), and split between my functional-programming repo (this one) and [frontend-data](https://github.com/deannabosschert/frontend-data/) repo.

## Table of Contents
  * [Assessment](#assessment)
- [Survey Data Cleaning](#survey-data-cleaning)
  * [✅ To-do](#--to-do)
  * [📋 Concept](#---concept)
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
The actual concept for the end project is documented in the wiki of frontend data
For more information about this concept, see the [wiki page](https://github.com/deannabosschert/frontend-data/wiki/Concept) (in Dutch).

For this repo, the concept was to fetch a dataset of a questionnaire that the students filled in during  the Information Design Datavisualization-course, and clean this data using filters based on functional programming principles.

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
    "node-fetch": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "csvtojson": "^2.0.10",
    "mkdirp": "^0.5.1"
  }
```

#### Scripts
```json
  "scripts": {
    "predev": "rimraf _site",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/scss:_site/assets/css/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js assets/scss/index.scss _site/assets/css/index.css"
  }
```

## 🗃 Data
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
* subgoal 1 (read _site)
* subgoal 2 (write _site)
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
- My amazing support group :heart:
- Everyone keeping up with/tolerating me in Teams :heart:

### (Small) inspiration sources
- https://www.section.io/engineering-education/templating-your-static-site/ for using ejs with 11ty
- https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1 for the datasets
- _site of Nunjucks, Eleventy, EJS, D3.js, etc.
- My former projects, like progressive-web-apps

## 🗺️ License
Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/functional-programming/blob/master/LICENSE)      
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
