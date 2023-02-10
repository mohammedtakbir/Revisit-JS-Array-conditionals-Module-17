//* problem-01
// const fruits = ['apple', 'banana', 'orange'];

// //? a) find the index of banana and replace banana with mango
// const bananaIndex = fruits.indexOf('banana');
// fruits[1] = 'mango'
// console.log(bananaIndex, fruits)

// //? b) remove orange and add watermelon
// fruits.pop();
// fruits.push('watermelon');
// console.log(fruits)

//* problem-02

// function gradingSystem(mark) {
//     if (mark >= 80) {
//         return console.log('A Grade')
//     } else if (mark >= 60 && mark <= 79) {
//         return console.log('B Grade')
//     } else if (mark >= 50 && mark <= 59) {
//         return console.log('C Grade')
//     } else if (mark >= 40 && mark <= 49) {
//         return console.log('D Grade')
//     } else{
//         return console.log('F')
//     }
// }
// const myself = 85;
// const tom = 66;
// const jane = 95;
// const peter = 56;
// const jhon = 40;

// const result = gradingSystem(35)
// console.log(result)

//* problem 3

//? 1
// const num1 = 1113;
// const num2 = 79;
// const num3 = 405;
// if(num1 > num2 && num1 > num3){
//     console.log('num1 is biggest')
// }else if(num2 > num1 && num2 > num3){
//     console.log('num2 is biggest')
// }else{
//     console.log('num3 is biggest')
// }

//? 2
const side1 = 9;
const side2 = 5;
const side3 = 5;
if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log('isosceles')
}else{
    console.log('not isosceles')
}