// let anyType: any;
// anyType = "Hello";
// anyType = 9845;
// anyType = true;
// console.log(anyType)
function anyTypeFunction(anyType) {
    if (typeof (anyType) === 'number')
        console.log('This is number type ' + numVarAny);
    else if (typeof (anyType) === 'string') {
        console.log('This is the string type ' + strVarAny);
    }
    else if (typeof (anyType) === 'boolean') {
        console.log('This is boolean type ' + booVarAny);
    }
}
var numVarAny = 763475;
anyTypeFunction(numVarAny);
var strVarAny = "Hello";
anyTypeFunction(strVarAny);
var booVarAny = true;
anyTypeFunction(booVarAny);
