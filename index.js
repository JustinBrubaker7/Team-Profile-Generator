const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


function startApp(){
  getManager();
}

function getManager(){
  inquirer.prompt([
  {
    type: "Input",
    name: "managerName",
    message: "What is the manager's name?"
  },
  {
    type: "Input",
    name: "managerEmail",
    message: "What is the manager's email?"
  },
  {
    type: "Input",
    name: "managerId",
    message: "What is the manager's ID number?"
  },
  {
    type: "Input",
    name: "managerpPhone",
    message: "What is the manager's office phone number?"
  },
]).then((answers) => {
  let manager = new Manager(answers.managerName, answers.managerEmail, answers.managerId,answers.managerpPhone)
  console.log(manager)
  nextEmployee()
})
}

nextEmployee(){
  
}





startApp()