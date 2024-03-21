const student = require('./students');

const fullName = student.getStudentFullName();
const studentId = student.getStudentId();

console.log(`My name is ${fullName}. My student ID is ${studentId}`);
