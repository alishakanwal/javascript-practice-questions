/*java script practice question*/
/// Q1. Create an array of five numbers and print all elements. ///

let number = [10, 20, 30, 40, 50];

console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);




/// Q2. Create an array of three fruits and print the first and last elements. ///

let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);
console.log(fruits[2]);




/// Q3. Add "Mango" to the end of an array using push(). ///

let fruits2 = ["apple", "banana"];
fruits2.push("Mango");

console.log(fruits2);




/// Q4. Find the length of the following array. ///

let numberList = [10, 20, 30, 40, 50];

console.log(numberList.length);




/// Q5. Write a function that prints "Hello World". ///

function greet() {
    console.log("Hello World");
}
greet();




/// Q6. Write a function that takes two numbers as parameters and prints their sum. ///

function add(a, b) {
    console.log(a + b);
}
add(10, 20);




/// Q7. Write a function that takes a number and returns its square. ///

function square(number) {
    return number * number;
}

console.log(square(5));




/// Q8. Write a function that checks whether a number is even or odd. ///

function checkNumber(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkNumber(6);




/// Q9. Write a function to find the largest of two numbers. ///

function findLargest(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
findLargest(15, 10);


/// Q10. Write a function that takes a name as an argument and prints a welcome message. ///

function welcome(name) {
    console.log("Welcome " + name);
}

welcome("Ali");




/// Q11. Create a student object with name, age, and class properties. Print all three properties. ///

let student = {
    name: "Ali",
    age: 18,
    class: "12th"
};

console.log(student.name);
console.log(student.age);
console.log(student.class);




/// Q12. Create a car object with brand, model, and color properties. Print the car's brand. ///

let car = {
    brand: "Toyota",
    model: "Corolla",
    color: "Black"
};

console.log(car.brand);




/// Q13. Update the age of the student object to 20 and print it. ///

let student2 = {
    name: "Ali",
    age: 18
};
student2.age = 20;

console.log(student2.age);





/// Q14. Create a student object with name and marks properties. Write a function that prints the student's name and marks. ///

let student3 = {
    name: "Ali",
    marks: 85
};
function printStudent() {
    console.log(student3.name);
    console.log(student3.marks);
}
printStudent();
