const path = require('path');

// Get the base file name
console.log(path.basename(__filename));

// Get the directory name
console.log(path.dirname(__filename));

// Get the file extension
console.log(path.extname(__filename));

// Crate path object
console.log(path.parse(__filename));

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));