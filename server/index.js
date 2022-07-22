const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b264i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello form db");
});

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const reviewCollection = client.db("CholoBD").collection("review");
  app.post("/addReview", (req, res) => {
    const review = req.body;
    reviewCollection.insertOne(review).then((result) => {
      res.send(result.insertedCount);
    });
  });
});
/* .then((res) => console.log("DATABASE CONECTED"))
  .catch((err) => console.log("FAILED DATABASE")); */
app.listen(process.env.PORT || port, () => console.log("SERVER RUNNING"));
