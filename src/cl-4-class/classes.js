var Person = /** @class */ (function () {
    function Person(na, em, ins) {
        this.name = na;
        this.email = em;
        this.institute = ins;
    }
    Person.prototype.personInfo = function () {
        console.log("".concat(this.name, " ").concat(this.email, " ").concat(this.institute));
    };
    return Person;
}());
var jakir = new Person('Jakir', 'jakir@gmail.com', 'RUET');
console.log(jakir.name);
console.log(jakir);
var robin = new Person('Robin', 'robin@gmail.com', 'RUET');
console.log(robin.email);
console.log(robin);
