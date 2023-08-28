import {userData, saveBalance} from '../data/data.js';

let verified = false;

const loginUsername = document.querySelector('.js-login-username');
const loginPassword = document.querySelector('.js-login-password');
const loginButton = document.querySelector('.js-login-button');

loginButton.addEventListener('click', () => {
  checkUserAccount();
  verifyAccount();
});

function verifyAccount() {
  if(verified) {
    const linkUrl = 'wallet.html';
    window.location.href = linkUrl;
  } else {
    alert('Account cannot be found!');
  }
}

function checkUserAccount() {
  userData.forEach((data) => {
    if(loginUsername.value === data.username) {
      if(loginPassword.value === data.password) {
        verified = true;
        saveBalance(data.id);
      }
    }
  });
} 