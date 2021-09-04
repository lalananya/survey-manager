import React from 'react';
import OptionInput from './OptionInput';
import { colors } from '../assets/common/colors';
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
`;
const FormContainer = styled('form')`
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
`;

const QuestionFormComponent = ({questions}) => {
    return (
        <Tile>
           <FormContainer>
                <fieldset>
                        {
                            questions.map(question => <QuestionListRow key={question.q_id} question={question} />)
                        }
                </fieldset>
                <Button>Submit</Button>
            </FormContainer>
        </Tile>
    );
};

const QuestionListRow = ({ question, onDelete }) => {
    return (
        <>
            <p>{question.ques_text}</p>
            {Object.keys(question.ans_det).map(keys => <OptionInput name={question.ans_det[keys].val} value={question.ans_det[keys].val} readOnly={true} id={keys}/>)}
            
        </>
		)
};




export default QuestionFormComponent;