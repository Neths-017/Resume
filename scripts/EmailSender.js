function sendEmail() {
  const serviceID = "service_q8ex3fc";
  const templateID = "template_zt40ugjn";
  const parms = {
    nametext: document.getElementById("nametext").value,
    Sub_text: document.getElementById("Sub_text").value,
    Customer_email: document.getElementById("Customer_email").value,
    mobile: document.getElementById("mobile").value,
    Message_text: document.getElementById("Message_text").value,
  };

  emailjs.send(serviceID, templateID, parms).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
