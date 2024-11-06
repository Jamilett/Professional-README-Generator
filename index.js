// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions for your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What are the usage instructions for your project?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines for your project?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What are the test instructions for your project?',
    name: 'test',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const { title, description, installation, usage, contribution, test } = response;
    console.log(response);
  });
}

// Function call to initialize app
init();