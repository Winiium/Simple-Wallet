import {updateBalanceData} from '../data/data.js';
import {addHistory} from '../data/history.js';
import {currentDate, getCurrentMonth, getCurrentTime} from './utils/date.js';

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

logoutButton.addEventListener('click', () => {
  const linkUrl = 'login.html';
  window.location.href = linkUrl;
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
    balance += Number(inputAmount.value);
  } else if(selectedOption.innerHTML === 'Expense') {
    balance -= Number(inputAmount.value);
  }
  inputAmount.value = '';
  showInput(false);
  updateBalance();
  addHistory(
    id, 
    `${getCurrentMonth} ${currentDate.getDay()}, ${currentDate.getFullYear()}`,
    getCurrentTime(),
    selectedOption.innerHTML,
    inputDescription.value
    );
});

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