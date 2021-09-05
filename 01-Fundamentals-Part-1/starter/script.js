/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";
let first = "jonas";

let person = "jonas";
let pi = 3.1415;

let myFirstJob = 'Programmer';
let myCurretnJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'true');

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

let age = 30;
age =  31;

const birthYear = 1991;

const markMass = 78;
const markHeight = 1.69;
const johnMass = 20;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2
const markBMI = markMass / markHeight ** 2
const markHigherBMI = (markBMI > johnBMI);

if (markHigherBMI === true) {
    console.log("Mark's BMI is higher than John's!")
} 
else { 
     console.log("John's BMI is higher than Mark's!") 
}

console.log(markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) +
" year old " + job + '! ';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start a driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} year(s)`)
}

const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18);

const favourite = Number(prompt("What's your favorite number?"));
console.log(typeof favourite)

if (favourite === 23) { // '23' = 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7 ) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}
*/
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false;
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// if ((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) {
//     console.log('Dophins Win!');
// } else if ((scoreKoalas > scoreDolphins) && scoreKoalas >= 100) {
//     console.log('Koalas Win!');
// } else if ((scoreDolphins === scoreKoalas) && scoreKoalas >= 100) {
//     console.log('tie')
// } else {
//     console.log('nobody wins')
// }

const day = 'thursday';

switch(day) {
    case 'monday':
        console.log('Plan couse structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day!')
}