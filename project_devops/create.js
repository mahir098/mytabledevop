

function submitRegister(){
    const firstName = document.getElementById('name').value;
    const secondName = document.getElementById('name').value;
    const emailId = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('First Name :', firstName);
    console.log('Second Name :', secondName);
    console.log('emailid :', emailId);
    console.log('password :', password);
    
    alert('Account Created');

   window.location.href = "login.html";

}