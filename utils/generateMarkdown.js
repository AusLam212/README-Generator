// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}



## Description

${data.description}

## Table of Contents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Installation

${data.installation}

## Usage

${data.usage}

## License

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

${data.question}
  
`;
}

module.exports = generateMarkdown;