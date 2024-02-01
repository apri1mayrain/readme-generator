// Include packages needed for this application:
// Inquirer NPM
const inquirer = require('inquirer');
// File system built-in module
const fs = require('fs');
// Script to generate markdown file
const generate = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        // Title - Input
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        // Description - Editor
        name: 'description',
        type: 'editor',
        message: 'What is the description of your project?',
    },
    {
        // Installation - Editor
        name: 'installation',
        type: 'editor',
        message: 'What are the steps required to install your project?',
    },
    {
        // Usage - Input
        name: 'usage',
        type: 'input',
        message: 'How can your project be used?',
    },
    {
        // How to Contribute - Input
        name: 'contribution',
        type: 'input',
        message: 'How can others contribute to your project?',
    },
    {
        // Tests - Editor
        name: 'tests',
        type: 'editor',
        message: 'What are the test instructions for your project?',
    },
    {
        // License - List
        name: 'license',
        type: 'list',
        message: 'Please select a license for your project: ',
        choices: ['Apache License 2.0', 'GNU General Public License v3', 'ISC License', 'MIT License', 'Other'],
        
    },
    {
        // GitHub - Input
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?',
    },
    {
        // Email - Input
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
    },
];

// Initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile('README.md', generate(data)));
}

// Create output folder and write README file
function writeToFile(fileName, data) {
    const folder = './output/';
      if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  
    console.log('Generating your README...');
    const path = folder + fileName;
  
    fs.writeFile(path, data, error => {
      if (error) {
        console.error(
          `There was an error creating the README file: ${error.message}`
        );
        return;
      }
  
      console.log('Success! Your README has been generated to the output folder.');
      return;
    });
  }

// Call to initialize app
init();