# Working with arrays

Het is onmogelijk om React Native applicaties te gaan ontwikkelen die iets van complexiteit en logica bevatten zonder over een basis JavaScript te beschikken omtrent Arrays.

## ES5 JavaScript Array
In het vak Webdesign kwamen JavaScript Arrays reeds aan bod.

Een JavaScript Array wordt gebruikt om meerdere waardes toe te kennen aan één enkele variable.

Een lege array aanmaken:
```javascript
const firstArray = [];
```

Een array aanmaken met waardes:
```javascript
const colors = ['green', 'blue', 'red'];
const years = [2000, 2001, 2002];
const mixed = [true, "tekst", 4];
```
Een array in JavaScript mag dus verschillende types bevatten (zie array mixed)

Het aantal elementen van een JavaScript array vraag je op via de property ```.length```
```javascript
const aantalElementen = myArray.length
```
Elementen in een array worden op basis van hun posities aangeduid, beginnend bij 0. Het eerste element staat dus op indexpositie 0.

Je kan Individuele element opvragen op basis van een index:
```javascript
const colors = ['green', 'blue', 'red'];

console.log(colors[0]); // output: “green”
console.log(colors[1]); // output: “blue”
console.log(colors[2]); // output: “red”
console.log(colors[3]); // output: undefined
```
 
## ES5 JavaScript Array functies
In het vak webdesign kwamen volgende JavaScript Array functies reeds aan bod

### pop()
De ```pop()``` functie verwijdert het laatste element van een array:
```javascript
const colors = ['green', 'blue', 'red'];
colors.pop();
console.log(colors); // output: ['green', 'blue'];
```

### push(e)
De ```push()``` functie voegt het element in de parameter toe op het einde van de array
```javascript
const colors = ['green', 'blue', 'red'];
colors.push('yellow');
console.log(colors); // output: ['green', 'blue', 'red', 'yellow'];
```

### unshift(e)
De ```unshift()``` functie voegt het element in de parameter toe aan het begin van de array
```javascript
const colors = ['green', 'blue', 'red'];
colors.unshift('yellow');
console.log(colors); // output: ['yellow', 'green', 'blue', 'red'];
```

### shift()
De ```shift()``` functie verwijdert het eerste element van een array:
```javascript
const colors = ['green', 'blue', 'red'];
colors.shift();
console.log(colors); // output: ['blue, 'red'];
```

### slice(i1, i2)
De slice() functie geeft een nieuwe array terug met de elementen vanop index i1 tot i2.
De slice() functie creërt een nieuwe array. Het verwijdert geen elementen uit de originele array.
```javascript
const colors = ['green', 'blue', 'red', 'yellow', 'black'];
colors.slice(1, 3);
console.log(colors); // output: ['blue, 'red'];
```
 
## Uitbreiding ES5 JavaScript Array functies
De volgende JavaScript functies die je kan uitvoeren op een JavaScript array zullen voor de meeste nieuw zijn, maar je zult zien dat ze je productiviteit enorm zullen verhogen bij het werken met Arrays in JavaScript. Ze zijn onmisbaar bij het ontwikkelen van React Native applicaties

### forEach()
De ```forEach()``` functie helpt je bij het loopen over elementen in een array
```javascript
const colors = ['green', 'blue', 'red'];

colors.forEach(item => {
	console.log(item);   // output: 'green', 'blue', 'red'
});
```

### includes(e)
De ```includes()``` functie controleert ofdat het element meegegeven in de functie in de array zit
```javascript
const colors = ['green', 'blue', 'red'];

colors.includes('green'); // output: true
colors.includes('purple'); // output: false
```

### filter()
De ```filter()``` functie creërt een nieuwe array, enkel met de elementen die true opleveren in de opgegeven functie.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const filtered = numbers.filter(item => {
	return item > 3;
});

console.log(filtered); // output: [4, 5, 6]
console.log(numbers);  // output: [1, 2, 3, 4, 5, 6];
```

### map()
De ```map()``` functie creërt een nieuwe array door over de oorspronkelijke array te loopen en op ieder element de meegegeven functie aan te roepen

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const multiplyByTwo = numbers.map(num => num * 2);
console.log(multiplyByTwo); // output [2, 4, 6, 8, 10, 12]

console.log(numbers); // output: [1, 2, 3, 4, 5, 6]
```

### some()
De ```some()``` functie controleert of er minstens 1 element in de array aan de meegegeven conditie voldoet. Als dit het geval is, dan wordt true geretourneerd, anders false.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// minstens 1 element groter dan 4?
const largeNum = numbers.some(num => num > 4);
console.log(largeNum); // output: true

// minstens 1 element dat kleiner is of gelijk aan 0?
const smallNum = numbers.some(num => num <= 0);
console.log(smallNum); // output: false
```

### every()
De ```every()``` functie controleer of alle elementen in de array aan de meegegevn conditie voldoen.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// alle elementen zijn groter dan 4
const greaterFour = numbers.every(num => num > 4);
console.log(greaterFour); // output: false

// alle elementen zijn kleiner dan 10
const lessTen = numbers.every(num => num < 10);
console.log(lessTen); // output: true
```

### Array.of()
Deze functie creërt een array van alle argumenten die erin worden doorgegeven
```javascript
const numbers = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers); // output: [1, 2, 3, 4, 5, 6]
```
 
## ES6 Array functies

### find()
De ```find()``` functie itereert over de Array en retourneert het eerste element dat ervoor zorgt dat de gegeven callback-functie true retourneert. Nadat één element is gevonden, retourneert de functie onmiddellijk het gevonden element. Het is een efficiënte manier om alleen het eerste item te vinden dat aan een bepaalde voorwaarde voldoet.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const oddNumber = numbers.find(num => num % 2 == 1);
console.log(oddNumber); // output: 1
```

*Merk op*: Er is wel degelijk een verschil tussen de ES5 filter() en de ES6 find() functies. Filter() zal altijd een array retourneren van de gevonden elementen (zal meerdere matches retourneren), terwijl find() altijd slechts 1 match terug zal geven

### findIndex()
De ```findIndex()``` functie gedraagt zich hetzelfde als de find() functie, met dat verschil dat de index van het eerst gevonden element wordt geretourneerd ipv het element zelf

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const oddNumber = numbers.find(num => num % 2 == 1);
console.log(oddNumber); // output: 0
```

### for... of
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

for(let j of numbers) {
	console.log(j);
}
// 1
// 2
// 3
// 4
// 5
// 6
```


 
# Oefening