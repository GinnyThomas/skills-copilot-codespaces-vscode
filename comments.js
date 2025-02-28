// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request on the path /comments with a JSON response. The JSON response should be an array of objects, each with an id and comment key. The id should be a unique number, and the comment should be a string. For example:
//
// [
//   {id: 1, comment: 'first comment'},
//   {id: 2, comment: 'second comment'},
//   {id: 3, comment: 'third comment'}
// ]
// The server should respond to any other request with a 404 status code and a JSON response {error: 'Not found'}.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.end(JSON.stringify([]));
      } else {
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Not found'}));
  }
});

server.listen(3000);
console.log('Server listening on port 3000');

