// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description <a id="description"></a>
  ${answers.description}
  ## Table of Contents <a id="tableOfContent"></a>
  * [Description](#description)
  * [Table of Contents](#tableOfContent)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation <a id="installation"></a>
  ${answers.installation}
  ## Usage <a id="usage"></a>
  ${answers.usage}
  ## License <a id="license"></a>
  ${answers.license}
  ## Contributing <a id="contributing"></a>
  ${answers.contributing}
  ## Tests <a id="tests"></a>
  ${answers.tests}
  ## Questions <a id="questions"></a>
  https://github.com/${answers.github}
  ${answers.email}
`;
}

module.exports = generateMarkdown;
