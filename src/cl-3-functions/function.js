// const myFunction = (a: string, b:string, c:string="default value") => {
//    console.log(c)
//    console.log(a + b)
// };
// myFunction('value of a', 'value of b');
var myFunctionReturn = function (a, b, c) {
    return (a + b);
};
var myFuncRet = myFunctionReturn('Hello a', 'Hello b');
console.log(myFuncRet);
