# Classes in ES6

ES6 introduces new class syntax. One thing to note here is that ES6 class is not a new object-oriented inheritance model. They just serve as a syntactical sugar over JavaScript's existing prototype-based inheritance.

Functions defined using the `static` keyword implement static/class functions on the class.

```javascript
class Task {
    constructor() {
        console.log("task instantiated!");
    }

    showId() {
        console.log(23);
    }

    static loadAll() {
        console.log("Loading all tasks..");
    }
}

console.log(typeof Task); // function
const task = new Task(); // "task instantiated!"
task.showId(); // 23
Task.loadAll(); // "Loading all tasks.."
```

**extends and super in classes**

Consider the following code:

```javascript
class Car {
    constructor() {
        console.log("Creating a new car");
    }
}

class Porsche extends Car {
    constructor() {
        super();
        console.log("Creating Porsche");
    }
}

let c = new Porsche();
// Creating a new car
// Creating Porsche
```

`extends` allow child class to inherit from parent class in ES6. It is important to note that the derived constructor must call `super()`.

Also, you can call parent class's method in child class's methods using `super.parentMethodName()`

[Read more about classes here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

A few things to keep in mind:

* Class declarations are not hoisted. You first need to declare your class and then access it, otherwise ReferenceError will be thrown.
* There is no need to use `function` keyword when defining functions inside a class definition.

## getters and setters
Getters and setters and one of the useful feature introduced in ES6. It will come in handy if you are using classes in JS.

Example without getters and setters:
```JavaScript
class People {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
}

let person = new People("Jon Snow");
console.log(person.getName()); // output: Jon Snow
person.setName("Dany");
console.log(person.getName()); // output: Dany
```

I think the above example is self-explanatory. We have two functions in class People that helps to set and get the name of the person.

Example with getters and setters

```JavaScript
class People {
    constructor(name) {
      this.name = name;
    }
    get Name() {
      return this.name;
    }
    set Name(name) {
      this.name = name;
    }
}
let person = new People("Jon Snow");
console.log(person.Name);   // output: Jon Snow
person.Name = "Dany";
console.log(person.Name);   // output: Dany
```
In the above example, you can see there are two functions inside class People with ‘get’ and ‘set’ properties. The ‘get’ property is used to get the value of the variable and ‘set’ property is used to set the value to the variable.

And you can see that getName function is called without parenthesis. And setName function is called without parenthesis and it’s just like assigning a value to the variable.

# Opdrachten
Bekijk aandachtig exampleClass.js

Maak opdracht classes.js. Opdracht staat in commentaar
Het resultaat hiervan komt in de map /oplossingen. Hernoem het bestand niet

# Video op Lynda.com
> Video's op Lynda.com met extra uitleg

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:
* ES6 Class Syntax
* Class inheritance
* Getters and setters
