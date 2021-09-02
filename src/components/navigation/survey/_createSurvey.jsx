import {Component} from 'react';
import NewSurvey from './_newSurvey';
import SurveyForm from './_surveyQuestions';
import {updateSurveyCount} from '../../../api/_surveyCount';

class CreateSurveyComponent extends Component{
    constructor(props){
        super(props);
        this.storageData = JSON.parse(sessionStorage.getItem('numberOfSurveys'));
        this.state={surveyName : "", mode:"new", surveyId: parseInt(this.storageData.numberOfSurveys) + 1};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateStorage = this.updateStorage.bind(this);
    }
    updateStorage(){
        this.storageData.numberOfSurveys = this.state.surveyId;
        sessionStorage.setItem('numberOfSurveys',JSON.stringify(this.storageData));
    }

    handleChange(e){
        let {name,value} = e.target;
        let obj = {...this.state};
        obj[name] = value;
        this.setState(obj);
    }

    handleClick(e){
        e.preventDefault();
        let obj = {...this.state};
        obj.mode = "create";
        this.setState(obj,()=>{
            this.updateStorage();
            updateSurveyCount(this.state.surveyId);
        });
    }

    render(){
        if(this.state.mode === 'new'){
            return <NewSurvey surveyId={this.state.surveyId} surveyName={this.state.surveyName} handleClick={this.handleClick} handleChange={this.handleChange}/>
        }
        else{
            return <SurveyForm surveyId={this.state.surveyId} surveyName={this.state.surveyName}/>
        }
    }  
}

export default CreateSurveyComponent;
