// Polymorphism examples in JavaScript

// Base class with a default implementation
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

// Subclasses override `speak()`
class Dog extends Animal {
  speak() {
    console.log('Dog: Woof');
  }
}
class Cat extends Animal {
  speak() {
    console.log('Cat: Meow');
  }
}

// A subclass that calls the parent implementation then adds behavior
class Bird extends Animal {
  speak() {
    super.speak();
    console.log('Bird: Tweet');
  }
}

// Polymorphism via inheritance
const animals = [new Dog(), new Cat(), new Bird(), new Animal()];
animals.forEach(a => a.speak());

console.log('--- Duck typing (structural polymorphism) ---');

// Any object with a `speak` method can be used — no inheritance required
function makeSpeak(entity) {
  if (entity && typeof entity.speak === 'function') {
    entity.speak();
  } else {
    console.log('This object cannot speak');
  }
}

makeSpeak({ speak: () => console.log('Robot: Beep boop') });
makeSpeak(new Dog());
makeSpeak({});

console.log('--- End of examples ---');
