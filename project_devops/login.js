

function logIn(){
    const emailid = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    console.log('EmailId:', emailid);
    console.log('Password:', password);

    alert('Submitted');

    window.location.href = "index.html";
}