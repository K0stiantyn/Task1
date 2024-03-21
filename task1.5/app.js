const http = require('http');
const student = require('./students');

const PORT = 3000;

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>About student</title>');
    res.write('</head>');
    res.write('<body>');
    res.write(`<p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>`);
    res.write('</body>');
    res.write('</html>');
    res.end();
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
