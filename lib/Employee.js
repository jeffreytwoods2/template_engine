// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    };

    function getName(){};

    function getId(){};

    function getEmail(){};

    function getRole(id){
        return id
    };
};

module.exports = Employee
