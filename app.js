const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Friends we;come to My page.Thank you🚀');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

