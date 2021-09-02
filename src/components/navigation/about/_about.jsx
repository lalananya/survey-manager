import React from 'react'
import {styled, setup} from "goober";
import {colors} from '../../../assets/common/colors';

setup(React.createElement);

const Container = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 10px;   
`;

const Tile = styled("div")`
    padding: 10px;
    width: auto;
    height: auto;
    border: solid 1px;
    border-radius: 8px;
    border-color : ${colors.shark};
    box-shadow: 0px 4px 4px 0px; 
`;

const AboutComponent = ()=>{
    return(
        <Container>
            <Tile>
                <p><b>Survey Management</b></p>
                <p>There will be two types of login modes, as an admin and as a user</p>
                <p>Admin can create surveys, analyse them and displays the upcoming or the past surveys.There will be a tab (Create Survey) which will get displayed once admin user is verified. Dashboard will be display the current surveys, upcoming and past surveys.Once published admin can not edit the survey, it can only be deleted</p>
                <p>User can see the upcoming surveys and take part in those. All the attempted surevys can be seen in the User DashBoard.</p>
                <p>The analysis of the surveys will be displayed for both user and admin in the dashboard tab</p>
                <p><b>Technical Specifications</b></p>
                <p>- React, JavaScript and Goober</p>
                <p>- Node Js</p>
                <p>- Mongo DB to store and retrieve data</p>
                <p><i>Note - About Section is a static page</i></p>
            </Tile>  
        </Container>
    );
}

export default AboutComponent