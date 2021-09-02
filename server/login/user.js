const msg = require('../common/responsetype');
const _userjson = require('../../data/user.json');
const fs = require('fs');

const writeFile =(data)=>{
        let current_data = _userjson;
        current_data[data.id] = data.name;
        try{
            fs.writeFile('./data/user.json',JSON.stringify(current_data),(err)=>{
                if(err) throw err;
            });
        }
        catch(err){
            throw err;
        }
        
}

const _user=(data)=>{
    console.log(data);
    if(data.id in _userjson) return msg[409];
    else{
        writeFile({name:data.name,id:data.id});
        return msg[200];
    } 
}

module.exports = _user;