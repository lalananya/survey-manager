import React from 'react';

import OptionInput from './OptionInput';

const QuestionFormComponent = ({questions}) => {
    return (
        <>
           <form className="justify-content-center">
                <fieldset>
                        {
                            questions.map(question => <QuestionListRow key={question.q_id} question={question} />)
                        }
                </fieldset>
            </form>
        </>
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