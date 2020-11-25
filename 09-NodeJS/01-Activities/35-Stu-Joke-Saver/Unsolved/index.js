const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {
    //console.log(res);
    appendFileAsync("jokes", res.data.joke + "\n").then(function() {
      console.log("Successfully wrote to dogs.json file");
    });

    //console.log(res.data);
  });
  readFileAsync("./jokes", "utf8").then(function(element) {
//    console.log(msg);
    console.log("this is in the file");
    console.log(element);
  })
  .catch(function(err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });








