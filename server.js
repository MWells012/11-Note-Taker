// Required to run
const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const PORT = process.env.PORT || 3001;
const app = express ();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), //"utf8",
     (error, notes) => {
        if (error) {
            return console.log("Note Cannot Be Found")
        }
        res.json(JSON.parse(notes))
    })
});


app.post


app.delete


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));