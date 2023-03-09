var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var stdAgeNg = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var invStdNg = stdAgeNg({ stdName: 'Jakir', age: 30 }); // this object doesn't appear in function
console.log("The result non generic way " + invStdNg.id);
// console.log(invStds.stdName) // got an error due to the object doesn't appear in function
// using generic way it will work properly
var stdAgeG = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var invStdG = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic ' + invStdG.id);
console.log('My Name using generic ' + invStdG.stdName);
console.log('My Age using generic ' + invStdG.age);
var invStdGString = stdAgeG('passing string');
console.log('My Id using generic using string ' + invStdGString.id);
// it shows me an error when we try pass a string
// console.log('My Id using generic using string ' + invStdGString.name) 
// Another block for good under understanding the generic type for passing string that showing the error above code
// using extends and try to sending the string(not object) but it doesn't work.
var stdAgeGExtends = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var invStdGExtends = 'Jakir';
// stdAgeGExtends(invStdGExtends); // its show us an error.
// let invStdGExtends = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic invStdGExtends ' + invStdGExtends);
var stdAgeGExtendsAlternatively = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var invStdGExtendsAlternatively = stdAgeGExtendsAlternatively({
    name: 'Jakir',
    age: 35,
    school: 'MHA High School'
});
console.log(invStdGExtendsAlternatively.id);
console.log(invStdGExtendsAlternatively.name);
console.log(invStdGExtendsAlternatively.age);
console.log(invStdGExtendsAlternatively.school);
// let invStdGExtends = stdAgeG({ stdName: ' Jakir ', age: 45 });
console.log('My Id using generic invStdGExtends ' + invStdGExtends);
