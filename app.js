document.getElementById('calculate-butten').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodExpenseAmount = foodInput.value;
    // console.log(foodExpenseAmount);

    const totalExpense = document.getElementById('expense-total');
    console.log(foodInput);
    totalExpense.innerText = foodInput.value;

    foodInput.value = '';

    const expenseTotal = document.getElementById('expense-total');
    const totalExpenseText = expenseTotal.innerText;
    const userExpenseTotal = parseFloat(totalExpenseText);
    const newExpense = userExpenseTotal + foodExpenseAmount;
    userExpenseTotal.innerText = newExpense;
})


