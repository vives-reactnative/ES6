# Block Scoped Declarations

`let` allows you to create declarations which are bound to any block, called block scoping. Instead of using `var`, which provides function scope, it is recommended to use block scoped variables (`let` or `const`) in ES6.

```javascript
var a = 2;
{
  let a = 3;
  console.log(a); // 3
  let a = 5; // TypeError: Identifier 'a' has already been declared
}
console.log(a); // 2
```

Another form of block-scoped declaration is the `const`, which creates constants. In ES6, a `const` represents a constant reference to a value. In other words, `Object`'s and `Array`'s contents may change, only the re-assignment of the variable is prevented. Here's a simple example:

```javascript
{
  const b = 5;
  b = 10; // TypeError: Assignment to constant variable

  const arr = [5, 6];
  arr.push(7);
  console.log(arr); // [5,6,7]
  arr = 10; // TypeError: Assignment to constant variable
  arr[0] = 3; // value is mutable
  console.log(arr); // [3,6,7]
}
```

## A few things to keep in mind:

- Hoisting of `let` and `const` vary from the traditional hoisting of variables and functions. Both `let` and `const` are hoisted, but cannot be accessed before their declaration, because of Temporal Dead Zone
- `let` and `const` are scoped to the nearest enclosing block.
- When using const with fixed strings or values, CAPITAL_CASING might be appropriate (ex: `const PI = 3.14`)
- `const` has to be defined with its declaration.
- Always use `const` over `let`, unless you plan on re-assigning the variable. `var` shouldn't be used.
- Curly brackets `{}` are gatekeepers for your variables.

## Temporal Dead Zone

- With `var` variables you can access them before they are defined but you can't access the value.
- Temporal Dead Zone: You can't access a variable before it's defined.

# Opdrachten

Bekijk volgende 2 kleine opdrachten, voer ze uit zonder aanpassingen te doen en pas ze daarna aan zoals beschreven in commentaar in de oefeningen.
Het resultaat hiervan komt in de map /oplossingen. Hernoem de bestanden niet

- const.js
- var.js

Bekijk en voer ook volgend JavaScript bestand uit. Zorg ervoor dat je kan uitleggen wat er verkeerd loopt.

- examples.js

# Video op Lynda.com

> Optioneel video op Lynda.com met extra uitleg

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:

- Let keyword
- Const keyword
