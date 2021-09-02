import React, {useState, useEffect } from 'react';
import {Link, Route} from 'react-router-dom';
import { colors } from '../../../assets/common/colors';

import {styled, setup} from "goober";
setup(React.createElement);

const Container = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
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
    margin: 20px;
`;

const TableContainer = styled('table')`
    border-collapse: separate;
    width:100%;
    height: auto;
`;

const Tr = styled('tr')`
    border: 1px solid ${colors.white};
`;

const Td = styled('td')`
    color: ${colors.outerSpace};
    font-size: 18px;
`;

const HomeComponent = ({
    match,
})=>{
    const [surveys, setSurveys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8008/getSurvey',{
            method:"GET"
        }).then(res => res.json()).then((data) =>{
        }).catch(console.log)
    });
    /* {surveys.length > 0 &&
                    surveys.map((survey)=>{
                    return (<tr><td key={survey.s_id}>
                        <Link to={`${match.url}survey/${survey.s_id}`}>{survey.s_name.toUpperCase()}</Link>
                    </td></tr>);
                    })
                } */

    return (
        <Container>
            <Tile>
                <p><b>Current Surveys</b></p>
                <TableContainer>
                    <Tr><Td>A</Td></Tr>
                    <Tr><Td>B</Td></Tr>
                    <Tr><Td>C</Td></Tr>
                
                </TableContainer>  
            </Tile>
                
            <Tile>
                <p><b>Upcoming Surveys</b></p>
                <TableContainer>
                    <Tr><Td>A</Td></Tr>
                    <Tr><Td>B</Td></Tr>
                    <Tr><Td>C</Td></Tr>
                </TableContainer> 
            </Tile>
             
            <Route exact path={`${match.url}survey/:surveyId`}/>   
        </Container>
    )
}

export default HomeComponent