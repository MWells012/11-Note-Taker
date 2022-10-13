const { application, Router } = require("express");

Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});