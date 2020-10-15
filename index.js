const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
}, ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("It worked!")
    })
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(response) {
            writeToFile("README.md", generateMarkdown(response));

        })
}

// function call to initialize program
init();