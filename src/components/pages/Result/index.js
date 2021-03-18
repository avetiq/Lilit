import React from 'react';
import SearchHotel from '../../SearchHotel';
import classes from './style.module.css';


function Result(props){
    
    
    const initialSearchValues = props.location.query;
    //console.log(initialSearchValues);
    return (
        <div className={classes.main}>
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
