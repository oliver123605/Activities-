// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// Dog subclass
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says: aww aww`);
    }
}

const myDog = new Dog("buddy");
myDog.eat();
myDog.bark();

// Cat subclass
class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    meow() {
        console.log(`${this.name} the ${this.breed} says : meow!`);
    }
}

const mycat = new Cat("wiskers", "siamese");
mycat.eat();
mycat.meow();

// Duck subclass
class Duck extends Animal {
    peck() {
        console.log(`${this.name} is pecking at breadcrumbs.`);
    }
}

const myduck = new Duck("donald");
myduck.eat();
myduck.peck();