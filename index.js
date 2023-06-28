
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DJr3*5aC',
    database: 'talents_db'
},
);


const select_department = 'SELECT id, department_name FROM talents_db.department';
const select_role = 'SELECT id, role_title, role_salary, department_id FROM talents_db.role';
const select_employee = 'SELECT id, employee_first_name, employee_last_name, role_id, manager_id FROM talents_db.employee;';
const report = 'SELECT e.id, e.employee_first_name, e.employee_last_name, e.manager_id, r.id,  r.role_title, r.role_salary, r.department_id, d.department_name FROM talents_db.employee e, talents_db.role r, talents_db.department d where e.role_id = r.id and r.department_id = d.id order by 1;';


function selectDepartment() {
    db.query(select_department, (err, rows) => {
        if (err) { return } console.log(rows)
        selectTask();
    })
};
function selectRoles() {
    db.query(select_role, (err, rows) => {
        if (err) { return } console.log(rows)
        selectTask();
    })
};
function selectEmployees() {
    db.query(select_employee, (err, rows) => {
        if (err) { return } console.log(rows)
        selectTask();
    })
};
function printReport() {
    db.query(report, (err, rows) => {
        if (err) { return } console.log(rows);
        selectTask();
    })
};

const insertSQLRecord = ({ firstname, lastname, roleindex, managerindex }) => { db.query(`INSERT INTO talents_db.employee (employee_first_name, employee_last_name, role_id, manager_id) VALUES ("${firstname}", "${lastname}", ${roleindex}, ${managerindex});`,(err) => {
    if(err) throw err;
    console.log("employee has been added");
    selectTask();
}) };

const updateSQLRecord = ({ updateemployeeindex, updateemployeecurrentrole, updateemployeenextrole }) => { db.query(`update talents_db.employee set role_id = ${updateemployeenextrole}  where id = ${updateemployeeindex} and role_id = ${updateemployeecurrentrole};`, (err) =>{
    if(err) throw err;
    console.log("employee hes been updated");
    selectTask();
}) };

function selectTask(){
    return inquirer
    .prompt([
        {
        type: 'list',
        name: 'task',
        message: 'Select task',
        choices: ["View reports", "Add new employee", "Update employee"],
        }
    ])
    .then((response)=>{ 
        if (response.task === "View reports"){return viewRecord()}
        else if (response.task === "Add new employee"){return addRecord()}
        else if (response.task === "Update employee"){return updateRecord()}
    })
    .catch((err) => {
        console.log('we have a problem: at run()');
        });
}

function viewRecord(){
    return inquirer
    .prompt([
            {
            type: 'list',
            name: 'view',
            message: 'Select view',
            choices: ["Department", "Roles", "Employees_Report"],
            }
        ])
        .then((response)=>{
            if (response.view === "Department"){selectDepartment()}
            else if (response.view === "Roles"){selectRoles()}
            else if (response.view === "Employees_Report"){printReport()}
        })
        
        .catch((err) => {
        console.log('we have a problem: at viewRecord()');
        });
}

function addRecord(){
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'firstname',
        message: 'Enter first name for a new employee',
        },
        {
        type: 'input',
        name: 'lastname',
        message: 'Enter last name for a new employee',
        },
        {
        type: 'input',
        name: 'roleindex',
        message: 'Enter the role number for a new employee',
        },
        {
        type: 'input',
        name: 'managerindex',
        message: 'Enter the manager role number for a new employee',
        }
        ])
        .then((response)=>{
            insertSQLRecord(response)})
      
        .catch((err) => {
        console.log('we have a problem: at addRecord()');
        });
};

function updateRecord(){
    return inquirer
    .prompt([
        {  
        type: 'input',
        name: 'updateemployeeindex',
        message: 'Update employee: enter employee number',
        },
        {
        type: 'input',
        name: 'updateemployeecurrentrole',
        message: 'Update employee: enter employee current role number',
        },
        {
        type: 'input',
        name: 'updateemployeenextrole',
        message: 'Update employee: enter employee next role number',
        }
        ])
    .then((response) => {
        updateSQLRecord(response)})
    .catch((err) => {
        console.log('we have a problem: at updateRecord()');
        });

};
// class Record{
//     constructor(){
//         this.employee = '';
//         this.employeeFirstName = '';
//         this.employeeLastName = '';
//         this.employeeManagerIndex = '';
//         this.employeeRoleIndex = '';
//         this.employeeRoleTitle = '';
//         this.employeeRoleSalary = '';
//         this.employeeDepartmentIndex = '';
//         this.employeeDepartmentName = '';
//     }
// run(){
//     return inquirer
//         .prompt([
//             {
//             type: 'list',
//             name: 'task',
//             message: 'Select task',
//             choices: ["View reports", "Add new employee", "Update employee"],
//             }
//         ])
//         .then((response)=>{ 
//             if (response.task === "View reports"){return this.viewRecord()}
//             else if (response.task === "Add new employee"){return this.addRecord()}
//             else if (response.task === "Update employee"){return this.updateRecord()}
//         })
//         .then(() => {
//             console.log('Task has been selected')
//             this.run()
//         })
//         .catch((err) => {
//         console.log('we have a problem: at run()');
//         });
// }
// viewRecord(){
//     return inquirer
//     .prompt([
//             {
//             type: 'list',
//             name: 'view',
//             message: 'Select view',
//             choices: ["Department", "Roles", "Employees_Report"],
//             }
//         ])
//         .then((response)=>{
//             if (response.view === "Department"){selectDepartment()}
//             else if (response.view === "Roles"){selectRoles()}
//             else if (response.view === "Employees_Report"){printReport()}
//         })
//         .then(() => console.log('Report has been selected'))
//         .catch((err) => {
//         console.log('we have a problem: at viewRecord()');
//         });
// }

// addRecord(){
//     return inquirer
//     .prompt([
//         {
//         type: 'input',
//         name: 'firstname',
//         message: 'Enter first name for a new employee',
//         },
//         {
//         type: 'input',
//         name: 'lastname',
//         message: 'Enter last name for a new employee',
//         },
//         {
//         type: 'input',
//         name: 'roleindex',
//         message: 'Enter the role number for a new employee',
//         },
//         {
//         type: 'input',
//         name: 'managerindex',
//         message: 'Enter the manager role number for a new employee',
//         }
//         ])
//         .then((response)=>{
//             insertSQLRecord(response)})
//         .then(() => {
//             console.log('New employee record has been created'), 
//             this.run()})
//         .catch((err) => {
//         console.log('we have a problem: at addRecord()');
//         });
// }


// updateRecord(){
//     return inquirer
//     .prompt([
//         {  
//         type: 'input',
//         name: 'updateemployeeindex',
//         message: 'Update employee: enter employee number',
//         },
//         {
//         type: 'input',
//         name: 'updateemployeecurrentrole',
//         message: 'Update employee: enter employee current role number',
//         },
//         {
//         type: 'input',
//         name: 'updateemployeenextrole',
//         message: 'Update employee: enter employee next role number',
//         }
//         ])
//     .then((response) => {
//         updateSQLRecord(response)})
//     .then(() => {
//         console.log('The employee record has been updated'), 
//         this.run()})
//     .catch((err) => {
//         console.log('we have a problem: at updateRecord()');
//         });

// }

// }

// const record = new Record();
// record.run();
selectTask();