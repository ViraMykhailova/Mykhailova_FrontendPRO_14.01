'use strict'
class Human {
    name;
    gender;
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}
class Apartment {
    residents = [];
    addNewResident(human) {
        this.residents.push(human);
    }
}
class Building {
    apartments = [];
    maxApartments;
    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }
    addNewApartment (apartment) {
        if(this.apartments.length === this.maxApartments) {
            console.log('You have exceed the maximum of apartments');
        } else {
            this.apartments.push(apartment);
        }
    }
}

const person1 = new Human('Alex', 'Male');
const person2 = new Human('Lisa', 'female');
const person3 = new Human('Jack', 'Male');
const person4 = new Human('Anna', 'Female');

const apartment1 = new Apartment();
apartment1.addNewResident(person1);
apartment1.addNewResident(person2);

const apartment2 = new Apartment();
apartment2.addNewResident(person3);
apartment2.addNewResident(person4);

const building = new Building(4);
building.addNewApartment(apartment1);
building.addNewApartment(apartment2);

console.log(building);