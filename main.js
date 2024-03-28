'use strict'
class Person {
    name;
    age;
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showPerson() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}
class Car {
    brand;
    model;
    year;
    registration;
    owner;
    constructor(brand, model, year, registration) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.registration = registration;
    }
    setOwner(person) {
        if(person.age >= 18) {
            this.owner = person;
        } else {
            console.log('This person has not reached 18 years old');
        }
    }
    showInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year},registration ${this.registration},`);
        this.owner.showPerson();
    }
}
const person1 = new Person('Nick', 18);
const person2 = new Person('Vira', 33);
const person3 = new Person('George', 42);

const car1 = new Car ('Ford', 'Escape', 2020, 7777);
const car2 = new Car ('Toyota', 'Camry', 2019, 1111);
const car3 = new Car ('Ford', 'Focus', 2012, 2222);

car1.setOwner(person2);
car2.setOwner(person3);
car3.setOwner(person1);

car1.showInfo();
car2.showInfo();
car3.showInfo();