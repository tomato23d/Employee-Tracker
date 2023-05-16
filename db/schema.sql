DROP DATABASE IF EXISTS talents_db;
CREATE DATABASE talents_db;

USE talents_db;

  CREATE TABLE department (
  department_id varchar(5) NOT NULL default 'd0000',
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (department_id)
) ;
  
  CREATE TABLE role (
  role_id varchar(5) NOT NULL default 'r0000',
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL (6,2) NOT NULL,
  department_id varchar(5) default 'd0000',
  PRIMARY KEY (role_id),
  constraint department_id FOREIGN KEY (department_id) REFERENCES department (department_id) ON DELETE SET NULL
) ; 
 
  CREATE TABLE employee (
  employee_id varchar(5) NOT NULL default 'e0000',
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_name VARCHAR(30) NOT NULL,
  role_id varchar(5) default 'r0000',
  manager_id varchar(5) not null default 'm0000',
  PRIMARY KEY (employee_id),
  constraint role_id FOREIGN KEY (role_id) REFERENCES  role (role_id) ON DELETE SET NULL
) ; 


