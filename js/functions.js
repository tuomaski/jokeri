let rowCount = 0;

document.querySelector('#generate').addEventListener('click', () => {
    const table = document.querySelector('#jokerTable');
    
    const row = table.insertRow();
    
    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell();
        const randomNum = Math.floor(Math.random() * 10);
        cell.textContent = randomNum;
    }
    
    rowCount++;
    document.querySelector('#rowCount').textContent = `Valmiita rivejä ${rowCount}`;
});
