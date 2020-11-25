const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  var dogs = .filter(function(element) {
    if (element > 5){
      return true;
    }
  });



var largearray = originalArray.filter(function(element) {
  if (element > 5){
    return true;
  }
});
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});
