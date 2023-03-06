// // function overloading can relate the between parameter types result types also
// function addNum(a: number, b: number): number {
//    return (a + b)
// }
// function addStr(a: string, b: string): string {
//    return(a + b)
// }

// // now you trying use union type, but it doesn't mean build the relationship the parameter type & result type
// function add(a: number | string, b: number | string): number | string {
//    if (typeof a === 'number' && typeof b === 'number')
//       return (a + b);
//    if (typeof a === 'string' && typeof b === 'string')
//       return(a + b)
// }

// the correlation of parameter types & result types will be possible in function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any{
   return (a + b)
}
let result = add(5, 5)
let results= add('A', 'B')
console.log(result)
console.log(results)
