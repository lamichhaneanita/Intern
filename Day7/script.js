function Register(){
    let fname = document.getElementById("name1").value;
    let Sname = document.getElementById("name2").value;
    let Email = document.getElementById("email").value;
    let NewPassword = document.getElementById("password1").value;
    let ConfirmPassword= document.getElementById("password2").value;
   

     let LoginData = {

        firstName : fname,
        lastName : Sname,
        email :  Email,
        password : NewPassword,
        password2 : ConfirmPassword

     };

//       fetch("https://rest-api-bjno.onrender.com/register", {
//         method: "POST",
//         headers: {
//             "Content-type" :"application/json"
//         },
//         body: JSON.stringify(LoginData),
//       })
//       .then(res => res.json())
//       .then(Data =>{
//         console.log(Data)
//         if(Data.success){
//            document.getElementById("message").textContent = "LoginSuccess";  
//         }
//         else{
//             document.getElementById("message").textContent = "LoginUnSuccess";
//         }
//       })
//       .catch(error => {
//         console.error("Error:", error);
//     })
// }  
fetch("https://rest-api-bjno.onrender.com/register", {
   method: "POST",
   headers: {
       "Content-type" :"application/json"
   },
   body: JSON.stringify(LoginData),
 })
 .then(res => res.json())
 .then(data =>{
   console.log(data)
   const {firstName,lastName} = data
   console.log(firstName,lastName)
   const dlist = document.getElementById('Userlist')
   const list= document.createElement('li')
   list.textContent = `Fullname: ${firstName} ${lastName}`
   dlist.appendChild(list);
   // document.getElementById('Userlist').textContent = `Full Name : ${firstName} ${lastName}`;

   if(data.success){
      document.getElementById("message").textContent = "LoginSuccess";  
   }
   else{
       document.getElementById("message").textContent = "LoginUnSuccess";
   }
 })
 .catch(error => {
   console.error("Error:", error);
})
}  

function submit(){
fetch('https://rest-api-bjno.onrender.com/users',{
   method: 'GET',

})
.then(res => res.json())
.then(data =>{
   const container = document.getElementById('Userlist')
   container.innerHTML= '';
    for(let i=0; i < data.length ; i++){
      const item = data[i];
      const fullname = 'Full Name :'+ item.firstName + ' ' + item.lastName ;
      const listItem = document.createElement('li');
      listItem.textContent = fullname;
      container.appendChild(listItem);
    }
   })
   .catch(error =>{
      console.error('Error:',error);
   });
}

//  async function Register(){
//   let fname = document.getElementById("name1").value;
//   let Sname = document.getElementById("name2").value;
//   let Email = document.getElementById("email").value;
//   let NewPassword = document.getElementById("password1").value;
//   let ConfirmPassword= document.getElementById("password2").value;
 

//    let LoginData = {

//       firstName : fname,
//       lastName : Sname,
//       email :  Email,
//       password : NewPassword,
//       password2 : ConfirmPassword

//    };
//    try{
//   const response = await fetch("https://rest-api-bjno.onrender.com/register", {
//   method: "POST",
//   headers: {
//       "Content-type" :"application/json"
//   },
//   body: JSON.stringify(LoginData),
// })
//   if(response.ok){
//      const data = await response.json();

//      console.log(data);
//   }
//   else{
//      console.log('Error:',response.status)
//   }

// }
// catch(error) {
//   console.log("Error:", error);

// }
// }   

// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];

// const copyarr=[...arr1,...arr2];
// console.log(copyarr);

