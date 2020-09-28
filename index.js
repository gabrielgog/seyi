// jshint esversion:6

const express = require("express")

const app = express();
app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")

});

app.get("/about.html", function(req, res){
    res.sendFile(__dirname + "/about.html")
})

app.get("/projects.html", function(req, res){
    res.sendFile(__dirname + "/projects.html")
})

app.get("/contact.html", function(req, res){
    res.sendFile(__dirname + "/contact.html")
})


app.listen(3000, function(){
    console.log("The server is running on port 3000");
})