// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault(); 
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellBtn = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(id);
    let textName = document.createTextNode(name);
    let textExt = document.createTextNode(ext);
    let textEmail = document.createTextNode(email);
    let textDept = document.createTextNode(department);

    cellID.appendChild(textID);
    table.appendChild(cellID);

    cellName.appendChild(textName);
    table.appendChild(cellName);

    cellExt.appendChild(textExt);
    table.appendChild(cellExt);

    cellEmail.appendChild(textEmail);
    table.appendChild(cellEmail);

    cellDept.appendChild(textDept);
    table.appendChild(cellDept);

    

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete);
    cellBtn.appendChild(deleteBtn);
    table.appendChild(cellBtn);
    // RESET THE FORM
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('extension').value = '';
    document.getElementById('email').value = '';
    document.getElementById('department').value = '';
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (confirm(`Are you sure you want to delete ${e.target.textName}?`)) {
        table.deleteRow(e.target.row.rowIndex);
    }
})