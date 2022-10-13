const router = require("express").Router();
const path = require("path");
const db = require("../db/db.json");
const fs = require ("fs");
console.log(db);

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (error, notes) => {
      if (error) {
        return console.log("error: could not get note")
      }
      res.json(JSON.parse(notes))
    })
});


router.post("/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("../db/db.json"));
  const newNotes = req.body;
  if (notes.length === 0) {
    newNotes.id = 1
  } else {
    newNotes.id = notes.length + 1;
  }
  notes.push(newNotes);
  fs.writeFileSync("../db/db.json", JSON.stringify(notes), (err) => {
    if(err) {
      console.log("error: could not add note")
    }
  })
  res.json(notes);
  console.log("new note has been added")
});

router.delete("/notes/:id", (req, res) => {

  fs.readFile("..db/db.json", (err, data) => {
    if (err) throw err;

    noteData = JSON.parse(data)
  })
});




module.exports = router;