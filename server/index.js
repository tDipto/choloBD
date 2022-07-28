const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
<<<<<<< HEAD
const fs = require("fs");
/* const MongoClient = require("mongodb").MongoClient; */
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
/* const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b264i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; */
const uri =
  "mongodb+srv://Dipto:dipto@cluster0.b264i.mongodb.net/?retryWrites=true&w=majority";
=======
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b264i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
const app = express();

app.use(bodyParser.json());
app.use(cors());
<<<<<<< HEAD
app.use(express.json());
=======
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181

const port = 5000;

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Cholo Ghuri Bangladesh Backend");
});

/* const client = new MongoClient(uri, { useNewUrlParser: true }); */
/* client.connect((err) => {
=======
  res.send("hello form db");
});

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
  const reviewCollection = client.db("CholoBD").collection("review");
  app.post("/addReview", (req, res) => {
    const review = req.body;
    reviewCollection.insertOne(review).then((result) => {
      res.send(result.insertedCount);
    });
  });
<<<<<<< HEAD
}); */
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri)
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log("err"));

const reviewCollection = client.db("CholoBD").collection("review");
app.post("/addReview", (req, res) => {
  const review = req.body;
  reviewCollection.insertOne(review).then((result) => {
    res.send(result.insertedCount);
  });
});
app.get("/getReview", (req, res) => {
  const review = req.body;
  reviewCollection.find().toArray((err, documents) => {
    res.send(documents);
  });
});
app.put("/addComment", (req, res) => {
  const placeName = req.body.placeNameEn;
  const review = req.body.userReview;
  console.log(review);
  reviewCollection.updateOne(
    { placeNameEn: placeName },
    { $push: { userReview: review } }
  );
  res.send("okay");
});
app.post("/getComment", (req, res) => {
  const placeName = req.body.placeNameEn;
  console.log(placeName);
  reviewCollection.findOne({ placeNameEn: placeName }, (err, documents) => {
    res.send(documents.userReview);
  });
});

/* app.get("/api/places", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    
    const showPlaces = JSON.parse(data).places;
    res.send(showPlaces);
  });
}); */

/* app.post("/api/places", (req, res) => {
  const newPlace = req.body;
  fs.readFile("./db.json", "utf-8", (err, data) => {
    const places = JSON.parse(data);
    places.places.push(newPlace);
    
    fs.watchFile("./db.json", JSON.stringify(places), (err) => {
      res.send(newPlace);
    });
  });
  res.send(req.body);
}); */

=======
});
/* .then((res) => console.log("DATABASE CONECTED"))
  .catch((err) => console.log("FAILED DATABASE")); */
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
app.listen(process.env.PORT || port, () => console.log("SERVER RUNNING"));
