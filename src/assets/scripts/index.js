const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.innerText = currentYear;

const contactForm = document.querySelector("#contact-form");

const handleSubmit = (event) => {
  event.preventDefault()
  let myForm = event.target
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

contactForm.addEventListener("submit", handleSubmit);
