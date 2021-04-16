import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { BrowserView, MobileView} from "react-device-detect";
import nameConverter from '../../helpers/nameConverter';

function HotelResult(props){
    
    const {classes, info} = props;
    
    return (
        <div className={classes.main}>
            <div className={classes.headerPart}>
                <div className={classes.hotelName}>  
                    <Link to={{pathname:`/result/hotel`,query:{id:info.id, hotel: info.name}}}>
                        <h4 style={{fontSize: '1.3rem'}}>{nameConverter(info.name)}</h4>
                    </Link>              
                </div>
            </div>
            <div className={classes.contextPart}>
                <div className={classes.imageDiv}>
                    <img alt="Image" src={info.photoSource} className={classes.imgStyle}></img>
                </div>
                <div className={classes.descriptionDiv}>
                    <BrowserView>
                        <p className={classes.descriptionText}>{info.longInfo.length > 450 ? info.longInfo.substring(0, 450) : info.longInfo}...</p>
                    </BrowserView>
                    <MobileView>
                        <p className={classes.descriptionText}>{info.longInfo.length > 150 ? info.longInfo.substring(0, 150) : info.longInfo}...</p>
                    </MobileView>

                </div>
            </div>
            
        </div>
    );


}

export default withStyles(styles)(HotelResult);
