const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.listen(3000, function () {
  console.log("Listening on 3000");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});

MongoClient.connect(
  "mongodb+srv://Echophase45:grUwAg2zxhVF4Fj@echocluster.nkkd5w0.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-wars-quotes");
    app.use();
    app.get();
    app.post();
    app.listen();
  })
  .catch((error) => console.log(error));
