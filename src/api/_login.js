const Login=(data)=>{
    var _data = {method:'POST',headers : {'Content-Type' : 'application/json',},body : JSON.stringify(data)};
    return new Promise((resolve,reject)=>{
        fetch("http://localhost:8008/login",_data).then((response)=>{
            response.json().then(data=>({
                data : data,
                status : response.status,
            })).then((res)=>{
                if(parseInt(res.status) === 200) {
                    resolve(res)
                }
                else reject(res) 
            }).catch((err)=>{
                reject(err)
            })
        }).catch((err)=>{
            reject(err)
        })
    })
}

export {Login};

 