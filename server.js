// Dependencies
const express = require('express');
const ApiRoutes = require('./routes/ApiRoutes');
const NoteRoutes = require('./routes/NoteRoutes');
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/api', ApiRoutes);
app.use('/notes', NoteRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});