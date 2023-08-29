export let history = [{
  id: 123,
  records: [{
    date: 1,
    time: 2,
    type: 2,
    description: 3
  }]
}, {
    id: 456,
    records: [{
      date: 1,
      time: 2,
      type: 2,
      description: 3
    }]
}];

export function addHistory(id, date, time, type, description) {
  let matchedId;
  history.forEach((data) => {
    if(id === data.id) {
      matchedId = data;
    }
  });

  if(matchedId) {
    matchedId.records.push({
      date,
      time,
      type,
      description
    });
  } else {
    history.push({
      id,
      records: [{
        date,
        time,
        type,
        description
      }]
    });
  }
}