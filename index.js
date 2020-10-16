const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [{
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What instructions do you have for installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "What usage information can you give?",
        name: "usage"
    },
    {
        type: "input",
        message: "What guidelines would you like to have for your users?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "tests"
    },
    {
        type: "input",
        messafe: "",
        name: "question"
    }

];

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