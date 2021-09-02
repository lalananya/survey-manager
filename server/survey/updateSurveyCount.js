const msg = require('../common/responsetype');
const fs = require('fs');
const updateSurveyCount=(data)=>{
    try{
        fs.writeFile('./data/surveycount.json',JSON.stringify({"numberOfSurveys" : data}),(err)=>{
            if(err) throw err;
            return msg[200]
        });
    }
    catch(err){
        throw err;
    }
}

module.exports = updateSurveyCount;