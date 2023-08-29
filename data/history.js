export let history = JSON.parse(localStorage.getItem('history')) || [{
  id: 123,
  records: [{
    date: 'August 29, 2023',
    time: '2:48 PM',
    type: 'Income',
    amount: '100,000,000',
    description: 'CEO'
  }]
}];

function saveHistory() {
  localStorage.setItem('history', JSON.stringify(history));
}

export function addHistory(id, date, time, type, amount, description) {
  let matchedId = false;
  const records = {
    date,
    time,
    type,
    amount,
    description
  };
  history.forEach((data) => {
    if(id === data.id) {
      data.records.push(records);
      matchedId = true;
    }
  });
  if(!matchedId) {
    history.push({
      id,
      records: [records]
    });
  }
  saveHistory();
}