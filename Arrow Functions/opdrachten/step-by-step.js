const names = ['Chuck', 'Brisket', 'Shank'];

const fullNames = names.map(function(name) {
  return `${name} bos`
});
console.log(fullNames);

const fullNames2 = names.map((name) => {
  return `${name} bos`
});
console.log(fullNames2);

const fullNames3 = names.map(name => {
  return `${name} bos`
});
console.log(fullNames3);

const fullNames4 = names.map(name =>`${name} bos`);
console.log(fullNames4);
