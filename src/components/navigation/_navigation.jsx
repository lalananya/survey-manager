import React from 'react';
import {NavLink} from 'react-router-dom';
import SwitchComponent from '../../routes/routes';
import LoginContext from '../../datamanager/_loginContext';
import { colors } from '../../assets/common/colors';
import {styled, setup} from "goober";
setup(React.createElement);

const Nav = styled('nav')`
    width:100%;
    height: auto;
    background: ${colors.outerSpace};
    overflow: hidden;
`;

const LinksContainer = styled('div')`
    padding : 10px;
`;

const Ul = styled('ul')`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    float:left;
`;

const Ulr = styled(Ul)`
    float:right;
`;

const Li = styled('li')`
    font-size: 18px;
    margin: 0px 10px 0px 10px;
    .clr{
        color: ${colors.white};
    }
`;

const ListItem = ({path,name})=>{
    return (<Li>
                <NavLink className="clr" exact to={path}>{name}</NavLink>
        </Li>);
}

export default function NavigationComponent(){
        return (
            <React.Fragment>
                <Nav>
                    <LinksContainer id="navbarText">
                        <Ul>
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
                        </Ul>
                        <Ulr>
                        <LoginContext.Consumer>
                                {
                                    (data)=>{
                                        if(data._status === 'default') return <ListItem path="/login" name="Login"/>
                                        if(data._status !== 'default') return <ListItem path="/logout" name="Logout"/>
                                    }
                                }
                        </LoginContext.Consumer>
                        </Ulr>
                    </LinksContainer>
                </Nav>
                <>
                  {SwitchComponent}
                </>
            </React.Fragment>
        );
}