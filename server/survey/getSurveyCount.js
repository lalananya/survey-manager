const surveyCount = require('../../data/surveycount.json');
const msg = require('../common/responsetype');
const getSurvey=()=>{
    let data =  msg[200];
    data.numberOfSurveys = surveyCount.numberOfSurveys;
    return data;
}

module.exports = getSurvey;