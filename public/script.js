const submitBtn = document.getElementById('contact-submit');
const themeSwitch = document.getElementById('theme-switch');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
});

themeSwitch.addEventListener('change', e => {
  let theme = (e.target.checked) ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);  
});