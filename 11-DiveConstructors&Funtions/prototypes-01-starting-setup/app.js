function Person(){
    this.age = 30;
    this.name = 'Ernesto';
    this.greet = function (){
        console.log('Hi there!');
    }
}

console.dir(Person);

const p = new Person();

console.log(p.__proto__ === Person.prototype);