import React, { Component } from 'react';
import BarchartwithQuestionComponent from './BarchartwithQuestionComponent';
import NotFound from '../notfound';

class DashboardComp extends Component {
  
  state = {
    surveydata: {}
  }

  componentDidMount() {
    fetch('http://localhost:8008/surveydata',{
      method:"GET"
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({surveydata:data}) 
    })
    .catch(()=>{
      this.setState({surveydata:{}});
    })
  }

  convertToBarChartData(data){
    let finaldataarr = []
    Object.keys(data).forEach(ansoptionskey => {
      const option_det = data[ansoptionskey]
      finaldataarr.push({ 
        option: option_det.val,
        answer: option_det.count
      })
    })
    return finaldataarr
  }

  render() {
    const {surveydata} = this.state;
    const surveykeys = Object.keys(surveydata); 
    if(!(Object.keys(surveydata) && Object.keys(surveydata).length === 0)){
      return <NotFound/>
    }
    return (
       <>  
      { 
      surveykeys.map(surveykey => {     
        const surveykeydata = surveydata[surveykey]
        return surveykeydata.map((questiondata,index) => {
          const {q_id,ques_text,ans_det} = questiondata
          const barchartdata = this.convertToBarChartData(ans_det);
          
          return <div>
            {index === 0 && <div className=""><span>{surveykey}</span></div>}
            <BarchartwithQuestionComponent q_id={q_id} ques_text={ques_text} barchartdata={barchartdata} />
            </div>
        })
      
      })
      }
     </>
    );
  }
}

export default DashboardComp;