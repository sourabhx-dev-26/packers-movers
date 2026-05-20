document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const phoneInput = form.querySelector("input[name='phone']");

  phoneInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  form.addEventListener("submit", function(e) {
    if(phoneInput.value.length !== 10){
      e.preventDefault();
      alert("Please enter a valid 10-digit mobile number");
      phoneInput.focus();
    }
  });

  AOS.init({
    duration: 1000,
    once: true
  });
});