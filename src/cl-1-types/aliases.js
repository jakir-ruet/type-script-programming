// const stdDetails = (roll:string|number, std:{name:string, className: number, reg: number}) => {
//    console.log(`Student Information:  ${roll}, ${std.name}, ${std.className}, ${std.reg}`)
// };
// const invStd = (std:{name:string, className: number, reg: number}) => {
//    console.log(`Hello Student ${std.className > 7 ? 'Eight' : 'Seven'} ${std.name}`)
// };
var stdDetails = function (roll, std) {
    console.log("Student Information:  ".concat(roll, ", ").concat(std.name, ", ").concat(std.className, ", ").concat(std.reg));
};
var invStd = function (std) {
    console.log("Hello Student ".concat(std.className > 7 ? 'Eight' : 'Seven', " ").concat(std.name));
};
