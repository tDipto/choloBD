const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const fileUpload = require("express-fileupload");
/* const MongoClient = require("mongodb").MongoClient; */
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
/* const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b264i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; */
const uri =
  "mongodb+srv://Dipto:Dipto007@cluster0.oqm6q2i.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("Places"));
app.use(fileUpload());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Cholo Ghuri Bangladesh Backend");
});

/* const client = new MongoClient(uri, { useNewUrlParser: true }); */
/* client.connect((err) => {
  const reviewCollection = client.db("CholoBD").collection("review");
  app.post("/addReview", (req, res) => {
    const review = req.body;
    reviewCollection.insertOne(review).then((result) => {
      res.send(result.insertedCount);
    });
  });
}); */
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri)
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log("err"));

const reviewCollection = client.db("CholoBD").collection("review");

app.post("/addReview", (req, res) => {
  const review = req.body;
  // reviewCollection.insertOne(review).then((result) => {
  //   res.send(result.insertedCount);
  // });
  const file = req.files.file;
  /*  const placeName = req.body.placeName;
  const distName = req.body.distName;
  const divName = req.body.divName;
  const roadmap = req.body.roadmap;
  const placeNameEn = req.body.placeNameEn;
  const distNameBn = req.body.distNameBn;
  const hotel = req.body.hotel;
  console.log(review); */
  file.mv(`${__dirname}/places/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "failed to upload image" });
    } else {
      reviewCollection.insertOne(review).then((result) => {
        res.send(result.insertedCount);
      });
    }
    /* return res.send({ name: file.name, path: `/${file.name}` }); */
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
  /* console.log(placeName); */
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

app.listen(process.env.PORT || port, () => console.log("SERVER RUNNING"));
