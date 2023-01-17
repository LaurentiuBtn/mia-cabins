function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "laur.btn@gmail.com",
        Password : "MyProjectAFrame",
        To : 'laur.btn@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value


    }).then(
      message => alert("Message Sent Succesfully")
    ); 
}