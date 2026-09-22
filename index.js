// --- Activity 1 ---
function activity1() {
    alert("Welcome to JavaScript!");
    console.log("This is my first JS program.");
}

// --- Activity 2 ---
function activity2() {
    let name = prompt("Enter your name:"); 
    let age = prompt("Enter your age:");         
    let isStudent = confirm("Are you a student?");

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is Student:", isStudent);

    console.log("My name is " + name + " I am " + age + " years old.");
    alert("Name: " + name + "\nAge: " + age + "\nIs Student: " + isStudent);
}

// --- Activity 3 ---
function activity3() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    console.log("Sum:", num1 + num2);
    console.log("Difference:", num1 - num2);
    console.log("Product:", num1 * num2);
    console.log("Quotient:", num1 / num2);
    alert("Sum: " + (num1 + num2) + "\nDifference: " + (num1 - num2) + "\nProduct: " + (num1 * num2) + "\nQuotient: " + (num1 / num2));
}

// --- Activity 4 ---
function activity4() {
    let userName = prompt("What is your name?");
    let favNumber = prompt("What is your favorite number?");

    alert("Hello " + userName + "! Your favorite number is " + favNumber);
}

// --- Activity 5 ---
function activity5() {
    let userAge = prompt("Please enter your age:");

    if (userAge >= 18) {
        console.log("You are eligible.");
        alert("You are eligible.");
    } else {
        console.log("You are not eligible.");
        alert("You are not eligible.");
    }
}

// --- Activity 6 ---
function activity6() {
    let limit = Number(prompt("Enter a number to loop up to:"));
    let output = "For Loop (1 to " + limit + "):\n";
    console.log("For Loop (1 to " + limit + "):");
    for (let i = 1; i <= limit; i++) {
        console.log(i);
        output += i + " ";
    }

    output += "\n\nWhile Loop (" + limit + " to 1):\n";
    console.log("While Loop (" + limit + " to 1):");
    let j = limit;
    while (j >= 1) {
        console.log(j);
        output += j + " ";
        j--;
    }
    alert(output);
}
// --- Activity 7 ---

let button = document.getElementById("myButton");
if (button) {
    button.addEventListener("click", function() {
        alert("Button Clicked!");
    });
}


// --- Activity 8 ---
function activity8() {
    document.body.style.backgroundColor = "lightblue";
}

// --- Activity 9 ---
function activity9() {
    document.body.classList.toggle('dark-mode');
}


// --- Activity 10 ---
function activity10() {
    let list = document.getElementById('myList');
    if (!list) {
        const container = document.createElement('div');
        container.id = 'activity10-container';
        
        const btn = document.createElement('button');
        btn.id = 'addBtn';
        btn.className = 'add-btn';
        btn.textContent = 'Add Item';
        
        list = document.createElement('ul');
        list.id = 'myList';
        
        container.appendChild(btn);
        container.appendChild(list);
        document.getElementById('activityContainer').appendChild(container);
        
        btn.addEventListener('click', () => {
            const newItem = document.createElement('li');
            newItem.textContent = "New List Item";
            list.appendChild(newItem);
        });
    }
}

// --- Activity 11 ---
function activity11() {
    let p = document.getElementById('text');
    if (!p) {
        const container = document.createElement('div');
        container.id = 'activity11-container';
        
        p = document.createElement('p');
        p.id = 'text';
        p.className = 'text-paragraph';
        p.textContent = 'Delete me!';
        
        const btn = document.createElement('button');
        btn.id = 'delBtn';
        btn.className = 'del-btn';
        btn.textContent = 'Remove Paragraph';
        
        container.appendChild(p);
        container.appendChild(btn);
        document.getElementById('activityContainer').appendChild(container);
        
        btn.addEventListener('click', () => {
            container.remove();
        });
    }
}

