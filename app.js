// Dependencies  
const http = require('http');
const url = require('url');

// Creating a server that will return a string on requests
const server = http.createServer((req, res) => {

  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true); // true will call the queryString module  

  // Get the path 
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  //  Get the query string as an object
  const queryStringObject = parsedUrl.query; 

  // Get the http method
  const method = req.method.toLowerCase(); 

  // Send the response 
  res.end('Hello World!\n');

  // Log the request path
  console.log('Request recieved on this path: ' + trimmedPath + ' with this method: ' + method + ' with these query string parameteres ', queryStringObject);
});

// Listing to the server
server.listen(3000, () => {
  console.log('The server is listening on 3000 port now');
})