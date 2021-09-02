export default function NewSurvey(props){
    return(<div className="jumbotron">
            <h1>New Survey</h1>
                <form className="mt-3">
                    <div className="form-group">
                        <label>Survey Id</label>
                        <input className="form-control" name="surveyId" value={props.surveyId} onChange={props.handleChange} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Survey Name</label>
                        <input className="form-control" name="surveyName" value={props.surveyName} onChange={props.handleChange} required/>
                    </div>
                    
                </form>
            <button className="btn btn-primary mt-3" onClick={props.handleClick}>Create</button> 
    </div>)
}
