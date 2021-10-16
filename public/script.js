const emailForm = document.getElementById('contact-form');
const themeSwitch = document.getElementById('theme-switch');

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  let {name, email, message} = e.target;
  // console.log(`Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
  axios.post('/email', {
    name: name.value,
    email: email.value,
    message: message.value,
  })
  .then(response => {
    console.log(response);
    emailSent();
  })
  .catch(error => {
    console.error(error);
  });
});

themeSwitch.addEventListener('change', e => {
  let theme = (e.target.checked) ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);  
});

function emailSent() {
  while (emailForm.firstChild) {
    emailForm.removeChild(emailForm.firstChild);
  }

  let responseP = document.createElement('p');
  responseP.innerHTML = 'Your message has been sent';
  responseP.style.color = '#eee';
  emailForm.appendChild(responseP);
}

export default themeSwitch;