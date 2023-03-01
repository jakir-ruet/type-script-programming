// let empId: (number | string);
// empId = 436 + 'vdvg';
// console.log(empId)
function unionType(code) {
    if (typeof (code) === "number")
        console.log('Code is number > ' + numVar);
    else if (typeof (code) === "string")
        console.log('Code is string > ' + strVar);
}
var numVar = 478538;
unionType(numVar);
var strVar = "Hello";
unionType(strVar);
