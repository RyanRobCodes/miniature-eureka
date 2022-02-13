const fs = require("fs");

//Defines apiRouter and uses express.Router class to create route handler
const apiRouter = require("express").Router();

// GET /notes should return the notes.html file
apiRouter.get("/notes", (req, res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
  })




// GET * should return the index.html file


module.exports = apiRouter;