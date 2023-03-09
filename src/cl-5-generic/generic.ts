const stdAgeNg = (obj: object) => {
   let id = Math.floor(Math.random() * 100);
   return {
      ...obj, id
   }
};

let invStdNg = stdAgeNg({ stdName: 'Jakir', age: 30 }); // this object doesn't appear in function
console.log(`The result non generic way `+ invStdNg.id);
// console.log(invStds.stdName) // got an error due to the object doesn't appear in function


// using generic way it will work properly
const stdAgeG = <T>(obj: T) => {
   let id = Math.floor(Math.random() * 100)
   return {
      ...obj, id
   }
};
let invStdG = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic ' + invStdG.id);
console.log('My Name using generic ' + invStdG.stdName)
console.log('My Age using generic ' + invStdG.age)

let invStdGString = stdAgeG('passing string')
console.log('My Id using generic using string ' + invStdGString.id);
// it shows me an error when we try pass a string
// console.log('My Id using generic using string ' + invStdGString.name) 

// Another block for good under understanding the generic type for passing string that showing the error above code
// using extends and try to sending the string(not object) but it doesn't work.
const stdAgeGExtends = <T extends object>(obj: T) => {
   let id = Math.floor(Math.random() * 100)
   return {
      ...obj, id
   }
};
let invStdGExtends = 'Jakir';
// stdAgeGExtends(invStdGExtends); // its show us an error.

// let invStdGExtends = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic invStdGExtends ' + invStdGExtends);

const stdAgeGExtendsAlternatively = <T extends {
   // here we can declare an object
   name: 'Jakir',
   age: 35
}>(obj: T) => {
   let id = Math.floor(Math.random() * 100)
   return {
      ...obj, id
   }
};
let invStdGExtendsAlternatively = stdAgeGExtendsAlternatively(
   {
      name: 'Jakir',
      age: 35,
      school: 'MHA High School'
   }
)
console.log(invStdGExtendsAlternatively.id);
console.log(invStdGExtendsAlternatively.name);
console.log(invStdGExtendsAlternatively.age);
console.log(invStdGExtendsAlternatively.school);


// let invStdGExtends = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic invStdGExtends ' + invStdGExtends);


