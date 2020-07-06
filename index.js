const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
// array of questions for user
const userQuestions = require('./utils/questions');
// markdown template
const createReadMe = require('./utils/generateMarkdown');




// function to write README file
const writeAsync = util.promisify(fs.writeFile)

// function to initialize program
function init() {
    inquirer.prompt(userQuestions.questions)
    .then(response => (createReadMe.generateMarkdown(response)))
    .then(string => writeAsync('README.md', string))
    .catch(err => err)
}

// function call to initialize program
init();
