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
                    HotelName: initialSearchValues.hotel,
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
                                    lat: resElement.latitude, lng: resElement.longitude
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

  /*
  <Carousel images={imagesShow} className={classes.carousel} curIndex={0}/>
  */
console.log(mapPoints);
console.log(content);
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
                <div className={classes.content}>
                    <p>{content && content.longInfo}</p>
                </div>
                <div>
                    {content &&
                    <LocationMap 
                        centerCoordinates={[content.latitude, content.longitude]}
                        closePoints={mapPoints}
                    />
                    }
                </div>    

            </div>
            {
                spinner && <Spinner />
            }
        </div>
    );


}

export default withStyles(styles)(Hotel);
