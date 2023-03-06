interface isStudent{
   name: string;
   className: number;
   schoolName: string;
}

class Student implements isStudent {
   constructor(
      public name: string,
      public className: number,
      readonly schoolName: string,
   ) { }
   study() {
      console.log(`${this.name} ${this.className} ${this.schoolName}`)
   }
}
// let jakirInt = new Student('Jakir', 4, 'Rajshahi');
// console.log(jakirInt)
// or

let jakirInt: isStudent;
jakirInt = new Student('Jakir', 4, 'Rajshahi');
console.log(jakirInt)
