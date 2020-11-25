const fs = require("fs");
const util = require("util");

const waitForAsync = util.promisify(waitFor)

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });


  async function combineAnimals() {
    try {
      const hamster = await readFileAsync("hamster.json", "utf8");
      const dog = await readFileAsync("dog.json", "utf8");
    const cat = await readFileAsync("cat.json", "utf8");
    const goldfish = await readFileAsync("goldfish.json", "utf8");

    const animalJSON = [hamster, dog, cat, goldfish].map(JSON.parse);

    await writeFileAsync(
      "combined.json",
      JSON.stringify(animalJSON, null, 2),
      "utf8"
    );

