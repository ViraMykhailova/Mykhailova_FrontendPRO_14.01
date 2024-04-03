'use strict'
class Student {
    constructor(name,surname,year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.grades = [];
        this.presence = new Array(25).fill(undefined);
    }
    addGrade(grade){
        this.grades.push(grade);
    }
    getStudentAge () {
        const currentYear = new Date ().getFullYear();
        return currentYear - this.year;
    }
    isPresent () {
        const index = this.presence.indexOf(undefined);
        if(index !== -1) {
            this.presence[index] = true;
            console.log (`${this.name} ${this.surname} присутній на занятті`)
        } else {
            console.log('Графік відвідувань заповнений');
        }
    }
    isAbsent () {
        const index = this.presence.indexOf(undefined);
        if(index !== -1) {
            this.presence[index] = false;
            console.log (`${this.name} ${this.surname} відсутній на занятті`)
        } else {
            console.log('Графік відвідувань заповнений');
        }
    }
    averageGrade () {
        if(this.grades.length === 0){
            return 0;
        }
        const sum = this.grades.reduce((acc, cur) => acc + cur, 0);
        return sum/this.grades.length;
    }
    attendance() {
        const filledPresence = this.presence.filter(element => element !== undefined);
        if(this.presence.filter(element => element === true).length === 0) return 0;
        return this.presence.filter(element => element === true).length / filledPresence.length;
    }

    summary() {
        const avGrade = this.averageGrade();
        const attend = this.attendance();

        if(avGrade >= 90 && attend >= 0.9) {
            return 'Молодець';
        } else if (avGrade >= 90 || attend >= 0.9) {
            return 'Добре, але можна краще'
        } else {
            return 'Редиска!'
        }
    }
}

const student1 = new Student('Іван', 'Іванов', '2001');
const student2 = new Student('Антон','Пятниця','2000');

student1.addGrade(96);
student1.addGrade(88);
student1.addGrade(97);

student1.isPresent();
student1.isPresent();
student1.isAbsent();
student1.isPresent();
student1.isPresent();

console.log(student1);
console.log(`Вік студента: ${student1.getStudentAge()}`);
console.log(`Середній бал: ${student1.averageGrade()}`);
console.log(`Рейтинг відвідуваності: ${student1.attendance()}`);
console.log(student1.summary());

student2.addGrade(75);
student2.addGrade(88);
student2.addGrade(82);

student2.isPresent();
student2.isPresent();
student2.isAbsent();
student2.isPresent();
student2.isAbsent();

console.log(student2);
console.log(`Вік студента: ${student2.getStudentAge()}`);
console.log(`Середній бал: ${student2.averageGrade()}`);
console.log(`Рейтинг відвідуваності: ${student2.attendance()}`);
console.log(student2.summary());