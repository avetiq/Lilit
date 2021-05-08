import React from 'react';
import SearchHotel from '../../SearchHotel';
import ViewSearch from '../../ViewSearch';
import HotelResult from '../../HotelResult';
import ViewResult from '../../ViewResult';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import searchResult from '../../../models/searchResult';
import DateUtil from '../../../helpers/DateUtil';
import idGenerator from '../../../helpers/idGenerator';
import Spinner from '../../Spinner';

function Result(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;
    const [hotelSearch, setHotelSearch] = React.useState(true);
    const [viewSearch, setViewSearch] = React.useState(false);
    const [hotelList, setHotelList] = React.useState();
    const [viewList, setViewList] = React.useState();
    const [hotelFreeRooms, setHotelFreeRooms] = React.useState();
    const [spinner, setSpinner] = React.useState(true);
    const [district, setDistrict] = React.useState(initialSearchValues.district);

    const HotelParent = (hotelSearchParams) => {
        setDistrict(hotelSearchParams.district ? hotelSearchParams.district : '');
        setSpinner(true);
        fetch(`/api/Travel?`+ new URLSearchParams({
            HotelName: hotelSearchParams.hotel,
            District: hotelSearchParams.district ? hotelSearchParams.district : '',
            From: hotelSearchParams.dateFrom ? hotelSearchParams.dateFrom : '',
            To: hotelSearchParams.dateTo ? hotelSearchParams.dateTo : '',
            BedQuantity: hotelSearchParams.bedQuantity ? parseInt(hotelSearchParams.bedQuantity) : '',
        }), {
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
                const dataHotel: Array<searchResult> = [];
                const dataView: Array<searchResult> = [];
                res.forEach(resElement => {
                    const current = new searchResult();
                    current.id = resElement.id;
                    current.name = resElement.name;
                    current.district = resElement.district;
                    current.photoSource = resElement.photoSource;
                    current.longInfo = resElement.longInfo;
                    current.latitude = resElement.latitude;
                    current.longitude = resElement.longitude;
                    if(resElement.isHotel){
                        dataHotel.push(current);
                    }else{
                        dataView.push(current);
                    }
                    
                });
                
                setHotelList(dataHotel);
                setViewList(dataView);
                setSpinner(false);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });
    }

    const ViewParent = (viewSearchParams) => {
        setSpinner(true);
        setDistrict(viewSearchParams.district ? viewSearchParams.district : '');

        fetch(`/api/Travel?`+ new URLSearchParams({
            
            ViewName: viewSearchParams.view,
            District: viewSearchParams.district,
            }), {
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
                const dataHotel: Array<searchResult> = [];
                const dataView: Array<searchResult> = [];
                res.forEach(resElement => {
                    const current = new searchResult();
                    current.id = resElement.id;
                    current.name = resElement.name;
                    current.district = resElement.district;
                    current.photoSource = resElement.photoSource;
                    current.longInfo = resElement.longInfo;
                    current.latitude = resElement.latitude;
                    current.longitude = resElement.longitude;
                    if(resElement.isHotel){
                        dataHotel.push(current);
                    }else{
                        dataView.push(current);
                    }
                    
                });
                
                setHotelList(dataHotel);
                setViewList(dataView);
                setSpinner(false);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });
    }
    
    React.useEffect(()=>{

        let initialHotelFreeRooms;
        initialHotelFreeRooms = {
            from: DateUtil.isDate(initialSearchValues.from) ? DateUtil.formatDate(initialSearchValues.from): '',
            to: DateUtil.isDate(initialSearchValues.to) ? DateUtil.formatDate(initialSearchValues.to) : '',
            bed: initialSearchValues.bed
        }
        setHotelFreeRooms(initialHotelFreeRooms);

        fetch(`/api/Travel?`+ new URLSearchParams({
            HotelName: initialSearchValues.hotel,
            ViewName: initialSearchValues.view,
            District: initialSearchValues.district,
            From: initialSearchValues.from ? DateUtil.formatDate(initialSearchValues.from) : '',
            To: initialSearchValues.to ? DateUtil.formatDate(initialSearchValues.to) : '',
            BedQuantity: initialSearchValues.bed ? parseInt(initialSearchValues.bed) : '',
        }), {
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
                const dataHotel: Array<searchResult> = [];
                const dataView: Array<searchResult> = [];
                res.forEach(resElement => {
                    const current = new searchResult();
                    current.id = resElement.id;
                    current.name = resElement.name;
                    current.district = resElement.district;
                    current.photoSource = resElement.photoSource;
                    current.longInfo = resElement.longInfo;
                    current.latitude = resElement.latitude;
                    current.longitude = resElement.longitude;
                    if(resElement.isHotel){
                        dataHotel.push(current);
                    }else{
                        dataView.push(current);
                    }
                    
                });
                
                setHotelList(dataHotel);
                setViewList(dataView);
                setSpinner(false);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });

    }, [])

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
                    HotelParent={HotelParent}
                    hotel={initialSearchValues.hotel}
                    district={district}
                    bed={initialSearchValues.bed}
                    from={initialSearchValues.from}
                    to={initialSearchValues.to}
                />}
                {viewSearch && <ViewSearch
                    ViewParent={ViewParent}
                    view={initialSearchValues.view}
                    district={district}
                    />}
            </div>
            {
                hotelSearch && hotelList &&
                hotelList.map((el) => 
                    <HotelResult
                        key={idGenerator()}
                        info={el}
                        hotelFreeRooms={hotelFreeRooms}
                    />
                )
            }
            {
                viewSearch && viewList &&
                viewList.map((el) => 
                    <ViewResult
                        key={idGenerator()}
                        info={el}
                    />
                )
            }
            {
                spinner && <Spinner />
            }
        </div>
    );


}

export default withStyles(styles)(Result);
