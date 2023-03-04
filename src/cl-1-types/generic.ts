// const stdInfo = (info: object) => {
//    let id = Math.ceil(Math.random() * 10)
//    return{...info, id}
// };
// let aStudent = stdInfo({
//    name: 'Jakir',
//    age: 35
// });
// aStudent.id; // show here only id

// Base on the generic
const stdInfo = <T>(info: T) => {
   let id = Math.ceil(Math.random() * 10);
   return{...info, id}
}
let user = "Jakir"
stdInfo(user)
console.log(user)
