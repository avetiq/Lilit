import React from 'react';
import SearchHotel from '../../SearchHotel';
import ViewSearch from '../../ViewSearch';
import HotelResult from '../../HotelResult';
import ViewResult from '../../ViewResult';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import searchResult from '../../../models/searchResult';


function Result(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;
    const [hotelSearch, setHotelSearch] = React.useState(true);
    const [viewSearch, setViewSearch] = React.useState(false);
    console.log(initialSearchValues)

    React.useEffect(()=>{
        
        fetch(`/api/Travel?HotelName=Marriot`, {
            method: 'GET',
            
        })
            .then(async (response) => {
                const res = await response.json();

                if(response.status >=400 && response.status < 600){
                    if(res.error){
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }
                return res;
            })
            .then((res) =>{
                const data: Array<searchResult> = [];
                res.forEach(resElement => {
                    const current = new searchResult();
                    current.id = resElement.id;
                    current.name = resElement.name;
                    current.district = resElement.district;
                    current.photoSource = resElement.photoSource;
                    current.longInfo = resElement.longInfo;
                    current.latitude = resElement.latitude;
                    current.longitude = resElement.longitude;
                    current.isHotel = resElement.isHotel;
                    data.push(current);
                });
                console.log(data);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });

    },[])

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
            {
                hotelSearch && <HotelResult/>
            }
            {
                viewSearch && <ViewResult/>
            }
            
        </div>
    );


}

export default withStyles(styles)(Result);
