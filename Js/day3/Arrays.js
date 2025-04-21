//arrays 



// const fruits = ["apple", "banana", "cherry"];


// console.log(fruits[0]); // Output: apple
// console.log(fruits[2]);


// fruits.push("Grapes")
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("Mango");
// console.log(fruits);



// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number) => number * number);

// console.log(squaredNumbers);

// const even = numbers.filter(num => num % 2 === 0) //what is the output of this line
// console.log(even); // Output: [2, 4]


// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); 

// numbers.forEach(num => console.log(num * 2));
// // Output: 2, 4, 6, 8, 10



// const matrix = [
//   [1, 2],
//   [3, 4, [45,90,[35]]],
//   [5, 6],
// ];



// console.log(matrix[1][2][2][0]); // Output: 5


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2)


// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// const number = [1, 2, 3, 4, 5];


// const even = number. filter(ar => ar % 2 === 0)

// console.log(even);



// const total = number.reduce((acc, num) => acc + num, 0)
// console.log(total); // Output: 15



// const names = ["Alice", "Bob", "Charlie"];

// names.forEach(name => console.log(name));




// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => [x, x * 10]);


// const products = [
//     { name: "T-shirt", sizes: ["S", "M", "L"] },
//     { name: "Jeans", sizes: ["M", "L"] },
//     { name: "Shoes", sizes: ["S", "M", "L", "XL"] },
//     { name: "Hat", sizes: ["S"] },
// ]
// const sizes = products.flatMap(product => product.sizes);
// console.log(sizes);



// const words = ["hello", "world", "javascript"];
// const chars = words.flatMap(word => word.split(""));
// console.log(chars);



// const products = [
//   { name: 'Classic Tee', sizes: ['S', 'M', 'L'] },
//   { name: 'V-Neck Tee', sizes: ['M', 'L'] },
//   { name: 'Oversized Tee', sizes: ['L', 'XL'] }
// ];
 
// const skus = products.flatMap(product =>
//   product.sizes.map(size => ({
//     product: product.name,
//     size: size
//   }))
// );
 
// console.log(skus);

