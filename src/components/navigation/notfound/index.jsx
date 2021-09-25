import React from 'react';
import { colors } from '../../../assets/common/colors';

import {styled, setup} from "goober";
setup(React.createElement);

const Container = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px; 
`;

const Tile = styled("div")`
    padding: 10px;
    width: auto;
    height: auto;
    border: solid 1px;
    border-radius: 8px;
    border-color : ${colors.shark};
    box-shadow: 0px 4px 4px 0px; 
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
 
const NotFound = ()=>{
    return (
        <Container>
            <Tile>
                Something Went Wrong !  
            </Tile> 
        </Container>
    )
}

export default NotFound