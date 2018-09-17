# Spread / Rest Operator

`...` operator is referred to as spread or rest operator, depending on how and where it is used.

When used with any iterable, it acts as to "spread" it into individual elements:

```javascript
function foo(x, y, z) {
    console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr); // 1 2 3
```

Spread is also great for shaping a new object from other object(s):

```javascript
const defaults = {avatar: 'placeholder.jpg', active: false}
const userData = {username: 'foo', avatar: 'bar.jpg'}

console.log({created: '2017-12-31', ...defaults, ...userData})
// {created: "2017-12-31", avatar: "bar.jpg", active: false, username: "foo"}
```

New arrays can also be shaped expressively:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
console.log([...arr1, 4, 5, 6, ...arr2]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The other common usage of `...` is gathering all arguments together into an array. This is referred as "rest" operator.

```javascript
function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

# Video op Lynda.com
> Video's op Lynda.com met extra uitleg

Playlist: https://www.lynda.com/SharedPlaylist/b8d44f1e7efb423585c9f30dcc3902fa

Video:
* Spread operators
