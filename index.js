// Initial array
let cats = ["Milo", "Otis", "Garfield"];

// beforeEach block to reset the array before each test
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

// Destructive Functions

function destructivelyAppendCat(name) {
  cats.push(name); // This will append the name to the cats array
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // This will add the name to the start of the cats array
}

function destructivelyRemoveLastCat() {
  cats.pop(); // This will remove the last element from the cats array
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // This will remove the first element from the cats array
}

// Non-destructive Functions

function appendCat(name) {
  return [...cats, name]; // This will return a new array with the name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // This will return a new array with the name added at the start
}

function removeLastCat() {
  return cats.slice(0, -1); // This will return a new array with the last element removed
}

function removeFirstCat() {
  return cats.slice(1); // This will return a new array with the first element removed
}
