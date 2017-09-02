export function getCards (){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ({
        cards: [{
          id: "33243",
          title: "CSS!",
          priority: "High",
          status: "inProgress",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }, {
          id: "23432",
          title: "NPM setup!",
          priority: "High",
          status: "done",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }, {
          id: "1299",
          title: "Express connect!",
          priority: "High",
          status: "inQueue",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }
      ]
      });
    }, 1000)
  })
}

export default getCards;
