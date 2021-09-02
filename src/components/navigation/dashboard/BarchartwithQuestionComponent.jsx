import React from 'react';
import BarChart from './BarChart';

const BarchartwithQuestionComponent = (props) => {

    const {q_id,ques_text,barchartdata} = props;
	const [isOpen, setOpen] = React.useState(false);

	const handleClick = () => {
		
		setOpen(isOpen => !isOpen);
		
	};

	return (
        <div className="jumbotron">
		    <span onClick={handleClick}>Q{q_id}. {ques_text}</span>
            {isOpen && <BarChart data={barchartdata} />}
        </div>
	);
};

export default BarchartwithQuestionComponent;