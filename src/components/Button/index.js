import React from 'react';
import { Button } from '@material-ui/core';


function ButtonComponent(props) {
   
        return (
        <Button
            className='btn'
            variant="contained"
            color={props.color}>
            
            {props.label}

        </Button>
    );

}


export default ButtonComponent;