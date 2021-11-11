const company = "Oka Website";

function sum(a, b) {
    return a + b;
}

class Company {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.info(`Halooo ${name}, my name is ${this.name}, im your Manager`);
    }
}

// export { company as perusahaan, sum as total, Company as Perusahaan }; // melakukan alias ketika export

export { company, sum, Company }