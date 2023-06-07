let total=0;

function add(){
   let firstnumber=document.getElementById("num1").value;
   let secondnumber=document.getElementById("num2").value;
   total=parseInt(firstnumber) + parseInt(secondnumber);
   document.getElementById("output").value = String(total);

}
function sub(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    total=parseInt(firstnumber) - parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
 }
 function mul(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    total=parseInt(firstnumber) * parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
 }
 function div(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    total=parseInt(firstnumber) / parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
//  }
// async function fetchdata(){
// const data= await fetch("https://jsonplaceholder.typicode.com/posts")

// console.log(data.json())
//  }

 fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'anita',
        body: 'bar',
        userId: 1,
    }),
    headers:{ 'Content-type': 'application/json'}
 })
 .then((response)=> response.json())
 .then((json) => console.log(json));
  

fetch('https://jsonplaceholder.typicode.com/posts/3', {
    method: 'DELETE',
    body: JSON.stringify({
        title: 'anita',
        body: 'bar',
        userId: 3,
    }),
    headers:{ 'Content-type': 'application/json'}
 })
 .then((response)=> response.json())
 .then((json) => console.log(json));


//  let sub = function(a,b){
//    return(a-b);
//  }
//  let total= sub(4,2);
//  document.getElementById("demo").innerHTML = total;

// function Welcome(Role){
//    if (Role=="Intern"){
//       return"Welcome";
//    }
// else
// {
//      return"Not Welcome";
// }
// }
//  const result = Welcome("intern");
//  console.log(result) 

// let check = (num) => {
//    if(num%2==0){
//       return("even")
//    }
//    else{
//       return("odd")
//    }
// }
// console.log(check)

