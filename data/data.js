export const userData = [{
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

export function saveBalance(id) {
  userData.forEach((data) => {
    if(id === data.id) {
      localStorage.setItem('username', JSON.stringify(data.username));
      localStorage.setItem('balance', JSON.stringify(data.balance));
    }
  });
}
