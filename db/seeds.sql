SELECT * FROM talents_db.department;
SELECT * FROM talents_db.role;
SELECT * FROM talents_db.employee;


INSERT INTO talents_db.department (department_name)
VALUES ( "Sales"),
        ( "Manufacture"),
        ( "Administration");
        
INSERT INTO talents_db.role (role_title, role_salary, department_id)
VALUES ("Sales person", "1000", 1),
        ( "Sales assistant", "900.50", 1),
        ( "Consultant", "2000", 2),
        ( "Manager", "1000", 3);
        
INSERT INTO talents_db.employee ( employee_first_name, employee_last_name, role_id, manager_id)
VALUES ( "FN", "LN", 4, 1),
	( "FN", "LN", 4, 1),
    ( "FN", "LN", 3, 1),
    ( "FN", "LN", 1, 1),
    ( "FN", "LN", 2, 4);