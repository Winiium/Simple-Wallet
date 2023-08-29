import {updateBalanceData} from '../data/data.js';
import {addHistory} from '../data/history.js';
import {getCurrentDate, getCurrentTime} from './utils/date.js';
import {numToString, stringToNum} from './utils/formatNumber.js';

const id = JSON.parse(localStorage.getItem('id'));
const username = JSON.parse(localStorage.getItem('username'));
let balance = JSON.parse(localStorage.getItem('balance'));

document.querySelector('.js-welcome-user')
  .innerHTML = `Welcome, ${username}`;
const htmlBalance = document.querySelector('.js-balance');
updateBalance();

const logoutButton = document.querySelector('.js-logout-button');
const incomeButton = document.querySelector('.js-income');
const expenseButton = document.querySelector('.js-expense');
const amountDescription = document.querySelector('.js-amount-description');
const selectedOption = document.querySelector('.js-selected-option');
const inputAmount = document.querySelector('.js-input-amount');
const inputDescription = document.querySelector('.js-input-description');
const doneButton = document.querySelector('.js-done-button');

//BUTTONS

logoutButton.addEventListener('click', () => {
  const linkUrl = 'login.html';
  window.location.href = linkUrl;
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  localStorage.removeItem('balance');
});

incomeButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Income';
});

expenseButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Expense';
});

doneButton.addEventListener('click', () => {
  if(selectedOption.innerHTML === 'Income') {
    balance = numToString(stringToNum(balance) + Number(inputAmount.value));
  } else if(selectedOption.innerHTML === 'Expense') {
    balance = numToString(stringToNum(balance) - Number(inputAmount.value));
  }
  updateBalance();
  addHistory(
    id, 
    getCurrentDate(),
    getCurrentTime(),
    selectedOption.innerHTML,
    inputAmount.value,
    inputDescription.value
  );
  inputAmount.value = '';
  inputDescription.value = '';
  showInput(false);
});

//FUNCTIONS

function updateBalance() {
  htmlBalance.innerHTML = `Php ${balance}`;
  updateBalanceData(id, balance);
}

function showInput(condition) {
  if(condition) {
    amountDescription.classList.add('amount-description-show');
  } else {
    amountDescription.classList.remove('amount-description-show');
  }
  
}
