// // function overloading can relate the between parameter types result types also
// function addNum(a: number, b: number): number {
//    return (a + b)
// }
// function addStr(a: string, b: string): string {
//    return(a + b)
// }
function add(a, b) {
    return (a + b);
}
var result = add(5, 5);
var results = add('A', 'B');
console.log(result);
console.log(results);
