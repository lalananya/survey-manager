const msg = require('../common/responsetype');
const _surveyjson = require('../../data/surveydata.json');
const fs = require('fs');

const createSurveyData =(data)=>{
    let current_data = _surveyjson;
    console.log(current_data);
    data = JSON.parse(data);
    current_data[data.id] = data.data;
    console.log(current_data);
    try{
        fs.writeFile('./data/surveydata.json',JSON.stringify(current_data),(err)=>{
            if(err) throw err;
        });
    }
    catch(err){
        throw err;
    }
};

module.exports = createSurveyData;