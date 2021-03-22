import React from 'react';
import SearchHotel from '../../SearchHotel';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';


function Result(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;
    const [hotelSearch, setHotelSearch] = React.useState(true);
    const [viewSearch, setViewSearch] = React.useState(false);
    
    return (
        <div className={classes.main}>
            <div className={classes.headerLinks}>
                <div className={classes.headerLinksColor}>
                    <Button
                    variant="success"
                    className={`${classes.buttonPadding} ${hotelSearch ? classes.buttonHeightMax : classes.buttonHeightMin}`}
                    onClick={()=> {
                        if(!hotelSearch){
                            setHotelSearch(!hotelSearch); setViewSearch(!viewSearch);
                        }
                    }}
                    >
                        <p className={`${hotelSearch ? classes.linkBackground : ''}`}>Hotels</p>
                    </Button>
                </div>
                <div className={classes.headerLinksColor}>
                    <Button
                    className={`${classes.buttonPadding} ${viewSearch ? classes.buttonHeightMax : classes.buttonHeightMin}`}
                    variant="success"
                    onClick={()=> {
                        if(!viewSearch){
                            setViewSearch(!viewSearch); setHotelSearch(!hotelSearch);
                        }
                    }}
                    >
                        <p className={`${viewSearch ? classes.linkBackground : ''}`}>Views</p>
                    </Button>    
                </div>
            </div>
            <div className={classes.formInputs}>
                {hotelSearch && <SearchHotel
                    hotel={initialSearchValues.hotel}
                    view={initialSearchValues.view}
                    district={initialSearchValues.district}
                    bed={initialSearchValues.bed}
                    from={initialSearchValues.from}
                    to={initialSearchValues.to}
                />}
                {viewSearch && <p>stex el en myus formy klini</p>}
            </div>
        </div>
    );


}

export default withStyles(styles)(Result);
