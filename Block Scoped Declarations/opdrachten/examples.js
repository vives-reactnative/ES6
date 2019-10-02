/*
 * Examine the output of the following 4 functions
 * Make sure you can explain what went wrong
 */

function basic() {
  // what is returned?
  let x = 100;
  const y = 200;
  return { x: x, y: y };
}
console.log("Basic", basic());

function immutable() {
  // what is returned?
  const object = { a: "b" };
  const array = [1, 2, 3, 4];

  object.a = "q";
  array[2] = 30;
  array.push(5);
  return { object: object, array: array };
}
console.log("immutable", immutable());

function immutableReference() {
  // what is returned?
  const object = { a: "b" };
  object = { a: "q" };
  return object;
}
console.log("immutableReference", immutableReference());

function temporalDeadZone() {
  console.log(myVar);
  console.log(myLet);
  console.log(myConst);

  var myVar = "var";
  let myLet = "let";
  const myConst = "const";
  return { myVar: myVar, myLet: myLet, myConst: myConst };
}
console.log(temporalDeadZone());
