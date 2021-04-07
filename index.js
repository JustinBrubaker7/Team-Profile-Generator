const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');


var defaultQuestion = {
    type: 'list',
    name: 'direction',
    message: 'Are you the Manager?',
    choices: ['Yes', 'No'],
  };

  function main() {
    console.log('Welcom to the Team Generator');
    areYouTheManger();
  }
  
  function areYouTheManger() {
    inquirer.prompt(defaultQuestion).then((answers) => {
      if (answers.direction === 'Yes') {
        console.log('OK, Welcome. We are going to set up your team.');
        managerInfo();
      } else {
        console.log('Only the manager can set up a team. Try again');
        areYouTheManger();
      }
    });
  }
  
  function managerInfo() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'employeeName',
        message: 'What is your name?',
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email?',
        }
]).then((answers) => {
      var direction = answers.employeeName;
      console.log(direction)
    });
  }
  
 
  
  main();










      //   if (direction === 'Forward') {
    //     console.log('You attempt to fight the wolf');
    //     console.log(
    //       'Theres a stick and some stones lying around you could use as a weapon'
    //     );
    //     encounter2b();
    //   } else if (direction === 'Right') {
    //     console.log('You befriend the dwarf');
    //     console.log('He helps you kill the wolf. You can now move forward');
    //     encounter2a();
    //   } else {
    //     console.log('You cannot go that way');
    //     encounter1();
    //   }