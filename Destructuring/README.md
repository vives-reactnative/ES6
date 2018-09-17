# Array and Object Destructuring

Destructuring is a convenient way to extract multiple keys from an object or array simultaneously and assign the values to local variables.

```javascript
function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
let { x: a, y: b, z: c } = bar();
console.log(a, b, c); // 4 5 6
```

# Opdrachten
Maak opdrachten:
* destructure-array.js
* destructure-object.js
* destructure-deep-object.js

Het resultaat hiervan komt in de map /oplossingen. Hernoem de bestanden niet

# Video op Lynda.com
> Sterk aanbevolen video op Lynda.com met extra uitleg!

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:
* Destructuring assignment
