const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.innerText = currentYear;
