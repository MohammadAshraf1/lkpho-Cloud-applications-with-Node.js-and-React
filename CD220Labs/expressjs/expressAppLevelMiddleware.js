// Import the Express.js library which simplifies server creation and routing
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Middleware to check for a specific password in query parameters
// This middleware runs for every incoming request
app.use(function (req, res, next) {
    // Check if the query parameter 'password' equals "pwd123"
    if (req.query.password !== "pwd123") {
        // If the password does not match, send an error response with status code 402
        return res.status(402).send("This user cannot login ");
    }
    // If the password is correct, log the current timestamp to the console
    console.log('Time:', Date.now());
    // Call the next middleware function in the stack (or the appropriate route handler)
    next();
});

// Define a GET route for the "/home" path
// This route is only reached if the middleware above calls next() (i.e., if the password is correct)
app.get("/home", (req, res) => {
    // Respond to the client with the text "Hello World!"
    return res.send("Hello World!");
});

// Start the server and listen on port 3333
// When the server is running, it logs a message indicating the URL to access it
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
