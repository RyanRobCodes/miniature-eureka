//importing express
const express = require('express');

//importing apiRoutes and htmlRoutes files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//instantiates the server
const app = express();

//This is the port the server listens to
const PORT = process.env.PORT || 3001; 

//Tells server.js to use JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Tells server.js to use the following routes from the routes directory
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Tells server.js which port to listen to and returns a confirmation console.log statement
app.listen(PORT, () => {
    console.log(`API Server now on Port ${PORT}`);
});