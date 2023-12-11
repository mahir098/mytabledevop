

function tableReserve(){
    const guestName = document.getElementById('text').value;
    const emailId = document.getElementById('user-email').value;
    const dateOf = document.getElementById('Date').value;
    const time = document.getElementById('Time').value;
    const noOfGuest = document.getElementById('Number').value;

    console.log('Guest Name :', guestName);
    console.log('Email Id :', emailId);
    console.log('Date :',dateOf);
    console.log('Time : ', time);
    console.log('Number Of Guest :',noOfGuest);

    alert('Table Reserved');

    window.location.href = "index.html";
}