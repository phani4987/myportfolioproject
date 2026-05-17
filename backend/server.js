const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const authRoutes = require('./routes/auth');
require('dotenv').config();

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// SESSION (MUST BE BEFORE ROUTES)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: "usersession",
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    }
}));

// Routes
app.use('/auth', authRoutes);

// Create users table
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    mobileNumber VARCHAR(20),
    password VARCHAR(100),
    confirmPassword VARCHAR(100),
    userType VARCHAR(20)
)
`;

db.query(createUsersTable, (err) => {
    if (err) throw err;
    console.log('Users table is ready');
});
// job creation
const createjob = `
CREATE TABLE IF NOT EXISTS JOBS(
 ID INT AUTO_INCREMENT PRIMARY KEY,
 JOBTITLE VARCHAR(255),
 JOBDESCRIPTION TEXT,
 JOBTYPE VARCHAR(20),
 WORKMODE VARCHAR(20),
 SECTOR VARCHAR(20),
 COMPANYADDRESS VARCHAR(255),
 CITY VARCHAR(20),
 STATE VARCHAR(20),
 COUNTRY VARCHAR(20),
 PINCODE INT,
 SALARYMINRANGE INT,
 SALARYMAXRANGE INT,
 MINIMUMEDUCATION VARCHAR(255),
 EXPERIENCE INT,
 COMPANYNAME VARCHAR(255),
 COMPANY_DESCRIPTION TEXT,
 APPLICATIONDEADLINE DATE,
 NO_OF_OPENINGS INT,
 APPLICATIONTYPE VARCHAR(255),
 RECRUITER_NAME VARCHAR(255),
 RECRUITER_EMAIL VARCHAR(255),
 RECRUITER_PHONENO VARCHAR(20),
 COMPANYLOGO VARCHAR(500),
 CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)
`
const benifits = `
CREATE TABLE IF NOT EXISTS BENEFITS(
ID INT AUTO_INCREMENT PRIMARY KEY,
JOB_ID INT,
BENEFITNAME VARCHAR(100),
FOREIGN KEY (JOB_ID) REFERENCES JOBS(ID) ON DELETE CASCADE
)`
const skills = `
CREATE TABLE IF NOT EXISTS SKILLS(
ID INT AUTO_INCREMENT PRIMARY KEY,
JOB_ID INT,
SKILL VARCHAR(255),
FOREIGN KEY (JOB_ID) REFERENCES JOBS(ID) ON DELETE CASCADE
)

`
const recruiterquestions = `
CREATE TABLE IF NOT EXISTS RECRUITER(
 ID INT AUTO_INCREMENT PRIMARY KEY,
 JOB_ID INT,
 QUESTIONS TEXT,
 FOREIGN KEY (JOB_ID) REFERENCES JOBS(ID) ON DELETE CASCADE
)
`
db.query(createjob, (err) => {
    if (err) throw err;
    console.log('JOBS table is ready');
});

db.query(benifits, (err) => {
    if (err) throw err;
    console.log('BENEFITS table is ready');
});

db.query(skills, (err) => {
    if (err) throw err;
    console.log('SKILLS table is ready');
});

db.query(recruiterquestions, (err) => {
    if (err) throw err;
    console.log('RECRUITER QUESTIONS table is ready');
});
// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});