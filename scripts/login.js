const userData = [{
  username: 'Winium',
  password: '12345'
}];



const loginButton = document.querySelector('.js-login-button');
//const loginButtonLink = document.querySelector('.js-login-link');

loginButton.addEventListener('click', () => {
  const loginUsername = document.querySelector('.js-login-username');
  const loginPassword = document.querySelector('.js-login-password');
  let verification = false;
  userData.forEach((data) => {
    if(loginUsername.value === data.username) {
      if(loginPassword.value === data.password) {
        verification = true;
      }
    }
  });
  if(verification) {
    const linkUrl = 'wallet.html';
    window.location.href = linkUrl;
  } else {
    alert('Account cannot be found!');
  }
})