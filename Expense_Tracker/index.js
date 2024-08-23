document.getElementById('expense-form').addEventListener('submit',function(event){
    event.preventDefault();

    const expense_amount = document.getElementById('expense_amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    if (expense_amount && description && category) {
        
        const expense = {
            expense_amount:expense_amount,
            description:description,
            category:category
        };

        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

        expenses.push(expense);

        localStorage.setItem('expenses', JSON.stringify(expenses));

        display_expenses();

        document.getElementById('expense-form').reset();

    } else{
        alert('Please fill in all fields');
    }
});

    function display_expenses() {

        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

        const expense_list = document.getElementById('expense-items');

        expense_list.innerHTML = '';

        expenses.forEach((expense, index) => {
            const list_item = document.createElement('li');
            list_item.className = 'list-group-item d-flex justify-content-between align-items-center';
            list_item.textContent = `${expense.expense_amount} - ${expense.description} - ${expense.category}`;

            const edit_button = document.createElement('button');
            edit_button.textContent = 'Edit';
            edit_button.className = 'btn btn-warning btn-sm mx-2';
            edit_button.onclick = () => edit_expense(index);

            const delete_button = document.createElement('button');
            delete_button.textContent = 'Delete';
            delete_button.className = 'btn btn-danger btn-sm mx-2';
            delete_button.onclick = () => delete_expense(index);
            
            list_item.appendChild(edit_button);
            list_item.appendChild(delete_button);
            expense_list.appendChild(list_item);
        });
    }
    function edit_expense(index) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const expense = expenses[index];

        document.getElementById('expense_amount').value = expense.expense_amount;
        document.getElementById('description').value = expense.description;
        document.getElementById('category').value = expense.category;

        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        display_expenses();
    }

    function delete_expense(index) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        display_expenses();
    }

    display_expenses();