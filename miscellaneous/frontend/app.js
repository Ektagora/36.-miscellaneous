// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 89,
//     getMarks: function(){
//         return this.marks;
//     },
// };


// const stu2 = {
//     name: "eve",
//     age: 21,
//     marks: 82,
//     getMarks: function(){
//         return this.marks;
//     },
// };


// const stu3 = {
//     name: "casey",
//     age: 23,
//     marks: 81,
//     getMarks: function(){
//         return this.marks;
//     },
// };


// factory functions -- a function that creates objects
function personMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`hi my name is ${this.name}`);
        }
    };

    return person;
}


// // constructors - doesn't return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     confirm.log(`hi! my name is ${this.name}`);
// }

// let p1 = new Person("adm" , 25);
// let p2 = new Person("eve",21);



// classes - template for creating objects
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`hi! my name is ${this.name}`);
    }
}

let p1 = new Person("adm" , 25);
let p2 = new Person("eve",21);


// inheritance
class Student extends Person {
    constructor(name, age, marks){
        super(name,age);
        this.marks=marks;
    }

    greet(){return "hello!";}
}

let s1 = new Student("adam", 25,98);