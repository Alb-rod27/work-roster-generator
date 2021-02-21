const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


let teamArray = [];

init(); {
    addManager();
    addTeamMembers();
}

function addManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter manager id number.'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter manager email address.'
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter managers office number.'
    },
 ]).then(res => {
     console.log(res);
     const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber)
     teamArray.push(manager)
     addTeamMembers();
 });
};

init();

    