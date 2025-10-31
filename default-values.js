//default values
// let [a, b, c] = [5, 10, 15]
// console.log(a, b, c);


//Default values in Destructuring
let {name, age = 20} = {
    name: 'ali',
    age: 23,
}
console.log(name, age);


// Skip items
// let [ , , , e] = [5, 30, 56, 45,]
// console.log(e);
// console.log(c);

//Swap
// let a = 5; b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);



// let f = 5; k = 10;
// let org = f;
// f = k;
// k = org;
// console.log(f, k);

// let a = 5; b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);


// Destructuring with swap
// let a = 5; b = 10;
// [a, b] = [b, a];
// console.log(a, b);
