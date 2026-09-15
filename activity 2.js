
let schoolName = "NwSsu";
let passingGrade = 75;
let maxStudents = 30;

let sections = ["BSCS3A", "BSCS3B", "BSCS3C"];
let subjectsOffered = ["Automata", "Programming", "Software engineering"];

// Objects
let schoolInfo = {
  name: Nwssu,
  year: 2026
};

let scoreRules = {
  passing: 75,
  honor: 90
};

// parent classd
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return "Hi, I am " + this.name;
  }

  getInfo() {
    return this.name + " - " + this.age + " years old";
  }
}

// child
class Student extends Person {
  constructor(name, age, section) {
    super(name, age);
    this.section = section;
    this.grades = []; // array
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    return sum / this.grades.length;
  }

  // polymorphism
  introduce() {
    return "Hi, I am " + this.name + " from " + this.section;
  }
}

// Class 3
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return "Hello, I am " + this.name + ", teacher of " + this.subject;
  }
}

// Class 4
class Classroom {
  constructor(roomName, teacher) {
    this.roomName = roomName;
    this.teacher = teacher;
    this.students = []; // array
  }

  enroll(student) {
    if (this.students.length < maxStudents) {
      this.students.push(student);
    } else {
      console.log("Classroom is full");
    }
  }

  showRoster() {
    console.log("Room: " + this.roomName);
    console.log(this.teacher.introduce());

    for (let student of this.students) {
      let average = student.getAverage();
      let remark = "";

      if (average >= scoreRules.honor) {
        remark = "With Honors";
      } else if (average >= scoreRules.passing) {
        remark = "Passed";
      } else {
        remark = "Failed";
      }

      console.log(student.introduce() + " | Average: " + average + " (" + remark + ")");
    }
  }
}

// Objects
let teacher1 = new Teacher("Yuri Ortiz", 46, "Programming");
let student1 = new Student("oliver", 19, "BSCS3B");
let student2 = new Student("Alpez", 20, "BSCS3B");
let student3 = new Student("Rene baterbonia", 19, "BSCS3B");

student1.addGrade(95);
student1.addGrade(92);

student2.addGrade(80);
student2.addGrade(70);

student3.addGrade(60);
student3.addGrade(55);

let room1 = new Classroom("Room 401", teacher1);
room1.enroll(student1);
room1.enroll(student2);
room1.enroll(student3);


console.log("Available Sections:");
for (let i = 0; i < sections.length; i++) {
  console.log(sections[i]);
}

console.log("Subjects Offered:");
let j = 0;
while (j < subjectsOffered.length) {
  console.log(subjectsOffered[j]);
  j++;
}

let checkSection = "BSCS3B";
let found = false;
for (let sec of sections) {
  if (sec === checkSection) {
    found = true;
  }
}

if (found) {
  console.log(checkSection + " is a valid section");
} else {
  console.log(checkSection + " was not found");
}

room1.showRoster();
