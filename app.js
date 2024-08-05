let budget = 0;
let totalExpense = 0;
let budgetBtn = document.getElementById('budgetBtn')
budgetBtn.addEventListener('click', function(){
    budget = parseFloat(document.getElementById('budget').value) || 0 ;
    document.getElementById('para1').innerText = 'Budget = ' + budget;
    document.getElementById('budget').value = '';
    newBalance();
})
let expenseBtn = document.getElementById('expenseBtn');
expenseBtn.addEventListener('click',function(){
    let productName = document.getElementById('productName').value;
    let productCost = parseFloat(document.getElementById('productCost').value) || 0;
    addingExpense(productName,productCost);
    totalExpense  += productCost;
    document.getElementById('para2').innerText = 'Expenses = ' + totalExpense;
    document.getElementById('productName').value = '';
    document.getElementById('productCost').value = '';
    newBalance()
})
function newBalance(){
    let balance = budget - totalExpense;
    document.getElementById('para3').innerText = 'Balance = ' + balance;
}
function addingExpense(expense,cost){
    let expenseList = document.getElementById('expenseList')
    let expenseItem = document.createElement('div')
    expenseItem.className = 'expenseItem'

    let nameExp = document.createElement('span')
    nameExp.className = 'expenseName';
    nameExp.innerText = expense;
    
    let nameCos = document.createElement('span')
    nameCos.className = 'costName';
    nameCos.innerText = cost;

    let deletedBtn = document.createElement('button')
    deletedBtn.className = 'deletedBtn'
    deletedBtn.innerText = 'Deleted'
    deletedBtn.addEventListener('click',function(){
        totalExpense -= cost;
        document.getElementById('para2').innerText = 'Expenses = ' + totalExpense;
        newBalance()
        expenseList.removeChild(expenseItem);
    })
console.log();
    expenseItem.appendChild(nameExp);
    expenseItem.appendChild(nameCos);
    expenseItem.appendChild(deletedBtn);
    expenseList.appendChild(expenseItem);

}
document.getElementById('para1').innerText = 'Budget = ' + budget;
document.getElementById('para2').innerText = 'Expenses = ' + totalExpense;
newBalance()
