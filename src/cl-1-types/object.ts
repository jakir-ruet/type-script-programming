let student: object;
student = {
   name: 'Jakir',
   department: 'Computer Science & Engineering',
   contact: 8801788916805
};
console.log(student);
console.log(typeof (student));

let employee: {
   name: string
   department: string
   contact: number
}

employee = {
   name: 'Jakir',
   department: 'Computer Science & Engineering',
   contact: 8801788916805
};
console.log(employee);
console.log(typeof (employee));

// object vs. Object

// TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.

// The object type represents all non-primitive values while the Object type describes the functionality of all objects.