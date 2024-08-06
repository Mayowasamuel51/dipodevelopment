// alert("hello dipo how you de ");
//   document.body.style.backgroundColor = "black";
// what do we start leaning in Javascript or js

//   1) Syntax and Basic Constructs  Understand variables, data types, operators, control structures (if statements, loops), functions, and scope.

// understand variables + data types 
// three ways to start working with variabeles 
// let, const , var 
// dont use var   , use only let or const 


// make a simple task of making  variable of my name 

// task 1 
// let variabelename = something/value
// const variabelename = something/value
// note always use a goog variable name , dont use names , like p1,n2 ,rrm23 , use good names

/*
DATA TYPES IN JAVASCRIPT 

Primitive Data Types: below
1) Number ,
2) String,
3) Boolean, 
4) Null ,
5) Undefined,
6) Bigint, 
7) Symbol 

Reference Data Types:
1) Array 
2) Object 
3) Function 
*/
// let myname = "dipo";
// make another variabelename 
// let location = '12 dash road lagos way'
// console.log(myname)
/// before you start solving a problem you will start with a variabelename
// pamalcacal
// let myName = 'mayowa'
// let oddNumber = 3 
// let secertKey = 'q34343242'
// console.log(true) // this is boolean 
// console.log(121321) // this is a number data type 
// console.log('string') /// this is a string data type
// console.log(null)  /// this is a null  data type
// console.log(undefined)  // this is a undefined data type
// sK// this does not  make sense 
// if you use Let it means you might change the value later on  but if you use const you wont be able to change the value later on 
// let myname = 'mayowa';
// myname = 21313;
// console.log(myname)   /// i am  console logging the variabele name
// /// it better you use const most of the time  to avoid reassing of value      !!!!!!!!!!!!!!
// const surname = 'olalekan';
// // surname = 'dipo my guy ' // the broswer and javascript will shout at us  if we do this 
// console.log(surname)


// document.addEventListener('click', function(){
//     const container = document.querySelector('.notification');
//     container.remove()
// })

/// how to store infomation in javascript  and talk about functions 

// home work what is Reference Data Types 


//storing info in JS ......................

// Array [] , Object {} , Mutiple Object in Array [{}]

// Create a simple array , note array has some built in methods

// Note this  , methods are the same things as array 

// what is method or function , a method or function is something that perform a given task 

// note ... you can use in buiit methods or you can create you own functions 

// an  array in JavaScript is a special type of object used to store multiple values in a single variable. 

//  create an array of different names and console.log it 
const names = ['mayowa', 'dipo', 'blessing', 'shola', 'bus', 'bola', 'tunde']  //  you can store a single info or mutiple info  
// types of data you can store inside an array 
// string, object , number, boolean 

// console.log(names)

// let print on array value out on the browser 

// console.log(names[0])
// console.log(names[2])
//method or function in array 
// console.log(names.includes(2232))
// console.log(names.includes('mayowa'))
// home work find out the most used array method in javascipt 
// names.pop()  // takes away the last value in a array 
// names.shift()   // take away the first value in a array
// console.log(names)

/// pop , shift , unshif, concat , findIndex, map , map, filter , fill , slice  and many other more ,

// prop in array is called length

// all this method or function live inside of an array 

const arr1 = ['name 1 ', 'name 2 ', 'name 3 ', 'name 4']

const arr2 = ['london 1', 'london 1', 'london 2', 'london 3']

// const joinArray = arr1.concat(arr2)
// console.log(joinArray)

// console.log(arr2[3])
/// object , 
// object are key values pairs 

const person = {
    name: 'mayowa',
    age: 14,
    level: 3,
    location: 'london road lagos',
    name: 'dipo',
    age: 44
}
// object has props 
// console.log(person)
// console.log(person.name)
// console.log(person.level)
// console.log(person.location)


// operators, control structures (if statements, loops), functions
// operators,
// + , - , % , * , / 
const num1 = 12
const num2 = 10;

// console.log(  num1 + num2  )
// console.log(num1 - num2)
// console.log(num1 % num2)
// console.log(num1 * num2)
// console.log(num1 / num2)




// control structures (if statements, switch ,loops),
// we make decsion in javascript with   (  if statment , switch , loops  ) 


// if statwment , we have if , else if , else 

const myName = 'mayowa';


if (myName === 'ola') {
    console.log('this name is ola')
} else if (myName === 'mayowa') {
    console.log('this name is mayowa')
} else {
    console.log('no name is found ')
}