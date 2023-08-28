const username = JSON.parse(localStorage.getItem('username'));
let balance = JSON.parse(localStorage.getItem('balance'));

document.querySelector('.js-welcome-user')
  .innerHTML = `Welcome, ${username}`;
const htmlBalance = document.querySelector('.js-balance');

htmlBalance.innerHTML = `Php ${balance}`;