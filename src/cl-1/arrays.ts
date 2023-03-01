// its declare two ways
// 1. using sqare bracket
// 2. generic array type

// let fruits: Array<string>;
// fruits = ['Mango', 'Apple', 'Banana'];
// console.log(fruits);
// console.log(fruits[0]);

// let Numbers: Array<number>;
// Numbers = [434, 4323, 3432, 4322]
// console.log(Numbers)

// Multi Type Array
// let entity: (string | number)[] = [43, 'Jakir', 665, 'Bangladesh'];
// console.log(entity);

// let entity: (string | number)[];
// entity = [43, 'Jakir', 665, 'Bangladesh'];
// console.log(entity)

// Or
// let entity: Array<string | number> = [43, 'Jakir', 665, 'Bangladesh'];
// console.log(entity);

// let entity: Array<string | number>;
// entity = [43, 'Jakir', 665, 'Bangladesh'];
// console.log(entity)

// Looping
let entity: Array<string | number> = [43, 'Jakir', 665, 'Bangladesh'];
for (let index in entity) {
   console.log(entity[index])
}
for (let i = 0; i < entity.length; i++){
   console.log(entity[i])
}