// Dependencies  
const http = require('http');
const url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

// Creating a server that will return a string on requests
const server = http.createServer((req, res) => {

  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true); // true will call the queryString module  

  // Get the path 
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query; 

  // Get the http method
  const method = req.method.toLowerCase(); 

  // Get the headers as an object
  const headers = req.headers

  // Get the payload, if any 
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  // Collect data from stream  
  req.on('data', (data) => {
    buffer += decoder.write(data )
  });
  req.on('end', () => {
    buffer += decoder.end();

  // Send the response 
  res.end('Hello World!\n');

  // Log the request payload
  console.log('This request is sent with these payload', buffer);
  })
});

// Listing to the server
server.listen(3000, () => {
  console.log('The server is listening on 3000 port now');
})