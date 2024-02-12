document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todoInput');
    const table = document.getElementById('todoTable');
    const sortButton = document.getElementById('sort');
    const todos = [];

    const addRow = () => {
        const newTodo = input.value;
        todos.push(newTodo);
        addTableRow(newTodo);
        input.value = '';
    }

    const deleteRow = (index) => {
        table.deleteRow(index);
        todos.splice(index, 1);
    }

    const addTableRow = (text) => {
        const row = table.insertRow();
        const col1 = row.insertCell(0);
        const col2 = row.insertCell(1);

        col1.innerHTML = text;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', () => {
            deleteRow(row.rowIndex);
        });
        col2.appendChild(deleteButton);
    }

    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addRow();
        }
    });

    sortButton.addEventListener('click', () => {
        todos.sort();
        table.innerHTML = '';
        todos.forEach(todo => {
            addTableRow(todo);
        });
    });
});
