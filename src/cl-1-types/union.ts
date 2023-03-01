// let empId: (number | string);
// empId = 436 + 'vdvg';
// console.log(empId)

function unionType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number > ' + numVar)
    else if(typeof(code) === "string")
        console.log('Code is string > ' + strVar)
}
let numVar = 478538;
unionType(numVar);
let strVar = "Hello"
unionType(strVar);