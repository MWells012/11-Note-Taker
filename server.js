// Required to run
const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const PORT = process.env.PORT || 3001;
const app = express ();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get


app.post


app.delete


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));