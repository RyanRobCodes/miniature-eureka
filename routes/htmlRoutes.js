//Lets htmlRoutes.js use path module which will be used for path.join below
const path = require("path");

//Defines htmlRouter and uses express.Router class to create route handler
const htmlRouter = require("express").Router();

// GET /api/notes should read the db.json file and return all saved notes as JSON
htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// GET * should return the index.html file
htmlRouter.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;

