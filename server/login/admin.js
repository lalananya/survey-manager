const _adminjson = require('../../data/admin.json');
const msg = require('../common/responsetype');
const _admin=({tokenID})=>{
    if(tokenID === _adminjson.tokenID) return msg[200];
    return msg[401];
}

module.exports = _admin;