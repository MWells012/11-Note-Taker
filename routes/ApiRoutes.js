const router = require("express").Router();
const path = require("path");
const db = require("../db/db.json");
const fs = require ("fs");
const { json } = require("express");

console.log(db);

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (error, notes) => {
      if (error) {
        return console.log("error: we could not get your note")
      }
      res.json(JSON.parse(notes))
    })
});


router.post("/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  if (notes.length === 0) {
    newNotes.id = 1
  } else {
    newNotes.id = notes.length + 1;
  }
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
    if(err) {
      console.log("error: could not add note")
    }
  })
  res.json(notes);
  console.log("new note has been added")
});

/*router.delete("/api/notes/:id", (req, res) => {
  const deleteNote = req.params.id;

  fs.readFile("...db/db.json", (err, data) => {
    if (err) throw err;

    noteData = JSON.parse(data);

    for (let i = 0; i < noteData.length; i++) {
      if (noteData[i].id == deleteNote) {
        noteData.splice([i], 1);
      }
    }
    newNoteData = JSON.stringify(noteData);
    fs.writeFile(".../db/json.db", newNoteData, (err, data) => {
      if (err) {
        console.log(" there was an error in deleting your note")
      } else {
        res.json(data)
        console.log(`note ${deleteNote} note has been deleted!`)
      }
    });
  });
});
*/

module.exports = router;