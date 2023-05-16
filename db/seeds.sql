SELECT * FROM talents_db.department;
SELECT * FROM talents_db.role;
SELECT * FROM talents_db.employee;


INSERT INTO talents_db.department (department_id, department_name)
VALUES ("d0001", "Sales"),
        ("d0002", "Manufacture"),
        ("d0003", "Administration");
        
INSERT INTO talents_db.role (role_id, role_title, role_salary, department_id)
VALUES ("r0001", "Sales person", "1000", "d0001"),
        ("r0002", "Sales assistant", "900.50", "d0001"),
        ("r0003", "Consultant", "2000", "d0002"),
        ("r0004", "Manager", "1000", "d0003");
        
INSERT INTO talents_db.employee (employee_id, employee_first_name, employee_last_name, role_id, manager_id)
VALUES ("e0001", "FN", "LN", "r0004", "manag"),
	("e0002", "FN", "LN", "r0004", "e0001"),
    ("e0003", "FN", "LN", "r0003", "e0001"),
    ("e0004", "FN", "LN", "r0001", "e0001"),
    ("e0005", "FN", "LN", "r0002", "e0004");