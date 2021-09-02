import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import * as QuesActions from '../actions/QuesActions';

// import LoaderAnimation from '../components/common/LoaderAnimation';
import QuestionFormComponent from './QuestionFormComponent';

class ManageQuestionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions : []
        };
    }
    componentDidMount(){
        fetch(`http://localhost:8008/questions?id=${this.props.match.params.id}`,{
            method:"GET"
        }).then(res => res.json()).then((data) => { this.setState({questions:data}) }).catch(console.log)
    }

    // saveSurveyQuestions(e) {
    //     e.preventDefault();

    //     if (this.state.product.id) {
    //         this.props.updateProduct(this.state.product);
    //     } else {
    //         this.props.insertProduct(this.state.product);
    //     }

    //     // this.props.history.push("/products");
    // }


    render() {
        return (
            <QuestionFormComponent questions={this.state.questions}/>
        );
    }
}

// function getSurveyById(surveys, id) {
//     const survey = surveys.find(s => s.s_id === parseInt(id));
//     return survey;
// }

// function mapStateToProps(state, ownProps) {
//     const surveyId = ownProps.match.params.id;
//     const questions = state.questionReducer.questions;

//     let survey = {
//         s_id: "",
//         name: ""
//     };

//     if (surveyId && state.surveyReducer.survey.length > 0) {
//         survey = getSurveyById(state.surveyReducer.survey, surveyId);
//     }

//     var pText = survey.s_id === "" ? "Create Product" : "Submit Survey";

//     return {
//         pText, survey, questions
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         insertQuestions: (p) => { dispatch(QuesActions.insertQuestions(p)); },
//         updateQuestions: (p) => { dispatch(QuesActions.updateQuestions(p)); }
//         };
// }


//export default connect(mapStateToProps, mapDispatchToProps)(ManageQuestionContainer);

export default ManageQuestionContainer;