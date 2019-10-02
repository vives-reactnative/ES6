/* Use `const` so `x` can't change
 *
 * Consider renaming to const convention
 * */
var x = 1;
x = 2; // should raise a TypeError when changed to const

console.log(x); // returns 2 if nothing is changed
