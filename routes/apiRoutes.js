const router =require("express").Router();
const store = require ("./../db/store");

router.get("/api/notes", function(req, res){


    console.log("Read Notes");
    store.getNotes().then((notes)=>{
        res.json(notes);
    })
    .catch((err) =>res.status(500).json(err));
});
    
router.post("/api/notes", function(req, res){
    
    store.addNote(req.body).then((note)=>{
        res.json(note);
        res.end(); 
    })
       .catch((err) =>res.status(500).json(err));
    });
    
router.delete("/api/notes/:id", function(req, res){
    store.deletenote(req.params.id).then (()=>res.json({ok: true}))
    .catch((err) =>res.status(500).json(err));
    });

    
module.exports = router;