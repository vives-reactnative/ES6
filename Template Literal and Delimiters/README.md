# Template Literal and Delimiters

ES6 introduces an easier way to add interpolations which are evaluated automatically.

* <code>\`${ ... }\`</code> is used for rendering the variables.
* <code>\`</code> Backtick is used as delimiter.

```javascript
let user = 'Kevin';
console.log(`Hi ${user}!`); // Hi Kevin!

let numbers = [1, 2, 3, 4, 5];
console.log(`This array contains ${numbers.length} elements`);

const name = 'snickers';
const age = 2;
const sentence = `My dog is ${name} and age ${age * 5}.`
console.log(sentence);
```

# Opdrachten
Maak opdracht string-interpolation.js. Opdracht staat in commentaar
Het resultaat hiervan komt in de map /oplossingen. Hernoem het bestand niet

# Video op Lynda.com
> Video's op Lynda.com met extra uitleg

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:
* Template strings
