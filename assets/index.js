const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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



// function to initialize program
const promptUser = () =>
  inquirer.prompt(questions);

// function call to initialize program
promptUser()
  .then ((answers) => writeFileAsync ('../outputReadMe/README.md', generateMarkdown(answers)) )
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));