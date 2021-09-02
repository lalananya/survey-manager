import React from 'react';
//import PropTypes from 'prop-types';

const OptionInput = ({ name, id, value, readOnly, onChange }) => {
    return (
        <div className="form-group mb-1">
            <input type="radio" className="form-control" id={id} name={name}
                value={value}
                onChange={onChange} readOnly={readOnly} />
            <label for={value}>{value}</label><br></br>
        </div>
    );
};

// OptionInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.any.isRequired,
//     onChange: PropTypes.func,
//     readOnly: PropTypes.bool
// };

export default OptionInput;