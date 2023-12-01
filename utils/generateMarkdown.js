// Function to render a license badge
function renderLicenseBadge(license) {
  if (license) {
    return ![License](https://img.shields.io/badge/license-${license}-brightgreen);
  } else {
    return '';
  }
}

// Function to render a license link
function renderLicenseLink(license) {
  if (license) {
    return [License](https://opensource.org/licenses/${license});
  } else {
    return '';
  }
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license ? '- [License](#license)\n' : ''}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
