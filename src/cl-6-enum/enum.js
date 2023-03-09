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
var myEnum;
(function (myEnum) {
    myEnum[myEnum["Book"] = 1] = "Book";
    myEnum[myEnum["Author"] = 2] = "Author";
    myEnum[myEnum["Movie"] = 3] = "Movie";
    myEnum[myEnum["Director"] = 4] = "Director";
    myEnum[myEnum["Software"] = 5] = "Software";
    myEnum[myEnum["Engineer"] = 6] = "Engineer";
})(myEnum || (myEnum = {}));
console.log("Count from one position " + myEnum.Book);
console.log("Count from two position " + myEnum.Author);
console.log("Count from three position " + myEnum.Movie);
console.log("Count from four position " + myEnum.Director);
console.log("Count from five position " + myEnum.Software);
console.log("Count from six position " + myEnum.Engineer);
