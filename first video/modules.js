// intro part for the exercises that we did for the first time i mean the first 70 something questions
// const amount = 9;
//  if (amount < 10){
//     console.log('The amount is smaller');
//  }
//  else{
//     console.log('the amount is greater')
//  }
//  console.log('this is my first app');

 // globals - no window
 // __dirname  - path to current directory
 // __filename - file name
 // require  - function to use modules(CommonJS)
 // module  - info about current module (file)
 // exports - object that can be used by other files to access the functions or variables defined in this file
 // process  - info about env(environment) where the program is going to be executed

//  console.log(__dirname);
//  setInterval(() =>{
//     console.log(`i am a girl`);
//  },2000)

// CommonJs, every file is a module (by default)
// Modules -Encapsulated Code (only share minimum)

const names = require('./1stmodule')
const sayHi = require('./utils')
const person = require('./alternative flavor')
console.log(names);
console.log(person);
require('./mind-grenade')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)



