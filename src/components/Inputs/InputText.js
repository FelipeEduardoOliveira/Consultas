import React, { Component } from 'react';
import { TextField } from '@material-ui/core';


function InputText(props){
    return(
        <TextField 
                    
        id="outlined-basic" 
        label= {props.label} 
        variant="outlined" 
        placeholder={props.palceholder} 
        className='AllField' 
        value = {props.value}
        onChange= {props.onChange}
        
        />
    );
}
export default InputText;
