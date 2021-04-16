const Employee = require('../lib/employee');



describe('Employee', () => {
    it('should return employees name', ()=> {
        //Arrange
        const name = "Justin";
        //Act
        const employee = new Employee(name);
        //Asert
        expect(employee.name).toEqual('Justin')
    })
   
})

describe('Employee', () => {
    it('should return employees ID', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        //Act
        const employee = new Employee(name, id);
        //Asert
        expect(employee.id).toEqual('001')
    })
   
})

describe('Employee', () => {

    it('should return employees email', ()=> {
        //Arrange
        const id = "001";
        const name = "Justin";
        const email = "email@email.com";
        //Act
        const employee = new Employee(name, id, email);
        //Asert
        expect(employee.email).toEqual('email@email.com')
    })
   
})

