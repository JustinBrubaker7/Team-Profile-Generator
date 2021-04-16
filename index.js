const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./utils/generateHtml.js');

teamMembers = [];
//starts application
function startApp(){
  getManager();
}

//runs the promtps to get manager information
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
  teamMembers.push(manager)
  nextEmployee()
})
}


//this funtion gives the options to select another employee or generate the page
function nextEmployee(){
  inquirer.prompt({
    type: "list",
    name: "nextEmployee",
    message: "Create your team!",
    choices: [
      "Intern",
      "Engineer",
      "No more employyes to add to the team"
    ]
  }).then((choice) => {    
  if(choice.nextEmployee === "Intern"){
    getIntern();
  } else if(choice.nextEmployee === "Engineer"){
    getEngineer();
  } else {
        const htmlPage = generateHTML(teamMembers);

        fs.writeFile('teams.html', htmlPage, (err) =>
          err ? console.log(err) : console.log('Successfully created teams page!')
        );

  }
  })
}


//this function creates the intern
function getIntern(){
  inquirer.prompt([
    {
      type: "Input",
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: "Input",
      name: "interEmail",
      message: "What is the intern's email?"
    },
    {
      type: "Input",
      name: "internId",
      message: "What is the intern's ID number?"
    },
    {
      type: "Input",
      name: "internSchool",
      message: "What is the intern school?"
    },
  ]).then((answers) => {
    let intern = new Intern(answers.internName, answers.interEmail, answers.internId,answers.internSchool)

    teamMembers.push(intern)
    console.log(teamMembers)
    nextEmployee()
  })
};

//this function creates the Engineer
function getEngineer(){
  inquirer.prompt([
    {
      type: "Input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },
    {
      type: "Input",
      name: "engineerEmail",
      message: "What is the engineer's email?"
    },
    {
      type: "Input",
      name: "engineerId",
      message: "What is the engineer's ID number?"
    },
    {
      type: "Input",
      name: "engineerGithub",
      message: "What is the engineers github username?"
    },
  ]).then((answers) => {
    let engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineeId,answers.engineerGithub)
    teamMembers.push(engineer)
    console.log(teamMembers)
    nextEmployee()

  })
};





startApp()