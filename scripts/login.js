import {userData, saveBalance} from '../data/data.js';

let verified = false;

const loginUsername = document.querySelector('.js-login-username');
const loginPassword = document.querySelector('.js-login-password');
const loginButton = document.querySelector('.js-login-button');

loginButton.addEventListener('click', () => {
  checkUserLoginAccount();
  verifyAccount();
});

function verifyAccount() {
  if(verified) {
    const linkUrl = 'https://github.com/Winiium/Simple-Wallet/wallet.html';
    window.location.href = linkUrl;
  } else {
    alert('Account cannot be found!');
  }
}

function checkUserLoginAccount() {
  userData.forEach((data) => {
    if(loginUsername.value === data.username) {
      if(loginPassword.value === data.password) {
        saveBalance(data.id);
        verified = true;
      }
    }
  });
} 