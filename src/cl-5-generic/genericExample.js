// using multiple type
var strLength = function (a) {
    console.log("Total length of string is " + a.length);
    console.log('-------------------------');
    return (a);
};
var helloWorld = "I Jakir, talking from Bangladesh";
strLength(helloWorld);
var strLengthG = function (a) {
    console.log("Total length of string is " + a.length);
    console.log('---------------------------');
    return (a);
};
var helloWorldInterface = 'Bangladesh is the best country all over the world';
strLengthG(helloWorldInterface);
// another illustration
var strLengthAnother = function (a) {
    a.forEach(function (Element) {
        console.log(Element.length);
    });
};
var arr = [
    'Bangladesh is the best country all over the world',
    ['I', 'am', 'Jakir', 'from', 'Bangladesh'],
    { type: 'plastic', length: 60 }
];
strLengthAnother(arr);
