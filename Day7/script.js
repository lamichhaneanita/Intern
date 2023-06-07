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

      fetch("https://rest-api-bjno.onrender.com/register", {
        method: "POST",
      
        headers: {
            "Content-type" :"application/json"
        },
        body: JSON.stringify(LoginData),
      })
      .then(res => res.json())
      .then(Data =>{
        console.log(Data)
        if(Data.success){
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
