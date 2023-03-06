// const stdDetails = (roll:string|number, std:{name:string, className: number, reg: number}) => {
//    console.log(`Student Information:  ${roll}, ${std.name}, ${std.className}, ${std.reg}`)
// };
// const invStd = (std:{name:string, className: number, reg: number}) => {
//    console.log(`Hello Student ${std.className > 7 ? 'Eight' : 'Seven'} ${std.name}`)
// };

// Using alises
// making own type for efficient code
type stringOrNumberType = string | number;
type studentType = { name: string, className: number, reg: number; }

// Appliying the alises
const stdDetails = (roll:stringOrNumberType, std:studentType) => {
   console.log(`Student Information:  ${roll}, ${std.name}, ${std.className}, ${std.reg}`)
};
const invStd = (std:studentType) => {
   console.log(`Hello Student ${std.className > 7 ? 'Eight' : 'Seven'} ${std.name}`)
};
