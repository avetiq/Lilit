import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

function HotelResult(props){
    
    const {classes, info} = props;
    console.log(info);
    return (
        <div className={classes.main}>
            <div className={classes.headerPart}>
                <div className={classes.hotelName}>                
                    <h4 style={{fontSize: '1.3rem'}}>{info.name}</h4>
                </div>
            </div>
            <div className={classes.contextPart}>
                <div className={classes.imageDiv}>
                    <img alt="Image" src={info.photoSource} className={classes.imgStyle}></img>
                </div>
                <div className={classes.descriptionDiv}>
                    <p className={classes.descriptionText}>
                    
                        <BrowserView>
                            {info.longInfo.length > 450 ? info.longInfo.substring(0, 450) : info.longInfo}...
                        </BrowserView>
                        <MobileView>
                            {info.longInfo.length > 150 ? info.longInfo.substring(0, 150) : info.longInfo}...
                        </MobileView>
                    </p>
                </div>
            </div>
            
        </div>
    );


}

export default withStyles(styles)(HotelResult);
