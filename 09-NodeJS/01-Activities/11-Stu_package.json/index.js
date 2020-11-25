var inquirer = require("inquirer");
const YAML = require('yaml')
const fs = require('fs');
var obj = {}

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What languges do you know.",
            name: "password"
        },
        {
            type: 'list',
                name: 'comms',
                    message: 'what is your preffered comms?',
                        choices: ['text', 'email',],
      }
    ])
    .then(function(response) {
        obj.pass = response.password;
        obj.usermname = response.username;
        obj.comms = response.comms
        console.info('Answer:', response.comms);
        //var myJSON = JSON.stringify(obj);
        var myYAML = YAML.stringify(obj);
        fs.appendFile('message.txt', myYAML, (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });


    });


