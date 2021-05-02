import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import searchResult from '../../../models/searchResult';
import Spinner from '../../Spinner';
import MySlider from "../../MySlider";
import 'react-gallery-carousel/dist/index.css';
import nameConverter from '../../../helpers/nameConverter';
import LocationMap from '../../LocationMap';


function Hotel(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;

    const [content, setContent] = React.useState();
    const [spinner, setSpinner] = React.useState(true);
    const [images, setImgaes] = React.useState([]);
    const [mapPoints, setMapPoints] = React.useState([]);
    const [freeRooms, setFreeRooms] = React.useState([]);

    React.useEffect(()=>{
        
        fetch(`/api/Hotel/${initialSearchValues.id}`, {
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
                
                const data = new searchResult();
                data.id = res[0].id;
                data.name = res[0].name;
                data.district = res[0].district;
                data.photoSource = res[0].photoSource;
                data.longInfo = res[0].longInfo;
                data.latitude = res[0].latitude;
                data.longitude = res[0].longitude;
                data.phone = res[0].phone;
                data.address = res[0].address;
                
                setContent(data);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });


            // getting free rooms
            fetch(`/api/Hotel/FreeRoomInfo?`+ new URLSearchParams({
                ID: initialSearchValues.id,
                From: initialSearchValues.from,
                To: initialSearchValues.to,
                BedQuantity: initialSearchValues.bed
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
                                       
                    let listFreeRooms = [];
                    if(res.length !== 0){
                        res.forEach((el) => {
                        listFreeRooms.push({
                                bed: el.bed,
                                money: el.money
                            })
                        }
                        )
                    }              
                    setFreeRooms(listFreeRooms)
                })
                .catch((error)=>{
                    console.log('catch error', error);
                });


            //geting photos
            fetch(`/api/Hotel/Photos/${initialSearchValues.id}`, {
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
                    
                    const imgList: Array<String> = [];
                    res.forEach(name => {
                        imgList.push(name);
                    });

                    setImgaes(imgList);
                })
                .catch((error)=>{
                    console.log('catch error', error);
                });

                fetch(`/api/Travel?`+ new URLSearchParams({
                    HotelName: initialSearchValues.name,
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
                        const forMap = [];
                        res.forEach(resElement => {
                            if(!resElement.isHotel){
                                forMap.push({
                                    lat: resElement.latitude,
                                    lng: resElement.longitude,
                                    id: resElement.id,
                                    name: resElement.name
                                });
                            }                            
                        });
                        
                        setMapPoints(forMap);
                        setSpinner(false);
                    })
                    .catch((error)=>{
                        console.log('catch error', error);
                    });
        

    }, [])

  
  return (
        <div className={classes.main} style={{ backgroundColor: '#f0f2f5'}}>
            <div className={classes.headerContent}>
                <h4 style={{margin: '0 auto 20px auto'}}>{content && nameConverter(content.name)}</h4>
                <div style={{width: '100%'}}>
                    <MySlider 
                        className={classes.slider}
                        arrowLeftStyles={classes.arrowLeft}
                        arrowRightStyles={classes.arrowRight}
                        images={images}
                    />
                </div>                    
            </div>
            <div className={classes.contentPart}>
                <div className={classes.content} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h4 style={{margin: '0px auto 15px auto'}}>Տեղեկատվություն</h4>
                    <p>{content ? content.longInfo : ''}</p>
                    {content && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid gray'}}>       
                        <p>Հասցե. {content.district}ի մարզ </p>
                        <p>{content.address}</p>
                        <p>Հեռ. {content.phone}</p>
                    </div>
                    }
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {content &&
                    <div>
                        <div>
                        <LocationMap 
                            forHotelPage
                            centerCoordinates={[content.latitude, content.longitude]}
                            closePoints={mapPoints}
                        />
                        </div>
                        
                    </div>
                    }
                </div>  
                
            </div>
            <div className={classes.freeRooms}>
                <h4>Հյուրանոցում առկա ազատ համարներ</h4>
            {freeRooms.length > 0 &&
                  freeRooms.map((room, index) => {
                    
                    return(
                        <div key={`${room.bed}s${index}`} className={classes.freeRoom}>
                            <div style={{backgroundImage: 'url(../../../photos/ashot.jpg)'}} className={classes.bedImg}/>
                            <div style={{alignItems: 'center', display: 'flex', marginLeft: 20}}>
                                {room.bed} սենյակ {room.money}AMD
                            </div>
                        </div>
                    );
                })
            }
                
            </div>

            {
                spinner && <Spinner />
            }
        </div>
    );


}

export default withStyles(styles)(Hotel);
