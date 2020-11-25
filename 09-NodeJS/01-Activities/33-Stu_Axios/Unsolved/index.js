const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
let listArray = [];
let pf = 0;

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl)
      .then(function (response) {
        // handle success
        response.data.forEach(element => {
          listArray.push(element.name);
          pf++;
          console.log(element.name);
          fs.appendFile('repos.txt', element.name + "\n", (err) => {
            if (err) throw err;
          });
        });
        console.log('done this many' + pf);

      })
  });
