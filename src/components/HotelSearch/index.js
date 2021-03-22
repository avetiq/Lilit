import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';


function HotelSearch(props){
    
    const {classes} = props;
    const aa = '../../photos/logo192.png';
    return (
        <div className={classes.main}>
            <div>
            <img alt="Image" src='photos/logo192.png' ></img>
            </div>
        </div>
    );


}

export default withStyles(styles)(HotelSearch);
