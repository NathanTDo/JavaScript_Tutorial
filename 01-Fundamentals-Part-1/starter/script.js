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

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(0, 23 ,71);
// const scoreKoalas = calcAverage(650, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins Win ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas Win ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log("Nobody wins");
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);


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

// const day = 'thursday';

// switch(day) {
//     case 'monday':
//         console.log('Plan couse structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend!');
//         break;
//     default:
//         console.log('Not a valid day!')
// }

// const age = 15;
// // age >= 18 ? console.log('I like to drink wine') : 
// // console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >- 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }

// console.log(`I like to drink ${age >= 18 ? 'wine'
//  : 'water'}`);

// function totalBillCalculator(bill) {
//     const total = (bill >= 50 && bill <= 300) ? 1.15 * bill : 
//     1.2 * bill;
//     console.log(total);
//     return total;
// }
// const bill = totalBillCalculator(275);

// function totalBillCalculator(bill) {
//     let total;
//     if (bill >= 50 && bill <= 300) {
//         total = 1.15 * bill;
//     } else {
//         total = 1.2 * bill
//     }
//     return total;
// }


// const bill = totalBillCalculator(10);
// console.log(bill);

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[2]))