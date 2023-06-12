let loginBtn= document.querySelector('.login');
let loginForm = document.querySelector('.login-form-container');
let close = document.querySelector('#close-login-form');
loginBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});
close.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
