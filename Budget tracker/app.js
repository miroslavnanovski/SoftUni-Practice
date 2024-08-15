let balance = 0;


const incomeAmount = document.getElementById("income-amount");
const balanceShow = document.getElementById("balance");
const expenseAmout = document.getElementById("expense-amount");


const addBtn = document.getElementById("add-income");
const removeBtn = document.getElementById("add-expense");


function addIncome(){
    let valueToAdd = Number(incomeAmount.value);
    balance+= valueToAdd;
    balanceShow.textContent = balance;
    
}

addBtn.addEventListener('click',function(e){
    console.log(balance);
    addIncome()
});

function addExpense(){
    let valueToRemove = Number(expenseAmout.value);
    balance -= valueToRemove;
    balanceShow.textContent = balance;
    
}

removeBtn.addEventListener('click',addExpense);