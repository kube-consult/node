const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const files = ("dog.json", "cat.json", "goldfish.json", "hamster.json");

async function combineAnimals() {
  try {
    const hamster = await readFileAsync("hamster.json", "utf8");
    const dog = await readFileAsync("dog.json", "utf8");
    const cat = await readFileAsync("cat.json", "utf8");
    const goldfish = await readFileAsync("goldfish.json", "utf8")
    
    const total = await [hamster,dog,cat,goldfish].map(JSON.parse);
    console.log(total);
  } catch(err) {

  }
}

combineAnimals();
