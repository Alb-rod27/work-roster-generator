const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const members = [];

function start() {
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
 ])
.then(function (data) {
    const managerName = data.managerName
    const managerId = data.managerId
    const managerEmail = data.managerEmail
    const managerOfficeNumber = data.managerOfficeNumber
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    members.push(manager)
    addTeamMembers();
  });
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add additional team members?',
            choices: ['Add Engineer', 'Add Intern', 'No, completed'],
            name: 'addMemberData'
        }
    ])
    .then(function (data) {
        switch (data.addMemberData) {
            case 'Add Engineer':
                addEngineer();
            break;

            case 'Add Intern':
                addIntern();
            break;

            case 'No, completed':
                compileTeam();
                console.log(members)
            break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Engineer's name."
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter Enigeer's name."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Engineer's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's GitHub username."
        }
    ])
    .then(function (data) {
        const name = data.name
        const id =  data.id
        const email = data.email
        const github = data.github
        const member = new Engineer(name, id, email, github)
        members.push(member)
        addMembers()
    });
}





start();
//init();

    