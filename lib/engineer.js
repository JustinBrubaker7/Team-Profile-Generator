const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email);
        this.github = github;
        this.role = role;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer;