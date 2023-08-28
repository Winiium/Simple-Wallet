import {updateBalanceData} from '../data/data.js';

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
const doneButton = document.querySelector('.js-done-button');

logoutButton.addEventListener('click', () => {
  const linkUrl = 'login.html';
  window.location.href = linkUrl;
});

incomeButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Income';
  doneButton.addEventListener('click', () => {
    balance += Number(inputAmount.value);
    inputAmount.value = '';
    showInput(false);
    updateBalance();
  })
});

expenseButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Expense';
  doneButton.addEventListener('click', () => {
    balance -= Number(inputAmount.value);
    inputAmount.value = '';
    showInput(false);
    updateBalance();
  })
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
