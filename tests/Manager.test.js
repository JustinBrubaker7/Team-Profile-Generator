const Manager = require('../lib/manager');



describe('Manager', () => {
    it('should return the managers name', ()=> {
        //Arrange
        const name = "Justin";
        //Act
        const manager = new Manager(name);
        //Asert
        expect(manager.name).toEqual('Justin')
    })
   
})

describe('Manager', () => {
    it('should return the managers ID', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        //Act
        const manager = new Manager(name, id);
        //Asert
        expect(manager.id).toEqual('001')
    })
   
})

describe('Manager', () => {

    it('should return the managers email', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        //Act
        const manager = new Manager(name, id, email);
        //Asert
        expect(manager.email).toEqual('email@email.com')
    })
   
})

describe('Manager', () => {

    it('should return managers office number', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        const officeNumber = "9513332222"
        //Act
        const manager = new Manager(name, id, email, officeNumber);
        //Asert
        expect(manager.officeNumber).toEqual('9513332222')
    })
   
})
