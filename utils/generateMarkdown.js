// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      badge = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green?style=for-the-badge)]`;
      break;
    case 'GNU General Public License v3':
      badge = `[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-orange?style=for-the-badge)]`;
      break;
    case 'ISC License':
      badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)]`;
      break;
    case 'MIT License':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]`;
      break;
    // If there is no license, return an empty string  
    default:
      badge = '';
  }
  return badge;
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      link = `(https://opensource.org/licenses/apache-2.0)`;
      break;
    case 'GNU General Public License v3':
      link = `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'ISC License':
      link = `(https://opensource.org/licenses/ISC)`;
      break;
    case 'MIT License':
      link = `(https://opensource.org/licenses/MIT)`;
      break;
    // If there is no license, return an empty string  
    default:
      link = '';
  }
  return link;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  badge = renderLicenseBadge(license);
  link = renderLicenseLink(license);
  return badge + link;
}

// Create link reference for title of README
function titleLink(title) {
  return title.replace(/\s/g, '-').toLowerCase();
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the terms of the [${data.license}.]${renderLicenseLink(data.license)}

## How to Contribute
${data.contribution}

## Tests
${data.tests}

## Questions
Please send any questions to [my GitHub](https://github.com/${data.github}) or [my email.](${data.email})

[(Go back to top)](#${titleLink(data.title)})`;
}

module.exports = generateMarkdown;