// // const items=[
// //     {name: 'book', price:100},
// //     {name: 'bag', price:1000},
// //     {name: 'pencil', price: 500},
// //     {name:'bus', price: 600}, 
// // ]
// // const filtereditems = items.filter((item)=>{
// //     return item.price <= 6000
// // })
// // console.log(filtereditems)

// // Array Methods 
// // convert to string 
// let num=[1,2,3,4]
// let num1=[11,9,22,,2,33,44]
// let b = num.toString()
// console.log(b)
// // join method
// let c= num.join("and")
// console.log(c)

// // pop method 
// num.pop()
// console.log(num)
// // push method 
// num.push(7)
// console.log(num)
// // shift method
// num.shift()
// console.log(num)

// // unshift method 
// num.unshift(0)
// console.log(num)

// // Delete
// // delete num[2]
// // console.log(num.length)

// // concat method
// let d= num.concat(num1)
// console.log(d)

// // sort
// num1.sort()
// console.log(num1)

// // filter age
// const ages=[18,30,6,28];
// const filteredage = ages.filter(ages => ages >= 18);
// console.log(filteredage);


// const users =[
//     { name: 'anita ', age: 20, gender :'female'},
//     { name: 'ram ', age: 25, gender :'male'},
//     { name: 'sita ', age: 15, gender :'female'},
//     { name: 'shyam ', age: 40, gender :'male'},
// ];
// const filtereduser = users.filter(users => users.age >= 15 && users.gender == 'female');
// console.log(filtereduser);

// const numbers =[2,1,5,8,9,4];

// const oddnumber = numbers.filter(numbers => numbers % 2 !== 0);
// const evennumber = numbers.filter(numbers => numbers % 2 == 0);
// console.log(oddnumber);
// console.log(evennumber);

// map
// const number=[1,2,3,4,5,6];
// const newnumber = number.map(function(number){
//     return number*2;
// })
// console.log(newnumber)
// const numbers =[2,1,5,8,9,4];
// const numbers =[2,1,5,8,9,4];
// const oddnumber = numbers.map(numbers => numbers % 2 !== 0);
// const evennumber = numbers.map(numbers => numbers % 2 == 0);
// console.log(oddnumber);
// console.log(evennumber);

// const employees = [
//     { name: 'John', age: 32, department: 'HR' },
//     { name: 'Sarah', age: 28, department: 'Marketing' },
//     { name: 'Michael', age: 40, department: 'Finance' },
//     { name: 'Emily', age: 35, department: 'HR' }
//   ];

//   const employeename = employees.map(function(employee){
//     return employee.name;
//   })
//   console.log(employeename)

// const colors = ['red', 'green', 'blue'];

// colors.forEach((color, index) => {
//   console.log(color , index+1);
// });

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((fruit )=> {
//     console.log(fruit )
// });

// const firstname =['anita','mabisha', 'poonam', 'puspa'];

// for(let i =0; i< firstname.length; i++){
//     console.log(firstname[i])
// }

const arr =[1,2,3,4];
let arr2 = arr.map(num => num*2);
console.log(arr2)