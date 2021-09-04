import AdminComponent from './_admin';
import UserComponent from './_user';
import React from 'react';
import { colors } from '../../../assets/common/colors';

import {styled, setup} from "goober";
setup(React.createElement);

const Container = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 20px; 
`;

const Tile = styled("div")`
    padding: 10px;
    width: auto;
    height: auto;
    border: solid 1px;
    border-radius: 8px;
    border-color : ${colors.shark};
    box-shadow: 0px 4px 4px 0px; 
    margin: 20px;
`;

const Button = styled('button')`
    color: white;
    border: none;
    background-color: ${colors.outerSpace};
    box-shadow: 0px 2px 2px 0px ${colors.blackRussian};
    border-radius: 5px;
`;

const UnIdentified=({
handleClick,
checkLogin,
current})=>{
    return(<>
        <Tile>
        <Container>
                <div>
                    <Button name="admin" onClick={handleClick}>Admin</Button>{" "}
                    <Button name="user" onClick={handleClick}>User</Button>
                </div>
        </Container>
            {current === 'admin' && <AdminComponent checkLogin={checkLogin}/>}
            {current === 'user' && <UserComponent checkLogin={checkLogin}/>}
        </Tile>  
    </> 
    )
}

const Identified=(props)=>{
    return(<>
        <h1>Welcome {props._props.type.flag.toUpperCase()}</h1>
    </>)
}

const Login =(props)=>{
    return(<div>
        <UnIdentified handleClick={props.handleClick} current={props.current}/>
        {props.type.isLogin === true && <Identified _props={props}/> }
    </div>)   
}

export default Login;