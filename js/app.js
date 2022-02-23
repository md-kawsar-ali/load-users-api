function startApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => loadData(json))
}

function loadData(users) {
    for (const user of users) {
        const userTable = document.getElementById('users');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;
        userTable.appendChild(tr);
        document.querySelector('table.table').classList.remove('d-none');
    }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    startApi();
    event.target.classList.add('d-none');
});