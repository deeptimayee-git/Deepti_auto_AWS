const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
<<<<<<< HEAD
  res.end('Hello Friends we;come to My page.Thank you🚀');
=======
  res.end('Hello Friends, Welcome to My Page 🚀');
>>>>>>> 7400402825a38192d711cc37023d2b621b73bddb
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

