# Arrow Functions

## New syntax

Functions in ES6 have changed a bit. The syntax in particular.

```javascript
// Old Syntax
function oldOne() {
  console.log("Hello World..!");
}
// New Syntax
const newOne = () => {
  console.log("Hello World..!");
};
```

Arrow functions are a short-hand notation for writing functions in ES6. The arrow function definition consists of a parameter list `( ... )`, followed by the `=>` marker and a function body. For single-argument functions, the parentheses may be omitted.

```javascript
// Classical Function Expression
function addition(a, b) {
  return a + b;
}

// Implementation with arrow function
const addition = (a, b) => a + b;

// With single argument, no parentheses required
const add5 = a => 5 + a;
```

Note that in the above example, the `addition` arrow function is implemented with "concise body" which does not need an explicit return statement. Note the omitted `{ }` after the `=>`.

Here is an example with the usual "block body." Including the curly brace wrappers.

```javascript
const arr = ["apple", "banana", "orange"];

const breakfast = arr.map(fruit => {
  return fruit + "s";
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']
```

## Default Parameters

ES6 allows you to set default parameters in function definitions. Here is a simple illustration.

```javascript
const getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850
getFinalPrice(500, 0.3); // 650
```

## A few things to keep in mind:

- Rebind the value of `this`
- Delete the word function and use an fat arrow.
- If you have one parameter you don't have to use ()
- Explicit return; if you write the return keyword
- Implicit return; remove curly brackets it will assume you want to implicit return
- Use `const` to declare an arrow function

# Opdrachten

Bekijk step-by-step.js hoe in iedere stap een old-JavaScript-style functie wordt omgezet naar een arrow-functie. Zorg dat je iedere stap begrijpt.

Maak opdracht `arrow-function.js`. Opdracht staat in commentaar in de file.
Het resultaat hiervan komt in de map `/oplossingen`. Hernoem de bestanden niet

# Video op Lynda.com

> Optioneel video op Lynda.com met extra uitleg

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:

- Arrow functions
- Default function parameters
