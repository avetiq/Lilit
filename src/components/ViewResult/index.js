import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';


function ViewResult(props){
    
    const {classes} = props;
    return (
        <div className={classes.main}>
            <div className={classes.headerPart}>
                <div className={classes.hotelName}>                
                    <h4>Տերև Տեսարժան վայր</h4>
                </div>
            </div>
            <div className={classes.contextPart}>
                <div className={classes.imageDiv}>
                    <img alt="Image" src='photos/logo192.png' ></img>
                </div>
                <div className={classes.descriptionDiv}>
                    <p className={classes.descriptionText}>
                    Բույսերի մեծ մասի տերևները կազմված են տերևաթիթեղից և կարճ կամ երկար կոթունից, որով ամրանում են ցողունին[1]։ Այդպիսի տերևները կոչվում են կոթունավոր։ Սակայն որոշ բույսերի տերևներ արտահայտված տերևակոթուն չունեն, դրանք նստադիր տերևներ են։ Տերևահիմքի մոտ հաճախ առաջանում են տերևակիցներ։ Տերևաթիթեղները լինում են կլոր, ձվաձև, նշտարաձև, եռանկյունաձև, սրտաձև, գծային և այլն։
                    </p>
                </div>
            </div>
            
        </div>
    );


}

export default withStyles(styles)(ViewResult);
