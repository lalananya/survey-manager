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
    color: white;
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

const UserComponent = ({
    checkLogin
})=>{
    const [name,setName] = useState('');
    const [id,setId] = useState('');
    const flag = 'user';

    const handleChange = (e)=>{
        let {name,value} = e.target;
        if(name === 'name')setName(value);
        if(name === 'id')setId(value)
    };

    const handleClick = async (e)=>{
        e.preventDefault();
        var resp = await Login({flag:0,name:{name},id:{id}});
        if(parseInt(resp.status) === 200) checkLogin(true,flag);
        else checkLogin(false,flag);
    };

    return(<>
                    <FormContainer>
                        <InputGroup>
                            <tr>
                                <td><Label>User ID</Label></td>
                                <td><input type="text" value={id} onChange={handleChange} name="id" required/></td>
                            </tr>
                            <tr>
                                <td><Label>Name</Label></td>
                                <td><input type="text" value={name} onChange={handleChange} name="name" required/></td>
                            </tr>
                        </InputGroup>
                        <Button onClick={handleClick}>Submit</Button> 
                    </FormContainer>
            </>

    );
}


export default UserComponent