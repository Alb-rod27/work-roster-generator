const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

inquirer
  .prompt({
      type: 'text',
      name: 'name',
      message: "What is the employee's name?"
  })
  .then(({ name }) => {
      this.employee = new Employee(name);

  });
