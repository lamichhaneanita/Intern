// const items=[
//     {name: 'book', price:100},
//     {name: 'bag', price:1000},
//     {name: 'pencil', price: 500},
//     {name:'bus', price: 600}, 
// ]
// const filtereditems = items.filter((item)=>{
//     return item.price <= 6000
// })
// console.log(filtereditems)

// Array Methods 
// convert to string 
let num=[1,2,3,4]
let num1=[11,9,22,,2,33,44]
let b = num.toString()
console.log(b)
// join method
let c= num.join("and")
console.log(c)

// pop method 
num.pop()
console.log(num)
// push method 
num.push(7)
console.log(num)
// shift method
num.shift()
console.log(num)

// unshift method 
num.unshift(0)
console.log(num)

// Delete
// delete num[2]
// console.log(num.length)

// concat method
let d= num.concat(num1)
console.log(d)

// sort
num1.sort()
console.log(num1)