export class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.info(`Halooo ${name}, my name is ${this.name}`);
    }
}