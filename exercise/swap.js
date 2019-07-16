/* jshint esversion: 6 */
var a ="red" ;
var b = 'blue';
var c = a;
a=b;
b=c;


console.log(a);
console.log(b);

//write a function
// that takes two 
//numbers and returns the maximum of the two



function maxNUm (number1, number2) {
    // if (number1 > number2)
    // console.log(number1);
    // return number1;
    // console.log(number2);
    // return number2;
    return (number1>number2) ? number1: number2;
}

console.log(maxNUm(1213, 523));

function isLandscape(width, height) {
    //return(width>height) ? 'Landscape' : 'portrait' ;
    return(width>height);
}
let video = isLandscape(500, 800);
console.log(video);

function fizzBuzz(num){
    // if (num%3===0 && num%5===0) return 'FizzBuzz';
    // else if  (num%3===0) return 'Fizz';
    // else if (num%5===0) return 'Buzz';
    // else if (num!==typeof(2)) return 'Not a number';
    // else if (num % 3 !==0 && num%5!==0) return num;

    if (typeof num !== 'number')
        return 'Not a number';
    if ((num%3===0) && (num%5===0))
        return 'fizzBuzz';
    if (num%3===0)
        return 'Fizz';
    if (num%5===0)
        return 'Buzz';
    return num;

}


console.log(fizzBuzz(7));