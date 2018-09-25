# Intro Modern JavaScript

## Voorafgaand
Vroeger kon je gewoon een ```<script>```-tag toevoegen in de header van je webpagina en je Javascript code zou uitgevoerd worden zoals bedoeld. Dit werd vooral gebruikt voor minder complexe zaken. Wou je toch graag iets complexere functionaliteit toevoegen dan kreeg je al snel vrij complexe Javascript code.

Denk maar als je in Javascript object georiënteerd een Class wil gebruiken om je gegevens bij te houden. Dan kom je al snel uit op iets gelijkaardigs als dit:
```JavaScript
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: 'printName',
    value: function printName() {
      console.log(this.name);
    }
  }], [{
    key: 'beProud',
    value: function beProud() {
      console.log('I AM AN ANIMAL');
    }
  }]);

  return Animal;
}();

var animal = new Animal('Cat');
animal.printName(); // Cat
Animal.beProud(); // I AM AN ANIMAL
```
## ECMAScript
ECMAScript is een scripting-language specification en werd gecreërd om JavaScript te standaardiseren. JavaScript is veruit de gekendste en meest gebruikte implementatie van ECMAScript sinds de standaard voor het eerst werd aangekondigd in 1997.

Tot op heden waren we vooral bekend met versie 5 en versie 5.1. Zeg maar de Javascript zoals we die tot op heden nog vaak terugvinden in webpagina’s op het web en zoals we die hebben gezien in het vak Webdesign.

In juni 2015 kwam men met de 6de editie van ECMAScript op de proppen. De huidige standaard voor JavaScript trouwens. ECMAScript6 (ES6) of ook wel ECMAScript 2015 genaamd was de eerste significante update van de specificatie sinds ES5 werd gereleast in 2009 en dit bracht heel wat wijzigingen met zich mee. Er werd aanzienlijk wat nieuwe syntax toegevoegd voor het schrijven van complexe applicaties, inclusief klassen en modules.

Hierdoor kreeg JavaScript een nieuw leven met heel wat JavaScript frameworks tot gevolg zoals AngularJs, Angular2, React, Vue, Ionic, Atomic, React Native, … en nog tientallen anderen.

Tegenwoordig wordt onze Javascript code gepreprocesst zodat we kunnen gebruik maken van experimentele functies en andere taalextensies zoals bv JSX.

## Babel
>The compiler for the next generation JavaScript

Babel is de belangrijkste tool voor het preprocessen van JavaScript. Met behulp van Babel wordt ECMAScript 2015+ code omgezet naar een backward compatible versie van JavaScript dat op een groter aantal platformen kan worden ondersteund.
Babel zal dus je Modern JavaScript sourcecode en syntax gaan transformeren naar old-style JavaScript.

ECMAScript 6 compatibility table: http://kangax.github.io/compat-table/es6/

Babel maakt het ook mogelijk om je oorspronkelijke broncode te gaan debuggen door source maps op te nemen in de gecompileerde JavaScript. JavaScript interpreters voeren de gecompileerde code uit, maar wijzen deze toe aan de originele broncode in de debugger. Op die manier kan je de broncode debuggen in plaas van de (over het algemeen vrij lelijke) gecompilerde output-code.

### Babel en React Native
React Native gebruikt Babel om ES6-functies in te schakelen en zorgt voor consistentie tussen de verschillende platformen, zodat onze JavaScript op Android, iOS, Windows en andere platforms uitgevoerd kan worden.

Daarnaast wordt in React Native JSX syntax gebruikt tijdens ontwikkeling. JSX is een uitbreiding op JavaScript waardoor je een soort van XML code kan schrijven in JavaScript, met alle voordelen van dien, die uiteindelijk gecompileerd wordt naar JavaScript. Ook al lijkt het sterk op XML of HTML, toch is het nog steeds JavaScript. Maar hierover later in deze cursus uiteraard meer.
Babel is uiteindelijk verantwoordelijk om de JSX syntax te converteren.

Babel en React Native gaan dus hand in hand.

### Babel configureren
Babel is een zeer configureerbare tool. Je kan babel gaan configureren door een .babelrc bestand toe te voegen in de root map van je project. Dit bestand zal specifieren welke JS features moeten worden ingeschakeld en welke plugins er worden gebruikt. Bijvoorbeeld JSX. React Native zal out of the box babel correct configureren voor ons bij het aanmaken van een nieuw project, waardoor wij over het algemeen geen aanpassingen hoeven te maken in .babelrc

Bron: https://babeljs.io/docs/en
