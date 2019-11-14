const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require('body-parser');
//const maxApi = require('max-api')

var imageData = null;
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true
    })
);

app.get('/', (req, res) => res.sendFile(path.resolve("./myindex.html")));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.post("/saveData", (req, res) => {
    imageData = req.body.data;
    console.log(imageData[0])
    res.sendStatus(200)
});
