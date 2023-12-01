const inquirer = require('inquirer');   // <= Packages required
const fs = require('fs');

    
const questions = [  // <= Array of questions for user input

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

 //Function to write README file
function writeToFile(fileName, data) {    
    fs.writeFileSync(fileName, data, 'utf-8');
    console.log('File', `${fileName}`, 'has been created successfully!');
  }
  
  // Function to initialize app
  async function init() {    
    try {
      const answers = await inquirer.prompt(questions);
      const readmeContent = generateReadmeContent(answers);
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  //Function to generate README content based on user answers
  function generateReadmeContent(answers) {  
    return `
    # ${answers.projectTitle}

    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## License
    This project is licensed under the ${answers.license} license.
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    For additional questions, please contact ${answers.email}.
    GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  `;
  }
  
    init();  