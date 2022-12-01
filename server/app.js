const express = require('express')
// const axios = require("axios");
const https = require('https');
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", (req, res)=>{
// res.send("hello there")   
// })

app.post(("/"), (req, res)=>{
  const clientQuery = req.body.tag
  
  const url = `https://open-api.myhelsinki.fi/v1/places/?tags_search=${clientQuery}`
    
  https.get(url, function(response){
 
    let apiData = ''; // Initialize an empty variable for the data
 
    response.on("data", function(data){
      apiData += data; // this function gets called about 4 times.
    });
 
    response.on("end", function() {
      const placeData = JSON.parse(apiData)
      res.send(placeData.data); // And when it's done, show it in the browser.
      // console.log(placeData.data[0])
    });
  });

})

app.post(("/events"), (req, res)=>{
  const clientQuery = req.body.tag
  
  const url = `https://open-api.myhelsinki.fi/v1/events/?tags_search=${clientQuery}`
    
  https.get(url, function(response){
 
    let apiData = ''; // Initialize an empty variable for the data
 
    response.on("data", function(data){
      apiData += data; // this function gets called about 4 times.
    });
 
    response.on("end", function() {
      const placeData = JSON.parse(apiData)
      res.send(placeData.data); // And when it's done, show it in the browser.
      // console.log(placeData.data[0])
    });
  });

})

app.post(("/activities"), (req, res)=>{
  const clientQuery = req.body.tag
  
  const url = `https://open-api.myhelsinki.fi/v1/activities/?tags_search=${clientQuery}`
    
  https.get(url, function(response){
 
    let apiData = ''; // Initialize an empty variable for the data
 
    response.on("data", function(data){
      apiData += data; // this function gets called about 4 times.
    });
 
    response.on("end", function() {
      const placeData = JSON.parse(apiData)
      res.send(placeData.data); // And when it's done, show it in the browser.
      // console.log(placeData.data[0])
    });
  });

})

app.listen(process.env.PORT || 9000, (req, res)=>{
    console.log("Running on 9000 port")
})