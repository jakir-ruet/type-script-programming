var Student = /** @class */ (function () {
    function Student(name, className, schoolName) {
        this.name = name;
        this.className = className;
        this.schoolName = schoolName;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " ").concat(this.className, " ").concat(this.schoolName));
    };
    return Student;
}());
// let jakirInt = new Student('Jakir', 4, 'Rajshahi');
// console.log(jakirInt)
// or
var jakirInt;
jakirInt = new Student('Jakir', 4, 'Rajshahi');
console.log(jakirInt);
