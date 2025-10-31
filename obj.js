//Object Destructuring

// let person = {
//     name: "kamran",
//     streetAddress: "peshawar",
//     isMarried: "single",
//     address:{
//         city: "Peshawar",
//         pincode: 4545,
//     }
// }

// let {name, streetAddress, isMarried, address: {pincode}, address:{city}} = person;

// console.log(name);
// console.log(streetAddress);
// console.log(isMarried);
// console.log(pincode);

//Basic destructuring in object
// let obj = {
//     name: 'ali',
//     age: 21,
// }
// let {name, age} = obj
// console.log(name, age);


//Destructuring with rest operator in objects
let obj = {
    name: 'ali',
    age: 21,
    city: 'peshawar',
    isMarried: false,
}

let {name, age, ...others} = obj;
console.log(name, age, others);





