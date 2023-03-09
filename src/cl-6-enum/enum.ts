// enum myEnum{
//    Book,
//    Author,
//    Movie,
//    Director,
//    Software,
//    Engineer
// }
// console.log(`Count from zero position `+ myEnum.Book);
// console.log(`Count from one position `+ myEnum.Author)
// console.log(`Count from two position `+ myEnum.Movie)
// console.log(`Count from three position `+ myEnum.Director)
// console.log(`Count from four position `+ myEnum.Software)
// console.log(`Count from five position `+ myEnum.Engineer)

// // another example
enum myEnum{
   Book = 1,
   Author,
   Movie,
   Director,
   Software,
   Engineer
}
console.log(`Count from one position `+ myEnum.Book);
console.log(`Count from two position `+ myEnum.Author)
console.log(`Count from three position `+ myEnum.Movie)
console.log(`Count from four position `+ myEnum.Director)
console.log(`Count from five position `+ myEnum.Software)
console.log(`Count from six position `+ myEnum.Engineer)