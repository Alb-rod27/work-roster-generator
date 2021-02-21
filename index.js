const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');


function addManager()  {
inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: "What is the managers name?"
})
.then(({ name }) => {
    this.employee = new Employee(name);
    
});

inquirer
.prompt({
    type: 'input',
    name: 'id',
    message: 'Please enter employee id number.'
})
    .then(({ id }) => {
        this.employee = new Employee(id);
    })

inquirer
.prompt({
    type: 'input',
    name: 'email',
    message: 'Please enter employee email address.'
})

