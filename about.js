// Data Storage for Transactions
const transactions = [];

// Function to add a transaction
function addTransaction(type, amount) {
    transactions.push({ type, amount: parseFloat(amount) });
    updateDashboard();
}

// Function to calculate total income, expenses, and balance
function calculateTotals() {
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    });

    return { income, expenses, balance: income - expenses };
}

// Function to update the dashboard
function updateDashboard() {
    const totals = calculateTotals();
    document.getElementById('income').textContent = totals.income.toFixed(2);
    document.getElementById('expenses').textContent = totals.expenses.toFixed(2);
    document.getElementById('balance').textContent = totals.balance.toFixed(2);
}

// Example Usage
addTransaction('income', 5000); // Adding example income
addTransaction('expense', 1200); // Adding example expense
