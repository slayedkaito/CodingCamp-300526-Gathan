// ─── DOM References ───────────────────────────────────────────────────────────

const form            = document.getElementById('transaction-form');
const itemNameInput   = document.getElementById('item-name');
const amountInput     = document.getElementById('amount');
const categoryInput   = document.getElementById('category');
const transactionList = document.getElementById('transaction-list');
const totalBalanceEl  = document.getElementById('total-balance');
const chartCtx        = document.getElementById('expense-chart').getContext('2d');

// ─── State ────────────────────────────────────────────────────────────────────

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let expenseChart;

// ─── Chart ────────────────────────────────────────────────────────────────────

const CATEGORIES = ['Food', 'Transport', 'Fun'];
const CATEGORY_COLORS = {
    Food:      '#34C759',
    Transport: '#007AFF',
    Fun:       '#FF9500',
};

function updateChart() {
    const totals = CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: 0 }), {});

    transactions.forEach(({ category, amount }) => {
        if (totals[category] !== undefined) totals[category] += amount;
    });

    if (expenseChart) expenseChart.destroy();

    expenseChart = new Chart(chartCtx, {
        type: 'pie',
        data: {
            labels: CATEGORIES,
            datasets: [{
                data: CATEGORIES.map(cat => totals[cat]),
                backgroundColor: CATEGORIES.map(cat => CATEGORY_COLORS[cat]),
                borderWidth: 0,
                hoverOffset: 4,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { usePointStyle: true, boxWidth: 8 },
                },
            },
        },
    });
}

// ─── Balance ──────────────────────────────────────────────────────────────────

function updateBalance() {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    totalBalanceEl.textContent = `$${total.toFixed(2)}`;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderTransactions() {
    transactionList.innerHTML = '';

    transactions.forEach(({ id, name, amount, category }) => {
        const li = document.createElement('li');
        li.className = 'transaction-item';

        li.innerHTML = `
            <div class="transaction-info">
                <span class="transaction-name">${name}</span>
                <span class="transaction-amount">$${amount.toFixed(2)}</span>
                <span class="transaction-category">${category}</span>
            </div>
            <button class="btn-delete" data-id="${id}">Delete</button>
        `;

        transactionList.appendChild(li);
    });
}

// ─── Delete ───────────────────────────────────────────────────────────────────

// Event delegation — one listener handles all delete buttons
transactionList.addEventListener('click', (e) => {
    if (!e.target.matches('.btn-delete')) return;

    const id = Number(e.target.dataset.id);
    transactions = transactions.filter(t => t.id !== id);
    syncAndRender();
});

// ─── Add Transaction ──────────────────────────────────────────────────────────

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTransaction = {
        id:       Date.now(),
        name:     itemNameInput.value.trim(),
        amount:   parseFloat(amountInput.value),
        category: categoryInput.value,
    };

    transactions.push(newTransaction);
    form.reset();
    syncAndRender();
});

// ─── Sync ─────────────────────────────────────────────────────────────────────

function syncAndRender() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    renderTransactions();
    updateBalance();
    updateChart();
}

// ─── Init ─────────────────────────────────────────────────────────────────────

syncAndRender();
