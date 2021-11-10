const company = "Oka Website";

function sum(first, second) {
    return first + second;
}

class Company {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.info(`Haloo ${name}, my name is ${this.name}`);
    }
}

export { company, sum, Company }