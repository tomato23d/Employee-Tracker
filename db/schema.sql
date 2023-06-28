DROP DATABASE IF EXISTS talents_db;
CREATE DATABASE talents_db;

USE talents_db;

  CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
) ;
  
  CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL (6,2) NOT NULL,
  department_id int,
  FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE SET NULL
) ; 
 
  CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_name VARCHAR(30) NOT NULL,
  role_id int,
  manager_id int,
  FOREIGN KEY (role_id) REFERENCES  role (id) ON DELETE SET NULL
) ; 


