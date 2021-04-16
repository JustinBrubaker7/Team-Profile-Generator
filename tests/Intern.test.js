const Intern = require('../lib/intern');



describe('Intern', () => {
    it('should return the interns name', ()=> {
        //Arrange
        const name = "Justin";
        //Act
        const intern = new Intern(name);
        //Asert
        expect(intern.name).toEqual('Justin')
    })
   
})

describe('Intern', () => {
    it('should return the interns ID', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        //Act
        const intern = new Intern(name, id);
        //Asert
        expect(intern.id).toEqual('001')
    })
   
})

describe('Intern', () => {

    it('should return the interns email', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        //Act
        const intern = new Intern(name, id, email);
        //Asert
        expect(intern.email).toEqual('email@email.com')
    })
   
})

describe('Intern', () => {

    it('should return interns school', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        const school = "UCR"
        //Act
        const intern = new Intern(name, id, email, school);
        //Asert
        expect(intern.school).toEqual('UCR')
    })
   
})
