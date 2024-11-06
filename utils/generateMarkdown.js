import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, test, license, username, email } = data;

  return `# ${title}
  ${renderLicenseBadge(data.license)}
   ## Description
   ${description}
   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [License](#license)
   
   ## Installation
   ${installation}
   ## Usage
   ${usage}
   ## Contributing
   ${contribution}
   ## Tests
   ${test}
   ## License
   ${renderLicenseSection(license)}
   ${renderLicenseLink(license)}
   ## Badges
   ${renderLicenseBadge(license)}
`;
}

export default generateMarkdown;
