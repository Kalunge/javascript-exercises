/* jshint esversion:6 */

//A FUNCTION THAT RETURNS THE MAX OF TWO NUMBERS

function greaterThan(num1, num2){
return Math.max(num1, num2);
}

let result = greaterThan(300,400);
console.log(result);


function lessThan(a,b){
   return Math.min(a,b);
}

let lesser = lessThan(25,15);
console.log(lesser);

//second way
function max(number1, number2){
    if(number1>number2) return number1;

    return number2;
}

let resort = max(25, 15);
console.log(resort);

//another way

function maxx(d,e){
   return (d>e)? d:e;
}
let larger = maxx(32,565);
console.log(larger);

function isLnadscape(width, height){
return (width>height);
}

video =  isLnadscape(500, 800);
console.log(video);


//another way

function landscaper(w, h){
if(w>h) return true;
  return false;
}

vidaa = landscaper(1250, 900);
console.log(vidaa);


//fizzbuzz algorithm
function output(number){ 
if(typeof number !== 'number')
  return NaN;

if ((number % 3 === 0) && (number % 5 === 0))
  return 'fizzBuzz';

if (number % 3 === 0)
  return 'fizz';

if (number % 5 ===0)
  return 'buzz';
    
return number;
}

console.log(output(7));
console.log(output(15));
console.log(output(18));
console.log(output(20));
console.log(output(true));
console.log(output(70));

function checkSpeed(speed){
  const speedLimit = 70;

  const kmperpoint = 5;

  const points =  Math.floor((speed-speedLimit) / kmperpoint );

  if (speed < speedLimit + kmperpoint )
    return 'ok';

  if (points >= 12)
    return 'License Suspended';

  if (speed > speedLimit)
    console.log ('points', points);
  
}
console.log(checkSpeed(20));
console.log(checkSpeed(150));
console.log(checkSpeed(120));

function showNumbers(limit){
  let num = 0;
  while (num< limit, num++)
    console.log(num);
}
console.log(showNumbers(10));

const array = [1, 4, false, 21, 3, 0, false, 3, 5, 7];

//countTRuthy
function countTRuthy(array){
let count = 0;
for (let value of array)
  if (value)
  count++;

return count;
  }
  
function truthyorFalsy(a){
  return (a)? "truthy":"falsy";
}

let check = truthyorFalsy(0);
console.log(check);
console.log(countTRuthy(array));


// function showProperties(object){
//   for (let value in object)
//     if (typeof object.values
//   .values ==='string')
//     console.log(value);
// }

const movie = {
title: 'Narcos',
releaseYear : 2010,
director : 'pablo',
rating : 5
};
const values = Object.values(movie);
console.log(values);

function showProperties(object){
  for (let value of object)
    if (typeof value === 'string')
      console.log(value);
}

const show = showProperties(values);
console.log(show);

//another way 

const person = {
  age : 30,
  name : 'tito',
  school : 'Moringa',
  hobby : 'coding'
};

function showProps(obj){
  for (let key in obj)
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

const popers = showProps(person);
console.log(popers);


//sum of multiples of 3 & 5

function sumMultiples (limit){
  let sum = 0;

  for(let num = 0; num<=limit; num++)
    if (num %3 === 0 || num % 5 ===0)
      sum += num;
  
  return sum;
}

const added = sumMultiples(20);
console.log(added);
console.log(sumMultiples(100));
console.log(sumMultiples(10));


function sumFours(limit){
  let sum = 0;

  for (let j = 0; j <= limit; j++)
    if (j % 4 ===0)
      sum += j;

  return sum;

}

const addedFours = sumFours(50);
console.log(addedFours);

console.log('tito');

//calculate grade

function calculateGrade(array){
  const average = calculateAverage(array);
//   let sum = 0;
// for (let value of array)
//  sum += value;

//  let average = sum/array.length;

 if (average < 60) return 'F';
 if (average < 70) return 'D';
 if (average < 80) return 'C';
 if (average < 90) return 'B';
 return 'A';
}

function calculateAverage(array){
  let sum = 0;
  for(let value of array)
  sum += value;

  return sum/array.length;
}
const marks = [64,68, 80,80,80];

const avera = calculateAverage(marks);
console.log(avera);


const grade = calculateGrade(marks);
console.log(grade);

//showstars

// function showStars(row){
//   let sum = 0;
//   for(let i = 1; i<=row; i++)
//    return i + '*';
// }
// const stars = showStars(4);
// console.log(stars);

function showStars(rows){
  for(let row = 1; row<=rows; row++){
    let pattern = '';
     for (let i=0; i<row; i++)
      pattern +='*';
  
    console.log(pattern);
  }
}
let showoff = showStars(10);
console.log(showoff);