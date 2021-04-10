import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';


function Hotel(props){
    
    const {classes} = props;
    //const initialSearchValues = props.location.query;
    
    return (
        <div className={classes.main}>
            Hotel
        </div>
    );


}

export default withStyles(styles)(Hotel);
