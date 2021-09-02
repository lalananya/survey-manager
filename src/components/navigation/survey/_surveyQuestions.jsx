import {Component} from 'react';

const SurveyQuestions = (props)=>{
    return(
        <form className="mt-4">
            Question
            <input type="text" className="form-control" placeholder="Enter Question" name="question" value={props.data.question} onChange={props.handleChange} required></input>
            <div className="mt-3">
                <input className="form-control form-check-label mr-1" type="text" name="option1" value={props.data.option1} placeholder="Option 1" onChange={props.handleChange} required/>
                <input className="form-control form-check-label mr-1" type="text" name="option2" value={props.data.option2} placeholder="Option 2"  onChange={props.handleChange} required/>
                <input className="form-control form-check-label mr-1" type="text" name="option3" value={props.data.option3} placeholder="Option 3"  onChange={props.handleChange} required/>
                <input className="form-control form-check-label mr-1" type="text" name="option4" value={props.data.option4} placeholder="Option 4"  onChange={props.handleChange} required/>
            </div>
        </form>
    )
}

class SurveyForm extends Component { 
    constructor(props){
        super(props);
        this.state = {
            data:{question:"",option1:"",option2:"",option3:"",option4:""},
            count : 1,
            submit : false,
        };
        this.data = {};
        this.data[this.props.surveyId] = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createQuestionObject = this.createQuestionObject.bind(this);
    }
    createQuestionObject(){
        let obj = {
            'q_id' : this.state.count,
            'ques_text' : this.state.data.question,
            'ans_det' : {
                'a' : {'val':this.state.data.option1,'count' : 0},
                'b' : {'val':this.state.data.option2,'count' : 0},
                'c' : {'val':this.state.data.option3,'count' : 0},
                'd' : {'val':this.state.data.option4,'count' : 0},
            }
        };
        this.data[this.props.surveyId].push(obj);
        sessionStorage.setItem(this.props.surveyId,JSON.stringify(this.data[this.props.surveyId])); 
    }
    handleChange(e){
        let {name,value} = e.target;
        let obj = {...this.state.data};
        obj[name] = value;
        this.setState({data:obj});
    }
    handleClick(e){
        if(e.target.name === 'next'){
            this.createQuestionObject();
            let obj = this.state;
            obj.data = {question:"",option1:"",option2:"",option3:"",option4:""};
            obj.count = obj.count + 1;
            if(e.target.name === 'submit')obj.submit = true;
            this.setState(obj);
        }
        if(e.target.name === 'submit'){
            let _data = {id:this.props.surveyId,data:JSON.parse(sessionStorage.getItem(this.props.surveyId))};
            //let _data ={method:'POST',headers : {'Content-Type' : 'application/json',},body : JSON.stringify(data)};
            fetch(`http://localhost:8008/createSurveyData?surveydata=${JSON.stringify(_data)}`);
        }
    }
    render(){
        if(this.state.submit === false){
            return(
                <div className="jumbotron">
                    <h1>{this.props.surveyName}</h1>
                    {this.state.count !==-1}<SurveyQuestions data={this.state.data} count={this.state.count} handleChange={this.handleChange}/>
                    <button className="btn btn-secondary mt-3 mr-2" name="submit" onClick={this.handleClick}>Submit</button>
                    <button className="btn btn-primary mt-3" name="next" onClick={this.handleClick}>Add Next</button>
                </div>
            )
        }
        else {
            return <div></div>
        }
        
    }  
}

export default SurveyForm;
