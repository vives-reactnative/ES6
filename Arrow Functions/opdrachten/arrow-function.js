/* Turn `exampleFunction` into a one line "arrow function".
 * */
var exampleFunction = function() {
  console.log("🙌");
};

exampleFunction();

/* Turn `convertIntoMilliseconds` into a one line "arrow function".
 * */
var convertIntoMilliseconds = function(seconds) {
  return seconds * 1000;
};

console.log(convertIntoMilliseconds(5));

/* Write a new arrow functions with 3 arguments: id, name, isStudent
The third argument has a default value = true
Make sure the function returns an object with the id and the name filled in
Example of a possible return:
{
    id: 4,
    name: 'Thomas',
    student: true
}
*/

console.log(setNameIds(4, "Thomas"));