// --- Activity 12 ---
function activity12() {
    let input = document.getElementById('userInput');
    
    if (!input) {
        const container = document.createElement('div');
        container.id = 'activity12-container';
        
        input = document.createElement('input');
        input.type = 'text';
        input.id = 'userInput';
        input.className = 'user-input';
        input.placeholder = 'Type something...';
        
        const p = document.createElement('p');
        const counter = document.createElement('span');
        counter.id = 'counter';
        counter.className = 'counter-text';
        counter.textContent = '0';
        p.textContent = 'Count: ';
        p.appendChild(counter);
        
        container.appendChild(input);
        container.appendChild(p);
        document.getElementById('activityContainer').appendChild(container);
        
        input.addEventListener('input', () => {
            document.getElementById('counter').textContent = input.value.length;
        });
    }
}

// --- Activity 13 ---
function activity13() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let calcBtn = document.getElementById('calcBtn');
    
    if (!num1) {
        const container = document.createElement('div');
        container.id = 'activity13-container';
        
        num1 = document.createElement('input');
        num1.type = 'number';
        num1.id = 'num1';
        num1.className = 'calc-input';
        num1.placeholder = 'Number 1';
        
        num2 = document.createElement('input');
        num2.type = 'number';
        num2.id = 'num2';
        num2.className = 'calc-input';
        num2.placeholder = 'Number 2';
        
        calcBtn = document.createElement('button');
        calcBtn.id = 'calcBtn';
        calcBtn.className = 'calc-btn';
        calcBtn.textContent = '=';
        
        const result = document.createElement('span');
        result.id = 'result';
        result.className = 'result';
        result.textContent = '';
        
        container.appendChild(num1);
        container.appendChild(document.createTextNode(' + '));
        container.appendChild(num2);
        container.appendChild(calcBtn);
        container.appendChild(result);
        document.getElementById('activityContainer').appendChild(container);
        
        calcBtn.addEventListener('click', () => {
            const n1 = parseFloat(document.getElementById('num1').value) || 0;
            const n2 = parseFloat(document.getElementById('num2').value) || 0;
            document.getElementById('result').textContent = ' = ' + (n1 + n2);
        });
    }
}

// --- Activity 14 ---
function activity14() {
    let container = document.getElementById('activity14-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'activity14-container';
        
        const image = document.createElement('img');
        image.id = 'myImg';
        image.className = 'swap-image';
        image.width = 250;
        image.alt = "Oliver's Picture";
        
        const btn = document.createElement('button');
        btn.id = 'imgBtn';
        btn.className = 'img-btn';
        btn.textContent = 'Swap Image';
        
        container.appendChild(image);
        container.appendChild(btn);
        document.getElementById('activityContainer').appendChild(container);
        
        // Local image paths - using image1.jpg and image2.jpg from the folder
        const picture1 = 'image1.jpg';
        const picture2 = 'image2.jpg';
        
        let isFirstImage = true;
        
        // Set initial image
        image.src = picture1;
        
        // Button click to swap images
        btn.addEventListener('click', () => {
            isFirstImage = !isFirstImage;
            image.src = isFirstImage ? picture1 : picture2;
        });
    }
}

// --- Activity 15 ---
function activity15() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    let taskBtn = document.getElementById('taskBtn');
    
    if (!taskInput) {
        const container = document.createElement('div');
        container.id = 'activity15-container';
        
        taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.id = 'taskInput';
        taskInput.className = 'task-input';
        taskInput.placeholder = 'Enter task';
        
        taskBtn = document.createElement('button');
        taskBtn.id = 'taskBtn';
        taskBtn.className = 'task-btn';
        taskBtn.textContent = 'Add Task';
        
        taskList = document.createElement('ul');
        taskList.id = 'taskList';
        taskList.className = 'task-list';
        
        const inputBtnContainer = document.createElement('div');
        inputBtnContainer.className = 'input-btn-container';
        inputBtnContainer.appendChild(taskInput);
        inputBtnContainer.appendChild(taskBtn);
        
        container.appendChild(inputBtnContainer);
        container.appendChild(taskList);
        document.getElementById('activityContainer').appendChild(container);
        
        taskBtn.addEventListener('click', () => {
            const inputEl = document.getElementById('taskInput');
            const listEl = document.getElementById('taskList');
            if (inputEl.value.trim() !== "") {
                const li = document.createElement('li');
                li.textContent = inputEl.value;
                listEl.appendChild(li);
                inputEl.value = "";
            }
        });
    }
}
