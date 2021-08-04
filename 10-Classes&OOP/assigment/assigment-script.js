class Course {

    set Price(value){
        this.price = value > 0 ? value : 0;
    }

    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculateTimePriceRatio() {
        return (this.price/this.length).toFixed(2);
    }

    render() {
        //const priceTime = this.calculateTimePriceRatio();
        return `Course title: ${this.title}, price ${this.price}, length: ${this.length}, time-price ratio: ${this.calculateTimePriceRatio()}.`;
    }
}

class PracticalCourse extends Course{

    constructor(title, length, price, numOfExercises){
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course{
    
    publish(){
        console.log(`Theory from the ${this.title} course sucks...`);
    }
}

const coursesObj = [
    c1 = new Course('JS',70,125),
    c2 = new Course('Vue.js',50,105),
    c3 = new Course('React',60,105)
]

for (const cour of coursesObj) {
    console.log(cour.render());    
}

const nc1 = new PracticalCourse('Electronics Lab', 40, 150, 19);


console.log(nc1);

nc1.Price = -51;

console.log(nc1);