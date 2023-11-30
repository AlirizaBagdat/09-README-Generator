// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    
    {//project title
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },

      {//description
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
      },
      {//installation
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {//usage
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {//contributing
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
      },
      {//tests
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
      },
      {//license
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
      },
      {//githubUsername
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {//email
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
