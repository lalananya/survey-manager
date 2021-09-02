import React, {useState} from 'react';
import {Login} from '../../../api/_login';
import { colors } from '../../../assets/common/colors';

import {styled, setup} from "goober";

setup(React.createElement);


const FormContainer = styled('form')`
    display: flex;
    flex-direction: column;
    width:auto;
    height:auto;
    align-items: center;
    padding: 20px;
`;

const Button = styled('button')`
    width: fit-content;
    color: ${colors.white};
    border: none;
    background-color: ${colors.outerSpace};
    box-shadow: 0px 2px 2px 0px ${colors.blackRussian};
    border-radius: 5px;
    margin: 20px;
`;

const Label = styled('label')`
    font-size: 16px;
    margin: 3px;
    font-weight: bold;
`;

const InputGroup = styled('table')`
    border-collapse: separate;
    border-spacing: 0 1em;
`;

const AdminComponent = ({
    checkLogin
})=>{
    const [tokenId, setTokenId] = useState();
    const flag= 'admin';

    const handleChange = (e)=>{
        setTokenId(e.target.value);
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        var resp = await Login({tokenID : tokenId, flag:1});
        if(parseInt(resp.status) === 200) checkLogin(true,flag);
        else checkLogin(false,flag);
    }
    return (
        <>
                <FormContainer>
                    <InputGroup>
                        <tr>
                            <td><Label>TOKEN ID</Label></td>
                            <td><input type="text" name="tokenid" value={tokenId} onChange={handleChange} required/></td>
                        </tr>
                    </InputGroup>
                    <Button onClick={handleClick}>Login</Button>
                </FormContainer> 
        </>
    );
}

export default AdminComponent;