const fs = require("fs");

//Defines apiRouter and uses express.Router class to create route handler
const apiRouter = require("express").Router();

// GET /notes should return the notes.html file
apiRouter.get('/notes', (req, res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
  })

// Post /api/notes should receive a new note to save on the request body, add it to 
// the db.json file, and then return the new note to the client. You'll need to find 
// a way to give each note a unique id when it's saved (look into npm packages that could do this for you). 
apiRouter.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNote = req.body;
    notes.push(addNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
})



module.exports = apiRouter;