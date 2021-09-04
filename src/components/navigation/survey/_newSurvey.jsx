import React, {useState} from 'react';
import {colors} from '../../../assets/common/colors';
import {styled, setup} from "goober";
setup(React.createElement);

const Tile = styled("div")`
    padding: 10px;
    width: auto;
    height: auto;
    border: solid 1px;
    border-radius: 8px;
    border-color : ${colors.shark};
    box-shadow: 0px 4px 4px 0px; 
    margin: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const FormContainer = styled('form')`
    display: flex;
    flex-direction: column;
    width:auto;
    height:auto;
    align-items: center;
    padding: 20px;
`;
const Button = styled('button')`
    width: fit-content;
    color: white;
    border: none;
    background-color: ${colors.outerSpace};
    box-shadow: 0px 2px 2px 0px ${colors.blackRussian};
    border-radius: 5px;
    margin: 20px;
`;
const Label = styled('label')`
    font-size: 16px;
    margin: 3px;
    font-weight: bold;
`;
const InputGroup = styled('table')`
    border-collapse: separate;
    border-spacing: 0 1em;
`;

export default function NewSurvey(props){
    return(<Tile>
            <h1>New Survey</h1>
                <FormContainer>
                    <InputGroup>
                        <tr>
                            <td><Label>Survey Id</Label></td>
                            <td><input name="surveyId" value={props.surveyId} onChange={props.handleChange} readOnly/></td>
                        </tr>
                        <tr>
                            <td><Label>Survey Name</Label></td>
                            <td><input name="surveyName" value={props.surveyName} onChange={props.handleChange} required/></td>
                        </tr>
                    </InputGroup>
                    <Button onClick={props.handleClick}>Create</Button>                     
                </FormContainer>
    </Tile>)
}
