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

const TextArea = styled('textarea')`
    width: 400px;
    height: 100px;
`;

const SurveyQuestions = (props)=>{
    return(
        <FormContainer>
            <InputGroup>
                <tr><td><Label>QUESTION</Label></td></tr>
                <tr><td><TextArea placeholder="Enter Question" name="question" value={props.data.question} onChange={props.handleChange} required></TextArea></td></tr>
                <tr><td><Label>OPTIONS</Label></td></tr>
                <tr>
                    <td>
                        <input type="text" name="option1" value={props.data.option1} placeholder="Option 1" onChange={props.handleChange} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="option2" value={props.data.option2} placeholder="Option 2"  onChange={props.handleChange} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="option3" value={props.data.option3} placeholder="Option 3"  onChange={props.handleChange} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="option4" value={props.data.option4} placeholder="Option 4"  onChange={props.handleChange} required/>
                    </td>
                </tr>
            </InputGroup>
        </FormContainer>
    )
}

const SurveyForm = (props)=>{
    const { surveyId,surveyName } = props;
    const [count, setCount] = useState(1);
    const [submit, setSubmit] = useState(false);
    const [data, setData] = useState({
        question : '',
        option1 : '',
        option2 : '',
        option3 : '',
        option4 : '',
    });
    const _data = {};
    _data[surveyId] = [];

    const createQuestionObject = ()=>{
        let obj = {
            'q_id' : count,
            'ques_text' : data.question,
            'ans_det' : {
                'a' : {'val':data.option1,'count' : 0},
                'b' : {'val':data.option2,'count' : 0},
                'c' : {'val':data.option3,'count' : 0},
                'd' : {'val':data.option4,'count' : 0},
            }
        };
        _data[surveyId].push(obj);
        sessionStorage.setItem(surveyId,JSON.stringify(_data[surveyId])); 
    }

    const handleChange = (e)=>{
        let {name,value} = e.target;
        let obj = {...data};
        obj[name] = value;
        setData(obj);
    };

    const handleClick = (e)=>{
        if(e.target.name === 'next'){
            createQuestionObject();
            setData({question:"",option1:"",option2:"",option3:"",option4:""});
            setCount(count + 1);
            if(e.target.name === 'submit')setSubmit(true);
        }
        if(e.target.name === 'submit'){
            let data = {id:surveyId,data:JSON.parse(sessionStorage.getItem(surveyId))};
            //let _data ={method:'POST',headers : {'Content-Type' : 'application/json',},body : JSON.stringify(data)};
            fetch(`http://localhost:8008/createSurveyData?surveydata=${JSON.stringify(data)}`);
        }
    };
    if(!submit){
        return(
            <Tile>
                <h1>{surveyName}</h1>
                {count !==-1}<SurveyQuestions data={data} count={count} handleChange={handleChange}/>
                <Button name="submit" onClick={handleClick}>Submit</Button>
                <Button name="next" onClick={handleClick}>Add Next</Button>
            </Tile>
        )
    }
    else {
        return <div></div>
    }
}

export default SurveyForm;
