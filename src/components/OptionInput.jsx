import React from 'react';
//import PropTypes from 'prop-types';
import {styled, setup} from "goober";
setup(React.createElement);

const Label = styled('label')`
    font-size: 16px;
    margin: 3px;
    font-weight: bold;
`;

const InputGroup = styled('table')`
    border-collapse: separate;
    border-spacing: 0 1em;
`;

const OptionInput = ({ name, id, value, readOnly, onChange }) => {
    return (
        <InputGroup>
            <tr>
                <td>
                    <input type="radio" id={id} name={name} value={value} onChange={onChange} readOnly={readOnly} />
                </td>
                <td>
                    <Label for={value}>{value}</Label>
                </td>
            </tr>
        </InputGroup>
    );
};

// OptionInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.any.isRequired,
//     onChange: PropTypes.func,
//     readOnly: PropTypes.bool
// };

export default OptionInput;