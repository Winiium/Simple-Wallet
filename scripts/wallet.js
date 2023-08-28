
const username = JSON.parse(localStorage.getItem('username'));
let balance = JSON.parse(localStorage.getItem('balance'));

document.querySelector('.js-welcome-user')
  .innerHTML = `Welcome, ${username}`;
const htmlBalance = document.querySelector('.js-balance');
updateBalance();

const incomeButton = document.querySelector('.js-income');
const expenseButton = document.querySelector('.js-expense');
const amountDescription = document.querySelector('.js-amount-description');
const selectedOption = document.querySelector('.js-selected-option');
const inputAmount = document.querySelector('.js-input-amount');
const doneButton = document.querySelector('.js-done-button');


incomeButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Income';
  doneButton.addEventListener('click', () => {
    balance =+ Number(inputAmount.value);
    showInput(false);
  })
});

incomeButton.addEventListener('click', () => {
  showInput(true);
  selectedOption.innerHTML = 'Expense';
  doneButton.addEventListener('click', () => {
    balance =- Number(inputAmount.value);
    showInput(false);
  })
});

function updateBalance() {
  htmlBalance.innerHTML = `Php ${balance}`;
}

function showInput(condition) {
  if(condition) {
    amountDescription.classList.add('amount-description-show');
  } else {
    amountDescription.classList.remove('amount-description-show');
  }
  
}
