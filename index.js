document.addEventListener("DOMContentLoaded", function () {
    const transactionForm = document.getElementById("transaction-form");
    const chartContainer = document.getElementById("chart-container");
    const transactionsList = document.getElementById("transactions-list");
    const transactions = [];

    transactionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById("amount").value);
        const category = document.getElementById("category").value;

        if (!isNaN(amount) && category !== "") {
            transactions.push({ amount, category });
            updateTransactionsList();
            transactionForm.reset();
        }
    });

    function updateTransactionsList() {
        transactionsList.innerHTML = "";

        transactions.forEach((transaction, index) => {
            const transactionItem = document.createElement("li");
            transactionItem.innerHTML = `
                ${transaction.category}: $${transaction.amount.toFixed(2)}
                <button class="btn btn-sm btn-danger mx-2" onclick="deleteTransaction(${index})">Delete</button>
                <button class="btn btn-sm btn-secondary" onclick="editTransaction(${index})">Edit</button>
            `;
            transactionsList.appendChild(transactionItem);
        });

        updateChart();
    }

    function updateChart() {
    
    }

    window.deleteTransaction = function (index) {
        transactions.splice(index, 1);
        updateTransactionsList();
    };

    
    window.editTransaction = function (index) {
        const editedAmount = parseFloat(prompt("Enter new amount:"));
        if (!isNaN(editedAmount)) {
            transactions[index].amount = editedAmount;
            updateTransactionsList();
        }
    };

    // You can implement the chart creation function using a chart library of your choice here
});
