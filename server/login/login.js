const _admin= require('./admin');
const _user= require('./user');
const msg = require('../common/responsetype');
const login=(data)=>{
    switch(parseInt(data.flag)){
        case 1 : return _admin(data);
        case 0 : return _user(data);
        default : return msg[412];
    }  
}

module.exports = login;