# Modules

Consider a scenario where parts of JavaScript code need to be reused. ES6 comes to your rescue with the concept of Modules.

Almost every language has a concept of modules — a way to include functionality declared in one file within another. Typically, a developer creates an encapsulated library of code responsible for handling related tasks. That library can be referenced by applications or other modules.

A module is nothing more than a chunk of JavaScript code written in a file. The functions or variables in a module are not available for use, unless the module file exports them.

## Export

Everything inside an ES6 module is private by default. Public variables, functions and classes are exposed using `export`

There are two kinds of exports: named exports (several per module) and default exports (one per module).

### Named exports

A module can export multiple things by prefixing their declarations with the keyword `export`. These exports are distinguished by their names and are called named exports.

```javascript
// lib.js
export const PI = 3.1415926;

export function sum(a, b) {
  console.log("sum");
  return a + b;
}

export function diff(a, b) {
  console.log("diff");
  return a - b;
}

// private function
function log(...msg) {
  console.log(...msg);
}
```

Alternatively, a single `export` statement can be used. For example:

```javascript
// lib.js
const PI = 3.1415926;

function sum(a, b) {
  console.log("sum");
  return a + b;
}

function diff(a, b) {
  console.log("diff");
  return a - b;
}

// private function
function log(...msg) {
  console.log(...msg);
}

export { PI, sum, diff };
```

### Default exports

Modules that only export single values are very popular in the Node.js community. But they are also common in frontend development where you often have constructors/classes for models, with one model per module. An ECMAScript 6 module can pick a default export, the most important exported value. Default exports are especially easy to import.

```javascript
// lib.js
const person = {
  name: "Jason",
  age: 22
};

export default person;
```

It's possible to have both named exports and a default export in a module

## Import

`import` is then used to pull items from a module into another script or module.
Multiple items can be imported at one time.

```javascript
// main.js
import { sum, diff } from "./lib.js";

console.log(sum(5, 2)); // 7
console.log(diff(5, 2)); // 3
```

In this case, `lib.js` is in the same folder as `main.js`. Absolute file references (starting with `/`), relative file references (starting `./` or `../`) or full URLs can be used.

Imports can be aliased to resolve naming collisions

```javascript
import { sum as addBoth, diff as difference } from "./lib.js";

console.log(addBoth(5, 2)); // 7
console.log(difference(5, 2)); // 3
```

## Import default

```javascript
import person from "./person.js";
// or
import jason from "./person.js";
```

# Opdrachten

Maak de opdracht

- modules

De files `person.js` en `vivesLib.js` in de map `/exports` zijn reeds aanwezig in de map `/oplossingen`. Mogelijk moet je ook iets aanpassen in 1 van beide files.

De rest van de opdracht vind je terug in de file `modules.js`

# Video op Lynda.com

Geen video over Modules op Lynda.com
