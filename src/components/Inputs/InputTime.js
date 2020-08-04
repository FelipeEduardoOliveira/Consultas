import React from 'react';
import { TextField} from '@material-ui/core';



function InputTime(props){
    return(
        <TextField
        error = {props.error}
        className='WidthFieldTime'
        id="date"
        label={props.label}
        type="time"
        size="normal"
        // defaultValue={props.timer}
        value = {props.value}
        onChange= {props.onChange}
        InputLabelProps={{
            shrink: true,
        }}
    />
    );
}
export default InputTime;