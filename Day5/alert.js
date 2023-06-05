function add(){
   let firstnumber=document.getElementById("num1").value;
   let secondnumber=document.getElementById("num2").value;
   let total=parseInt(firstnumber) + parseInt(secondnumber);
   document.getElementById("output").value = String(total);

}
function sub(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    let total=parseInt(firstnumber) - parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
 }
 function mul(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    let total=parseInt(firstnumber) * parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
 }
 function div(){
    let firstnumber=document.getElementById("num1").value;
    let secondnumber=document.getElementById("num2").value;
    let total=parseInt(firstnumber) / parseInt(secondnumber);
    document.getElementById("output").value = String(total);
 
 }

