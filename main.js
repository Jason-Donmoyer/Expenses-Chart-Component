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


const monExpCopy = document.getElementById('mon-expense-copy');
const tueExpCopy = document.getElementById('tue-expense-copy');
const wedExpCopy = document.getElementById('wed-expense-copy');
const thuExpCopy = document.getElementById('thu-expense-copy');
const friExpCopy = document.getElementById('fri-expense-copy');
const satExpCopy = document.getElementById('sat-expense-copy');
const sunExpCopy = document.getElementById('sun-expense-copy');

// Function to find the highest expense
// Sets color of highest expense chart and gets expense ratio
function getHighestExpense(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].amount > highestExpense) {
      highestExpense = arr[i].amount;
      highestExpenseDay = arr[i];
    }
  }
  let currentHighExpenseDay = document.getElementById(`${highestExpenseDay.day}-bar-graph`);
  currentHighExpenseDay.style.backgroundColor = 'var(--secondary-color)';

  currentHighExpenseDay.addEventListener('mouseenter', () => {
    currentHighExpenseDay.style.backgroundColor = 'var(--light-active-color)';
  });


  currentHighExpenseDay.addEventListener('mouseleave', () => {
    currentHighExpenseDay.style.backgroundColor = 'var(--secondary-color)';
  });
  
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
      monExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'tue':
      tueGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      tueExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'wed':
      wedGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      wedExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'thu':
      thuGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      thuExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'fri':
      friGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      friExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'sat':
      satGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      satExpCopy.innerText = `$${arr[i].amount}`;
      break;
      case 'sun':
      sunGraph.style.height = `${expenseRatio * arr[i].amount}px`;
      sunExpCopy.innerText = `$${arr[i].amount}`;
      break;
      default: console.log('Error');
      break;
    }
  }
}


function showPopup() {
  let barGraphs = document.querySelectorAll('.bar-graph');
  for (let i = 0; i < barGraphs.length; i++) {
    barGraphs[i].addEventListener('mouseenter', (e) => {
      // console.log(e.target.parentNode.children[0]);
      e.target.parentNode.children[0].style.visibility = 'visible';
    });
  }

  for (let i = 0; i < barGraphs.length; i++) {
    barGraphs[i].addEventListener('mouseleave', (e) => {
      // console.log(e.target.parentNode.children[0]);
      e.target.parentNode.children[0].style.visibility = 'hidden';
    });
  }
}



async function getExpenseData() {
  const res = await fetch('https://jason-donmoyer.github.io/JSON-Files/expenses-data.json');
  const data = await res.json();
  // console.log(data);
  data.forEach((obj) => expenseData.push(obj));
  getHighestExpense(expenseData);
  getGraphHeight(expenseData);
  showPopup();
}



getExpenseData()



