
// Variables
let name = "Oliver";
let age = 19;
let course = "BSCS";

// Arrays
let subjects = ["Automata", "Programming", "Software engineering"];
let grades = [88, 95, 90];
let numbers = [5, 12, 8, 20, 3];

// Loop
console.log("Subjects and Grades:");
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i] + " - " + grades[i]);
}

// Conditional 1
let total = 0;
for (let i = 0; i < grades.length; i++) {
  total = total + grades[i];
}
let average = total / grades.length;

if (average >= 75) {
  console.log("Pasar ka boy. Average: " + average);
} else {
  console.log("Bagsak ka boy. Average: " + average);
}

// Conditional 2 - edad
if (age >= 18) {
  console.log(name + " is an lagas na.");
} else {
  console.log(name + " is a minor de edad.");
}

// Loop 2 - finding large numnber
let i = 0;
let biggest = numbers[0];
while (i < numbers.length) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
  i++;
}
console.log("Biggest number: " + biggest);

// Conditional 3 - check number
console.log("Odd/Even check:");
for (let n of numbers) {
  if (n % 2 === 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}

console.log("Course: " + course);
for (let sub of subjects) {
  console.log("Taking subject: " + sub);
}
