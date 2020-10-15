// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description

${data.description}

## Table of Contents


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

${data.questions}
  
`;
}

module.exports = generateMarkdown;