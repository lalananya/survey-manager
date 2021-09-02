import React from 'react'

const LoaderComponent=()=>{
    return(<div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="sr-only">Loading...</span>
        </div>
    </div>);
}

export default LoaderComponent;