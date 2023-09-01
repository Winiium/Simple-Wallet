export let userData = JSON.parse(localStorage.getItem('userData')) || [{
  id: 123,
  username: 'Winium',
  password: '123',
  balance: '100,000,000'
}];

function saveUserData() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

export function signUpUserData(id, username, password, confirmPassword) {
  let matchedUsername = false;
  let matchedPassword = password === confirmPassword;
  userData.forEach((data) => {
    if(username === data.username) {
      matchedUsername = true;
    }
  });

  if(!matchedUsername && matchedPassword) { //false && false
    userData.push({
      id,
      username,
      password,
      balance: '0'
    });
    saveUserData();
    alert('Sign up successful'); //https://Winiium.github.io/Simple-Wallet/
    const linkUrl = 'https://Winiium.github.io/Simple-Wallet/index.html';
    window.location.href = linkUrl;
  } else {
    if(matchedPassword) {
      alert('Username is already taken');
    } else { 
      if(!matchedUsername) {
        alert('Password is not matched');
      } else {
        alert('Username is already taken and password is not matched');
      }
    }
  }
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

