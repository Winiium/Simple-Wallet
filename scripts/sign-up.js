import {generateRandomId} from './utils/randomId.js';
import {signUpUserData} from '../data/data.js';
 
const inputUsername = document.querySelector('.js-input-username');
const inputPassword = document.querySelector('.js-input-password');
const inputConfirmPassword = document.querySelector('.js-input-confirm-password');
const signUpButton = document.querySelector('.js-sign-up-button');
const backButton = document.querySelector('.js-back-button');

signUpButton.addEventListener('click', () => {
  signUpUserData(
    generateRandomId(10), 
    inputUsername.value,
    inputPassword.value,
    inputConfirmPassword.value
  );
});

backButton.addEventListener('click', () => {
  const linkUrl = 'https://github.com/Winiium/Simple-Wallet/index.html';
  window.location.href = linkUrl;
  inputUsername.value = '';
  inputPassword.value = '';
  inputConfirmPassword.value = '';
});