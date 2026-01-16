document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("ohcCJVqVd5bS6-QEL");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_h8cer88",
      "template_ozdg4we",
      form
    ).then(
      function () {
        alert("Message sent successfully ✅");

        form.reset(); // 🔥 clears all input fields
      },
      function (error) {
        alert("Failed to send message ❌");
        console.error(error);
      }
    );
  });

});
