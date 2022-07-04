// Variables
const expenseData = [];
let highestExpense = 0;
let expenseRatio = 0;
let highestExpenseDay = [];


const monGraph = document.getElementById('mon-bar-graph');
const tueGraph = document.getElementById('tue-bar-graph');
const wedGraph = document.getElementById('wed-bar-graph');
const thuGraph = document.getElementById('thu-bar-graph');
const friGraph = document.getElementById('fri-bar-graph');
const satGraph = document.getElementById('sat-bar-graph');
const sunGraph = document.getElementById('sun-bar-graph');

function getHighestExpense(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].amount > highestExpense) {
      highestExpense = arr[i].amount;
      highestExpenseDay = arr[i];
    }
  }
  document.getElementById(`${highestExpenseDay.day}-bar-graph`).style.backgroundColor = 'var(--secondary-color)';
  getExpenseRatio();
}


function getExpenseRatio() {
  expenseRatio = 150 / highestExpense;
}




function getGraphHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].day) {
      case 'mon':
      monGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'tue':
      tueGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'wed':
      wedGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'thu':
      thuGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'fri':
      friGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'sat':
      satGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      case 'sun':
      sunGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      console.log(expenseRatio * arr[i].amount);
      break;
      default: console.log('Error');
      break;
    }
  }
}



async function getExpenseData() {
  const res = await fetch('https://jason-donmoyer.github.io/JSON-Files/expenses-data.json');
  const data = await res.json();
  // console.log(data);
  data.forEach((obj) => expenseData.push(obj))
  getHighestExpense(expenseData);
  getGraphHeight(expenseData);
}



getExpenseData()



