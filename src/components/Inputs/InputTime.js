import React from 'react';
import { TextField} from '@material-ui/core';



function InputTime(props){
    return(
        <TextField
        className='WidthFieldTime'
        id="date"
        label={props.label}
        type="time"
        size="normal"
        defaultValue={props.timer}
        InputLabelProps={{
            shrink: true,
        }}
    />
    );
}
export default InputTime;