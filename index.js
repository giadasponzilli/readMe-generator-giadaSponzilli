const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
  type: 'input',
  name: 'title',
  message:'Insert a title for your ReadMe',
},
{
  type: 'input',
  name: 'description',
  message:'Insert a description',
},
{
  type: 'input',
  name: 'installation',
  message:'Insert the installation instructions',
},
{
  type: 'input',
  name: 'usage',
  message:'Insert the usage information',
},
{
  type: 'list',
  name: 'license',
  message:'Which license are you using?',
  choices: [
    'MIT',
    'GNU',
    'Microsoft Public License',
    'Apache license 2.0',
    'ISC',
    'The Unlicense'
  ]
},
{
  type: 'input',
  name: 'contributing',
  message:'Insert the contribution guidelines',
},
{
  type: 'input',
  name: 'tests',
  message:'Insert the test instructions',
},
{
  type: 'input',
  name: 'github',
  message:'Insert your github username',
},
{
  type: 'input',
  name: 'email',
  message:'Insert your email address',
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
