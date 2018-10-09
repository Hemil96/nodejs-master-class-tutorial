// Dependencies  
const http = require('http');

// Creating a server that will return a string on requests
const server = http.createServer((req, res) => {
  res.end('Hello World!\n');
});

// Listing to the server
server.listen(3000, () => {
  console.log('The server is listening on 3000 port now');
})