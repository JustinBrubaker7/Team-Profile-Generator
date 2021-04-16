const Engineer = require('../lib/engineer');



describe('Engineer', () => {
    it('should return the engineers name', ()=> {
        //Arrange
        const name = "Justin";
        //Act
        const engineer = new Engineer(name);
        //Asert
        expect(engineer.name).toEqual('Justin')
    })
   
})

describe('Engineer', () => {
    it('should return the engineers ID', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        //Act
        const engineer = new Engineer(name, id);
        //Asert
        expect(engineer.id).toEqual('001')
    })
   
})

describe('Engineer', () => {

    it('should return the engineers email', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        //Act
        const engineer = new Engineer(name, id, email);
        //Asert
        expect(engineer.email).toEqual('email@email.com')
    })
   
})

describe('Engineer', () => {

    it('should return engineers Github profile', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        const github = "justinbrubaker7"
        //Act
        const engineer = new Engineer(name, id, email, github);
        //Asert
        expect(engineer.github).toEqual('justinbrubaker7')
    })
   
})
