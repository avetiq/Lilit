import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';


function View(props){
    
    const {classes} = props;
    //const initialSearchValues = props.location.query;
    
    return (
        <div className={classes.main}>
            View
        </div>
    );


}

export default withStyles(styles)(View);
