function sendEmail() {
  const parms = {
    nametext: document.getElementById("nametext").value,
    Sub_text: document.getElementById("Sub_text").value,
    Customer_email: document.getElementById("Customer_email").value,
    mobile: document.getElementById("mobile").value,
    Message_text: document.getElementById("Message_text").value,
  };

  emailjs
    .send("service_biizjvy", "template_ft2f7j5", parms)
    .then(alert("Sent!"));
}
