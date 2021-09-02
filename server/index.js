const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 8008;

const login= require('./login/login');
const getSurveyCount = require('./survey/getSurveyCount');
const updateSurveyCount = require('./survey/updateSurveyCount');
const createSurveyData = require('./survey/createSurveyData');
const sdata = require('../data/surveydata.json'); // change

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(JSON.stringify({ Server: `Working !` }));
});

app.get("/surveydata",(req,res)=>{
  res.send(sdata);
});

app.post('/login', async (req, res,err) => {
  let response = await login(req.body);
  res.send(JSON.stringify(response));
});

app.get('/getSurveyCount', (req,res,err)=>{
  let response = getSurveyCount();
  res.send(JSON.stringify(response));
})

app.get('/updateSurveyCount', (req,res,err)=>{
  let response = updateSurveyCount(req.query.count);
  res.send(JSON.stringify({s : 'called'}));
})

app.get('/createSurveyData',(req,res)=>{
  let response = createSurveyData(req.query.surveydata);
  res.send(JSON.stringify({s : 'called'}));
})

app.get('/getSurvey', (req, res) => {
  var obj = require("../data/surveys.json");
  var data = obj.surveyData;
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
});

app.get('/questions', (req, res) => {
  var obj = require("../data/surveydata.json");
  obj = obj[req.query.id]
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.send(obj);
});

app.listen(8008, () =>
  console.log(`Express server is running on localhost:${apiPort}`)
);