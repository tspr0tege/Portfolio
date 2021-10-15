const emailForm = document.getElementById('contact-form');
const themeSwitch = document.getElementById('theme-switch');

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  let {name, email, message} = e.target;
  console.log(`Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
  axios.post('/email', {
    name: name.value,
    email: email.value,
    message: message.value,
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
});

themeSwitch.addEventListener('change', e => {
  let theme = (e.target.checked) ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);  
});

export default themeSwitch;