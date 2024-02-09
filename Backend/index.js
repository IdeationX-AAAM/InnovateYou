// Import the Express module
import express from 'express'

// Create an instance of Express
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for '/about'
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
