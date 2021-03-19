const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
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
        name: 'officeNum',
        message: 'Please enter managers office number.'
    },
 ])
.then(function (data) {
    const managerName = data.managerName
    const managerId = data.managerId
    const managerEmail = data.managerEmail
    const officeNum = data.officeNum
    const member = new Manager(managerName, managerId, managerEmail, officeNum)
    members.push(member)
    addTeamMembers();
  });
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add additional team members?',
            choices: ['Add Engineer', 'Add Intern', 'All Done!'],
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

            case 'All Done!':
                compileTeam();
                console.log(members)
            break;
        }
    });
}

// Engineer section
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
            message: "Please enter Engineer's Id."
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
        addTeamMembers()
    });
};

// Intern section
function addIntern() {
    inquirer.prompt([
        {   
            type: 'text',
            name: 'name',
            message: "Intern's name:"
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter Intern's id number:"
        },
        {
            type: 'text',
            name: 'email',
            message: "Intern's email address:"
        },
        {
            type: 'text',
            name: 'school',
            message: "Intern's school:"
        }
    ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const member = new Intern(name, id, email, school)
        members.push(member)
        addTeamMembers()
    });
};

//html 
function compileTeam(){
    const htmlArray = []
    const htmlBeginning = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
    <title>Work-Roster-Generator</title>
</head>
<body>
    <nav class="navbar navbar-dark">
      <span class="w-100 text-center bg-color:red;" style="font-size: 40px">Work Roster</span>
    </nav>
    <br/>
    <div class="row justify-content" style="grid-row-gap: 25px">
    `
htmlArray.push(htmlBeginning);

for (let i = 0; i < members.length; i++) {
  let object = `
    <div class="col-4 d-flex justify-content-center">
      <div class="card" style="width: 40rem;">
        <div class="card-header text-center bold">
          <h4 class="bg-primary text-white fs-3 fw-bold text-center">
            ${members[i].name}
          </h4>
     <h6>
     ${members[i].getRole()} <span>`

if(members[i].getRole() === "Manager") {
    object += `
    <i class="fas fa-mug-hot"></i> </span>
    `
} else if(members[i].getRole() === "Engineer") {
    object += `
    <i class="fas fa-glasses"></i> </span>
    `
} else if (members[i].getRole() === "Intern") {
    object += `
    <i class="fas fa-user-graduate"></i> </span>`
}

object += `
      </h6>
    </div>
<ul class="list-group-flush">
  <li class="list-group-item">ID: ${members[i].id}</li>
  <li class="list-group-item">Email: <a href="mailto:${members[i].email}">${members[i].email}</a></li>
`
if (members[i].officeNum) {
    object += `
    <li class="list-group-item">Office Number: ${members[i].officeNum}</li>
    `
}
if (members[i].github) {
object += `
  <li class="list-group-item">GitHub: <a href="https://github.com/${members[i].github}">${members[i].github}</a></li>
`
}  
if (members[i].school) {
   object += `
      <li class="list-group-item">Current School: ${members[i].school}</li>
    `
}
object += `
    </ul>
      </div>
    </div>
  </div>
`
htmlArray.push(object)
}

const htmlEnd = `
  </div>
</body>
</html>
`

htmlArray.push(htmlEnd);

fs.writeFile(`./dist/index.html`, htmlArray.join(""), function (err) {

 })
}

start();

