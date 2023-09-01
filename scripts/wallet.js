import {updateBalanceData} from '../data/data.js';
import {history, addHistory} from '../data/history.js';
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
let incomeExpense = '';
const inputAmount = document.querySelector('.js-input-amount');
const inputDescription = document.querySelector('.js-input-description');
const doneButton = document.querySelector('.js-done-button');
const recordHistoryHTML = document.querySelector('.js-record-history');
updateRecordHistoryHTML();
//BUTTONS

logoutButton.addEventListener('click', () => {
  const linkUrl = '/index.html';
  window.location.href = linkUrl;
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  localStorage.removeItem('balance');
});

incomeButton.addEventListener('click', () => {
  showInput(true, 'Income');
});

expenseButton.addEventListener('click', () => {
  showInput(true, 'Expense');
});

doneButton.addEventListener('click', () => {
  if(incomeExpense === 'Income') {
    balance = numToString(stringToNum(balance) + Number(inputAmount.value));
  } else if(incomeExpense === 'Expense') {
    balance = numToString(stringToNum(balance) - Number(inputAmount.value));
  }
  updateBalance();
  addHistory(
    id, 
    getCurrentDate(),
    getCurrentTime(),
    incomeExpense,
    inputAmount.value,
    inputDescription.value
  );
  updateRecordHistoryHTML()
  inputAmount.value = '';
  inputDescription.value = '';
  showInput(false);
});

//FUNCTIONS

function updateBalance() {
  htmlBalance.innerHTML = `&#8369; ${balance}`;
  updateBalanceData(id, balance);
}

function showInput(condition, option) {
  if(condition) {
    amountDescription.classList.add('amount-description-show');
    selectedOption.innerHTML = `Add ${option}:`;
    incomeExpense = option;
  } else {
    amountDescription.classList.remove('amount-description-show');
    selectedOption.innerHTML = `Add ${option}:`;
    incomeExpense = option;
  }
  
}

function updateRecordHistoryHTML() {
  let historyHTML = ``;
  history.forEach((data) => {
    if(id === data.id) {
      for(let i = data.records.length - 1; i >= 0; i--) {
        historyHTML += `
          <div class="records">
            <div class="date">${data.records[i].date} ${data.records[i].time}</div>
            <div class="content"><span class="${data.records[i].type}">${data.records[i].type}</span> &#8369;${data.records[i].amount} - ${data.records[i].description}</div>
          </div>
        `;
      }
    }
  });
  recordHistoryHTML.innerHTML = historyHTML;
}