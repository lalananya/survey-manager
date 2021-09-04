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
    .clr{
        color: ${colors.blackRussian};
    }
`;

const HomeComponent = ({
    match,
})=>{
    const [surveys, setSurveys] = useState([]);
    useEffect(()=>{
        if(surveys.length === 0){
            fetch('http://localhost:8008/getSurvey',{
                method:"GET"
            }).then(res => res.json()).then((data) =>{
                setSurveys(data);
            }).catch(console.log)
        }
    },[surveys]);
    let Values = surveys.length > 0 && surveys.map((element)=>{
        return <Tr><Td key={element.s_id}><Link className="clr" to={`${match.url}survey/${element.s_id}`}>{element.s_name.toUpperCase()}</Link></Td></Tr>;
    })

    return (
        <Container>
            <Tile>
                <p><b>Current Surveys</b></p>
                <TableContainer>
                    {Values}   
                </TableContainer>  
            </Tile>
            <Route exact path={`${match.url}survey/:surveyId`}/>   
        </Container>
    )
}

export default HomeComponent