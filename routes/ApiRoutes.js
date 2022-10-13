const router = require("express").Router();
const db = require("../db/db.json")
console.log(db);

router.get("/api/notes", (req, res) => {
    res.send(db)
});



module.exports = router;