CREATE DATABASE student_portfolio_db;

USE student_portfolio_db;

CREATE TABLE student_projects(
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_title VARCHAR(100),
    tools_used VARCHAR(100),
    project_description TEXT
);

CREATE TABLE contact_requests(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);

INSERT INTO student_projects
(project_title,tools_used,project_description)
VALUES
(
'Attendance Management System',
'Java, MySQL',
'Application for tracking student attendance'
),

(
'Movie Recommendation Website',
'HTML, CSS, JavaScript',
'Website suggesting movies based on categories'
),

(
'Online Food Ordering System',
'Node.js, MySQL',
'Basic food ordering platform'
);
