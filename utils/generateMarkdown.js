const licenses = {
  MIT: "![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  GPLv2: '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
  GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
  BSD3: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
  Apache: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
}

// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
${licenses[response.license]}
##Description

${response.description}

##Table of Contents: 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Test](#test)
* [Questions](#questions)

##Installation

${response.install}

##Usage 

${response.uses}

##License

This application is using the ${response.license} license.

##Contribute

${response.contribute}

##Test

${response.test}

##Questions

Author's GitHub profile (https://github.com/${response.github}).
Author's email: ${response.email}
`;
}

module.exports = {
  generateMarkdown
}
