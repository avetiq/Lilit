import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';


function ViewResult(props){
    
    const {classes, info} = props;
    console.log(info);

    return (
        <div className={classes.main}>
            <div className={classes.headerPart}>
                <div className={classes.hotelName}>                
                    <h4>{info.name}</h4>
                </div>
            </div>
            <div className={classes.contextPart}>
                <div className={classes.imageDiv}>
                    <img alt="Image" src={info.photoSource} ></img>
                </div>
                <div className={classes.descriptionDiv}>
                    <p className={classes.descriptionText}>
                    {info.longInfo}
                    </p>
                </div>
            </div>
            
        </div>
    );


}

export default withStyles(styles)(ViewResult);
