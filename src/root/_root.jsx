import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavigationComponent from '../components/navigation/_navigation';
import LoginContext from '../datamanager/_loginContext';
class RootComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {_status : 'default'};
        this.setStatus = this.setStatus.bind(this);
    }
    setStatus(value){
        let obj = {...this.state};
        obj._status = value;
        this.setState(obj);
    }
    componentDidMount(){
        fetch("http://localhost:8008/getSurveyCount").then((response)=>{
            response.json().then(data=>({
                data : data,
                status : response.status
            })).then(res=>{
                sessionStorage.setItem('numberOfSurveys',JSON.stringify(res.data));
            });
            
        })
    }
    render() {
        return (
            <div className="">  
                    <BrowserRouter>
                        <LoginContext.Provider value={{_status : this.state._status , _setStatus : this.setStatus}}>
                            <NavigationComponent/>
                        </LoginContext.Provider>  
                    </BrowserRouter>    
            </div>
        )
    }
}

export default RootComponent;