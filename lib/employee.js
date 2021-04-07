const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        var getNameQuestion = {
            type: 'input',
            name: 'employeeName',
            message: 'WHat is your name?',
          };
          
    }

    getId(){

    }

    getEmail(){

    }
}

module.exports = Employee;
