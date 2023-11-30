// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

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

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     // Join the current working directory with the 'Output' directory
//     const outputDir = path.join(process.cwd(), 'Output');

//     // Create the 'Output' directory (will not throw an error if it already exists)
//     fs.mkdirSync(outputDir, { recursive: true });

//     // Write the data to the specified file inside the 'Output' directory
//     fs.writeFileSync(path.join(outputDir, fileName), data);
// }
// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions, (answers) => {
//         // Generate README content based on user answers
//         const readmeContent = generateReadme(answers);    
//         // Write README file
//         writeToFile('README02.md', readmeContent);    
//         console.log('README.md successfully generated!');
//     });
// }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const outputDir = path.join(process.cwd(), 'Output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("User Responses:", answers);
        console.log("Creating Professional README.md...");
        writeToFile("README.md", generateMarkdown((answers)));
    });
}

// Function call to initialize app
init();
// function generateReadme(answers) {
//     return `
//     # ${answers.projectTitle}
    
//     ## Description
//     ${answers.description}
    
//     ## Table of Contents
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [License](#license)
//     - [Contributing](#contributing)
//     - [Tests](#tests)
//     - [Questions](#questions)
    
//     ## Installation
//     ${answers.installation}
    
//     ## Usage
//     ${answers.usage}
    
//     ## License
//     This project is licensed under the ${answers.license} license.
    
//     ## Contributing
//     ${answers.contributing}
    
//     ## Tests
//     ${answers.tests}
    
//     ## Questions
//     For additional questions, please contact ${answers.email}.
//     GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})]
//     `;
// }    

// Function call to initialize app
