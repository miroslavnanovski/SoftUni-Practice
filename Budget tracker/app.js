import { fetchExchangeRate,currencyExchange } from "./currencyConverter.js";

const incomeAmount = document.getElementById("income-amount");
const incomeDescription = document.getElementById("income-description");
const balanceShow = document.getElementById("balance");
const expenseAmout = document.getElementById("expense-amount");
const expenseDescription = document.getElementById("expense-description")

const transactionList = document.getElementById("transactions");
const expenseCategory = document.getElementById("expense-category");
const incomeCategory = document.getElementById("income-category");


const addBtn = document.getElementById("add-income");
const removeBtn = document.getElementById("add-expense");

function loadBudgetData() {
    const storedData = localStorage.getItem('budgetData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return {
        balance: 0,
        income: 0,
        expenses: 0
    };
}

let budgetData = loadBudgetData();

// Update the balance display on page load
balanceShow.textContent = budgetData.balance;

function saveBudgetData() {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
}


function addIncome(){
    let valueToAdd = Number(incomeAmount.value);
    let description = incomeDescription.value;
    if(!valueToAdd || !description){
        alert(`All fields are required!`)
        return;
    }

    budgetData.income += valueToAdd;
    budgetData.balance+= valueToAdd;
    balanceShow.textContent = budgetData.balance;

    createListElement(description,valueToAdd,'income',incomeCategory.value);



     incomeAmount.value = ''
     incomeDescription.value = ''
     saveBudgetData();

    
}

addBtn.addEventListener('click',function(e){
    e.preventDefault()
    console.log(balance);
    addIncome()
});

function addExpense(){
    let valueToRemove = Number(expenseAmout.value);
    let description = expenseDescription.value;
    if(!valueToRemove || !description){
        alert(`All fields are required!`)
        return;
    }

    budgetData.expenses += valueToRemove;
    budgetData.balance -= valueToRemove;
    balanceShow.textContent = budgetData.balance;


        //BALANCE GOES BELOW FEAUTURE NOT NECCESSARY FOR NOW!
    // if(budgetData.balance < 0){
    //     alert('Balance cannot be less than zero!')
    //     budgetData.balance = 0;
    //     balanceShow.textContent = budgetData.balance;
    //     saveBudgetData();
    //     return;

    // }

    createListElement(description,valueToRemove,'expense',expenseCategory.value);

    expenseAmout.value = '';
    expenseDescription.value = '';

    saveBudgetData();
    
}

removeBtn.addEventListener('click',function(e){
    e.preventDefault();
    addExpense();
});

function createListElement(description,amount,type,category){

    const newElement = document.createElement('li');
    newElement.textContent = `${description} : ${amount}`;
    newElement.classList.add(`${category}`);
    const newTag = document.createElement('a');
    newTag.classList.add('removable');
    newTag.textContent = 'X';
    newElement.appendChild(newTag);

    if(type === 'income'){
        newElement.classList.add('incomeItem')
    } else if(type === 'expense') {
        newElement.classList.add('expenseItem')
    }

    newTag.addEventListener('click', function(e){
        newElement.remove();

        if(type ==='income'){
            balanceShow.textContent = budgetData.balance - amount
            budgetData.balance = budgetData.balance - amount;
        } else if(type==='expense'){
            balanceShow.textContent = budgetData.balance + amount
            budgetData.balance = budgetData.balance + amount;
        }
       
    })

    saveBudgetData();

    transactionList.appendChild(newElement);

}

function rebuildTransactionList() {
    balanceShow.textContent = budgetData.balance;
}

document.addEventListener('DOMContentLoaded', function () {
    rebuildTransactionList();
});

function resetBudget() {
    // Reset budget data
    budgetData = {
        balance: 0,
        income: 0,
        expenses: 0
    };

    // Update the display
    balanceShow.textContent = budgetData.balance;
    
    // Clear transaction list in the UI
    transactionList.innerHTML = '';

    // Save the reset data to localStorage
    saveBudgetData();
}

// Event listener for the reset button
const resetBtn = document.getElementById('reset-budget');
resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to reset the budget? This will clear all data.')) {
        resetBudget();
    }
});

const currencySelect = document.getElementById('currency');
        const currencySymbol = document.getElementById('currency-symbol');
        const balanceDisplay = document.getElementById('balance');

        currencySelect.addEventListener('change', async function() {
            let baseCurrency = document.getElementById('currency-symbol').textContent;
            const currency = this.value;
            currencySymbol.textContent = currency;
            updateCurrencySymbols(this.value);

            let amountToExchange = Number(balanceShow.textContent)
            
            let exchangedValue = await currencyExchange(amountToExchange,baseCurrency,currency)

            console.log(exchangedValue);
            

            balanceShow.textContent = exchangedValue.toFixed(2);


            
            

        });

        function updateCurrencySymbols(symbol) {
            // Update all displayed currency symbols (balance, transactions, etc.)
            document.querySelectorAll('.transaction-currency').forEach(element => {
                element.textContent = symbol;
            });
        }

        // You may also want to handle currency conversion if needed
