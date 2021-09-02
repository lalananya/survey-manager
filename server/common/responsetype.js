const msgObj=(_status,_message)=>{
    return {status : _status, message : _message}
}
const msg = {
        200 : msgObj(200,"success"),
        401 : msgObj(401,"denied"),
        503 : msgObj(503,"service unavailable"),
        409 : msgObj(409,"user ID already exists"),
        503 : msgObj(503,"service unavailable"),
        412 : msgObj(412,"missing parameter")
}

module.exports = msg;