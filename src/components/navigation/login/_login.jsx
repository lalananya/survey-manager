import React, {Component } from 'react';
import Login from './_element';
import LoginContext from '../../../datamanager/_loginContext';

class LoginComponent extends Component {
    static contextType = LoginContext;
    constructor(props){
        super(props);
        this.state = {
            current : 'user',
            type : {isLogin : false, flag:''},
        }
        this.handleClick  = this.handleClick.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin(isLogin,type){
        let obj = {...this.state};
        obj.type.isLogin = isLogin;
        obj.type.flag = type;
        this.setState(obj,()=>{
            this.context._setStatus(type);
        });
    }

    handleClick(e){
        let obj = {...this.state};
        obj.current =  e.target.name;
        this.setState(obj);
    }
    render() {
            return <Login handleClick={this.handleClick} checkLogin={this.checkLogin} type={this.state.type} current={this.state.current}/>
    }
}

export default LoginComponent;