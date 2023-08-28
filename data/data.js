export let userData = JSON.parse(localStorage.getItem('userData')) || [{
  id: 123,
  username: 'Winium',
  password: '123',
  balance: 100
}, {
  id: 456,
  username: '1',
  password: '1',
  balance: 200
}];

function saveUserData() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

export function saveBalance(id) {
  userData.forEach((data) => {
    if(id === data.id) {
      localStorage.setItem('id', JSON.stringify(data.id));
      localStorage.setItem('username', JSON.stringify(data.username));
      localStorage.setItem('balance', JSON.stringify(data.balance));
    }
  });
}

export function updateBalanceData(id, updatedBalance) {
  userData.forEach((data) => {
    if(id === data.id) {
      data.balance = updatedBalance;
      saveUserData();
      localStorage.setItem('balance', JSON.stringify(data.balance));
    }
  });
}

