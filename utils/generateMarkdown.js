// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ![Static Badge](https://img.shields.io/badge/License-grey?label=${answers.license}&labelColor=red)
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
  This application is covered under the
  ![Static Badge](https://img.shields.io/badge/License-grey?label=${answers.license}&labelColor=red)
  ## Contributing <a id="contributing"></a>
  ${answers.contributing}
  ## Tests <a id="tests"></a>
  ${answers.tests}
  ## Questions <a id="questions"></a>
  For any additional questions please feel free to reach me at:
  * https://github.com/${answers.github}
  * ${answers.email}
`;
}

module.exports = generateMarkdown;
