// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}



## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution Guide](#contribute)
4. [Tests](#test)
5. [Questions](#question)

## Installation <a name="installation"></a>

${data.installation}

## Usage <a name="usage"></a>

${data.usage}


## Contributing <a name="contribute"></a>

${data.contributions}

## Tests <a name="test"></a>

${data.tests}

## Questions <a name="question"></a>

${data.question}
  
`;
}

module.exports = generateMarkdown;