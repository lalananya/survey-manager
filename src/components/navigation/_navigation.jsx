import React from 'react';
import {NavLink} from 'react-router-dom';
import SwitchComponent from '../../routes/routes';
import LoginContext from '../../datamanager/_loginContext';

const ListItem = ({path,name})=>{
    return (<li className="nav-item px-3">
                <NavLink exact className="nav-link" to={path}>{name}</NavLink>
        </li>);
}

export default function NavigationComponent(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <ListItem path="/" name="Home"/>
                            <ListItem path="/about" name="About"/>
                            <ListItem path="/dashboard" name="Dashboard"/>
                            <ListItem path="/createsurvey" name="Create Survey"/>
                            <LoginContext.Consumer>
                                {
                                    (data)=>{
                                        if(data._status === 'admin') return <ListItem path="/createsurvey" name="Create Survey"/>
                                    }
                                }
                            </LoginContext.Consumer>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <LoginContext.Consumer>
                                {
                                    (data)=>{
                                        if(data._status === 'default') return <ListItem path="/login" name="Login"/>
                                        if(data._status !== 'default') return <ListItem path="/logout" name="Logout"/>
                                    }
                                }
                        </LoginContext.Consumer>
                        </ul>
                    </div>
                </nav>
                <>
                  {SwitchComponent}
                </>
            </React.Fragment>
        );
}