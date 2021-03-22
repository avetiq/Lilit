import React from 'react';
import SearchHotel from '../../SearchHotel';
import ViewSearch from '../../ViewSearch';
import HotelSearch from '../../HotelSearch';
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
                        <p className={`${hotelSearch ? classes.linkBackground : ''}`}>Հյուրանոցներ</p>
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
                        <p className={`${viewSearch ? classes.linkBackground : ''}`}>Տեսարժան վայրեր</p>
                    </Button>    
                </div>
            </div>
            <div className={classes.formInputs}>
                {hotelSearch && <SearchHotel
                    hotel={initialSearchValues.hotel}
                    district={initialSearchValues.district}
                    bed={initialSearchValues.bed}
                    from={initialSearchValues.from}
                    to={initialSearchValues.to}
                />}
                {viewSearch && <ViewSearch
                    view={initialSearchValues.view}
                    district={initialSearchValues.district}
                    />}
            </div>
            <HotelSearch/>
        </div>
    );


}

export default withStyles(styles)(Result);
