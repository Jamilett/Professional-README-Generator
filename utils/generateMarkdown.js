function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n  * [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
    This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, test, license, username, email } = data;

  return `# ${title}
  ${renderLicenseBadge(license)}
  
  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(license)}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ${renderLicenseSection(license)}

  ## Badges
  ${renderLicenseBadge(license)}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}).
`;
}

export default generateMarkdown;
