// let anyType: any;
// anyType = "Hello";
// anyType = 9845;
// anyType = true;
// console.log(anyType)

function anyTypeFunction(anyType: any) {
   if (typeof (anyType) === 'number')
      console.log('This is number type ' + numVarAny)

   else if (typeof(anyType) === 'string') {
      console.log('This is the string type ' + strVarAny)
   }
      
   else if (typeof(anyType) === 'boolean') {
      console.log('This is boolean type ' + booVarAny)
   }
}
let numVarAny = 763475;
anyTypeFunction(numVarAny);
let strVarAny = "Hello";
anyTypeFunction(strVarAny);
let booVarAny = true;
anyTypeFunction(booVarAny);

