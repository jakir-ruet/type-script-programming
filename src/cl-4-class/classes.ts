class Person{
   name: string;
   email: string;
   institute: string;

   constructor(na: string, em: string, ins: string) {
      this.name = na;
      this.email = em;
      this.institute = ins;
   }

   personInfo() {
      console.log(`${this.name} ${this.email} ${this.institute}`)
   }
}
const jakir = new Person('Jakir', 'jakir@gmail.com', 'RUET');
console.log(jakir.name)
console.log(jakir);
const robin = new Person('Robin', 'robin@gmail.com', 'RUET');
console.log(robin.email)
console.log(robin)
