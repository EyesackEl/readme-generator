// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    ['What is the projects title?','title'],
    ['Please enter a description for your project','description'],
    ['Please enter the installation instructions for your project','installation'],
    ['Please enter the usage information for your project','usage'],
    ['Please enter the contribution guidelines for your project','contributing'],
    ['Please enter test instructions for your project','test'],
    ['Please choose a License for your project','license',[
        'Apache',
        'BSD 2-Clause',
        'Do What the Fuck You Want to Public',
        'Unlicense',
        'N/A'
        ]
    ]
];
// TODO: Create a function to write README file
function writeToFile(fileName) { 
    fs.appendFile(fileName, '', (err) =>
        err ? console.error(err) : console.log('\n\tFile Updated\n')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
        {
        type: 'input',
        message: questions[0][0],
        name: questions[0][1]
        },
        {
        type: 'input',
        message: questions[1][0],
        name: questions[1][1]
        },
        {
        type: 'input',
        message: questions[2][0],
        name: questions[2][1]
        },
        {
        type: 'input',
        message: questions[3][0],
        name: questions[3][1]
        },
        {
        type: 'input',
        message: questions[4][0],
        name: questions[4][1]
        },
        {
        type: 'input',
        message: questions[5][0],
        name: questions[5][1]
        },
        {
        type: 'list',
        message: questions[6][0],
        name: questions[6][1],
        choices: questions[6][2] 
        }
    ])
    .then(response => {
        if (response.title.replaceAll(' ','') === '') {
            console.error('Please enter a title for your project');
            return;
        }
        console.log(response);
        const fileName = 'README.md';   
        writeToFile(fileName);
        generateMarkdown(response);
    })
    .then()
};

// Function call to initialize app
init();
