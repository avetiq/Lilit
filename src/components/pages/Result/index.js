import React from 'react';
import SearchHotel from '../../SearchHotel';
import classes from './style.module.css';


function Result(props){
    
    
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

export default Result;
