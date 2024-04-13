document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/nay')
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            data.forEach(item => {
                const row = document.createElement('tr');
                const keys = Object.keys(item);
                keys.forEach(key => {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                });
                dataList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
