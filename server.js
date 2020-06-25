const express = require("express");
var PORT = process.env.PORT || 3001; 
const app = express();
const htmlRoutes = require ("./routes/htmlRoutes");
const apiRoutes = require ("./routes/apiRoutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);


 

app.listen(PORT, function() { 
  console.log("App listening on PORT " + PORT); 
});



 


