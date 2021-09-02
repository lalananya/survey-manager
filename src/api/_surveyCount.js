const updateSurveyCount=(data)=>{
    // let _data = {method:'POST',headers : {'Content-Type' : 'application/json',},body : JSON.stringify(data)};
    fetch(`http://localhost:8008/updateSurveyCount?count=${data}`);
    // .then((response)=>{
    //     response.json().then(data=>({ data : data,status : response.status})).then((res)=>{
    //         if(parseInt(res.status) === 200) {
    //             console.log(res)
    //         }
    //         else console.log(res)
    //         }) 
    //     }).catch(err=>console.log(err));
}

export {updateSurveyCount};