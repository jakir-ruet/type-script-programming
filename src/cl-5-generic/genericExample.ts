// using multiple type
const strLength = (a: any) => {
   console.log(`Total length of string is ` + a.length);
   console.log('-------------------------')
   return (
      a
   )
};
let helloWorld = "I Jakir, talking from Bangladesh";
strLength(helloWorld);

// // now we try to use generic
// const strLengthG = <T>(a: T) => {
//    console.log(`Total length of string is ` + a.length) // its shows an error
//    return(a)
// }

// solution of the issue
interface hasLength {
   length: number;
}
const strLengthG = <T extends hasLength>(a: T) => {
   console.log(`Total length of string is ` + a.length);
   console.log('---------------------------')
   return (a)
};

let helloWorldInterface = 'Bangladesh is the best country all over the world';
strLengthG(helloWorldInterface);

// another illustration
const strLengthAnother = <T extends hasLength>(a: T[])=> {
   a.forEach((Element) => {
      console.log(Element.length)
   })
};

let arr = [
   'Bangladesh is the best country all over the world',
   ['I', 'am', 'Jakir', 'from', 'Bangladesh'],
   {type: 'plastic', length: 60}
];
strLengthAnother(arr);