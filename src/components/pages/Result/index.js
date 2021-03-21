import React from 'react';
import SearchHotel from '../../SearchHotel';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';



function Result(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;
    
    return (
        <div className={classes.main}>
            <div className={classes.headerLinks}>
                <div className={classes.headerLinksColor}>
                    <h3>Hotels</h3>
                </div>
                <div className={classes.headerLinksColor}>
                    <h3>Views</h3>
                </div>
            </div>
            <div className={classes.formInputs}>
                <SearchHotel
                    hotel={initialSearchValues.hotel}
                    view={initialSearchValues.view}
                    district={initialSearchValues.district}
                    bed={initialSearchValues.bed}
                    from={initialSearchValues.from}
                    to={initialSearchValues.to}
                />
            </div>
        </div>
    );


}

export default withStyles(styles)(Result);
