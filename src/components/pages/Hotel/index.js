import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import searchResult from '../../../models/searchResult';
import Spinner from '../../Spinner';
import MySlider from "../../MySlider";
import 'react-gallery-carousel/dist/index.css';
import nameConverter from '../../../helpers/nameConverter';
import LocationMap from '../../LocationMap';
import Book from '../../Book';
import { Button } from 'react-bootstrap';
import { parseCookies } from 'nookies'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DateUtil from '../../../helpers/DateUtil';
import PersonalInfoModel from '../../../models/personalinfo';

function Hotel(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;

    const cookies = parseCookies();
    const isLogedIn = cookies.username !== undefined ? true : false;

    const [bookInfo, setBookInfo] = React.useState({
        id: initialSearchValues.id,
        from: initialSearchValues.from ? initialSearchValues.from : null,
        to: initialSearchValues.to ? initialSearchValues.to : null,
        bedQuantity: initialSearchValues.bed ? initialSearchValues.bed : ''
    });

    const [content, setContent] = React.useState();
    const [spinner, setSpinner] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    const [images, setImgaes] = React.useState([]);
    const [mapPoints, setMapPoints] = React.useState([]);
    const [freeRooms, setFreeRooms] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState(null);
    const [errorDates, setErrorDates] = React.useState(null);
    const [dateParams, setdateParams] = React.useState(initialSearchValues.from !== '' && initialSearchValues.from !== null && initialSearchValues.to !== '' && initialSearchValues.to !== null);

    React.useEffect(() => {
        if(bookInfo.from !== null && bookInfo.to != null){
            setdateParams(true);
        }
    }, [bookInfo])
    
    const handleDateChange = (date, isFirst) => {
        if(isFirst){
            setBookInfo({
                ...bookInfo,
                from: DateUtil.formatDate(date)
            });
        }else{
            setBookInfo({
                ...bookInfo,
                to: DateUtil.formatDate(date)
            });
        }
        
      };

    const modalClose = (closeOrNot) => {
        setErrorDates('');
        setModal(closeOrNot);
    }

    const submitBook = (money, bed) => {
        setBookInfo({
            ...bookInfo,
            bedQuantity: bed,
            money: money
        });
        setModal(true);
    }

    const SearchFreeRooms = () => {

        setErrorDates('')
        if(bookInfo.to && bookInfo.from){
            if(DateUtil.dateDifference(bookInfo.from, bookInfo.to) < 0){
                setErrorDates('Չի կարող սկզբի ամսաթիվը մեծ լինի վերջի ամսաթվից')
            }
        }

        fetch(`/api/Hotel/FreeRoomInfo?`+ new URLSearchParams({
            ID: bookInfo.id,
            From: bookInfo.from ? bookInfo.from : '',
            To: bookInfo.to ? bookInfo.to : '',
            BedQuantity: bookInfo.bed ? bookInfo.bed : ''
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
                            money: el.money,
                            roomType: el.roomType
                        })
                    }
                    )
                }              
                setFreeRooms(listFreeRooms)
            })
            .catch((error)=>{
                console.log('catch error', error);
            });
    }

    React.useEffect(()=>{


        fetch(`/api/Auth/GetUsersInfo`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'username': cookies.username
            },
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
                const apiResponseParse = new PersonalInfoModel();
                apiResponseParse.Username = res[0].username;
                apiResponseParse.Passportid = res[0].passportid;
                apiResponseParse.Name = res[0].name;
                apiResponseParse.Surname = res[0].surname;
                apiResponseParse.Gender = res[0].gender;
                apiResponseParse.Email = res[0].email;
                apiResponseParse.City = res[0].city;
                apiResponseParse.CreditCardNumber = res[0].creditCardNumber;
                apiResponseParse.Country = res[0].country;
                setUserInfo(apiResponseParse);
            })
            .catch((error)=>{
                
                console.log('catch error', error);
        });

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
                data.id = res.id;
                data.name = res.name;
                data.district = res.district;
                data.photoSource = res.photoSource;
                data.longInfo = res.longInfo;
                data.latitude = res.latitude;
                data.longitude = res.longitude;
                data.phone = res.phone;
                data.address = res.address;
                
                setContent(data);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });


            // getting free rooms
            fetch(`/api/Hotel/FreeRoomInfo?`+ new URLSearchParams({
                ID: initialSearchValues.id,
                From: initialSearchValues.from ? initialSearchValues.from : '',
                To: initialSearchValues.to ? initialSearchValues.to : '',
                BedQuantity: initialSearchValues.bed ? initialSearchValues.bed : ''
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
                                money: el.money,
                                roomType: el.roomType
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
                    {content && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: '1px solid gray'}}>       
                        <p style={{paddingTop: 20}}>Հասցե. {content.district}ի մարզ </p>
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
                <h6 >Ամրագրել կարող եք միայն մուտք գործելուց հետո</h6>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '30px auto'}}>
                <div className={classes.dates}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    className={`${classes.inputColor} ${classes.datesInputStyle}`}
                    variant="inline"
                    format="dd/MM/yyyy"
                    label="Սկսած"
                    value={bookInfo.from}
                    name="dateFrom"
                    onChange={(date)=>handleDateChange(date, true)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    className={`${classes.inputColor} ${classes.datesInputStyle}`}
                    variant="inline"
                    format="dd/MM/yyyy"
                    label="Մինչև"
                    name="dateTo"
                    value={bookInfo.to}
                    onChange={(date)=>handleDateChange(date, false)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
                </div>
                <div style={{margin: '20px auto 0px auto', display: 'flex', flexDirection: 'column'}}>
                {errorDates && <span style={{fontSize: 10, color: 'red', display: 'block'}}>{errorDates}</span>}
                    <Button 
                    style={{width: 100, margin: '0 auto'}}
                    onClick={SearchFreeRooms}
                    variant="success"
                    >
                    Փնտրել
                    </Button>
                </div>
            </div>
            {freeRooms.length > 0 &&
                  freeRooms.map((room, index) => {
                    
                    return(
                        <div key={`${room.bed}s${index}`} className={classes.freeRoom}>    
                            <div style={{alignItems: 'center', display: 'flex', }}>
                                <div style={{backgroundImage: 'url(../../../photos/ashot.jpg)', marginRight: 20}} className={classes.bedImg}/>
                                    {room.bed} սենյակ {room.money}AMD, {room.roomType}
                            </div>
                            
                            <div>
                                <Button 
                                style={{right: 0}}
                                disabled={(dateParams === false) || (isLogedIn === false)}
                                onClick={() =>{ 
                                    if(DateUtil.dateDifference(bookInfo.from, bookInfo.to) < 0){
                                        setErrorDates('Չի կարող սկզբի ամսաթիվը մեծ լինի վերջի ամսաթվից')
                                        return;
                                    }
                                    submitBook(room.money, room.bed);
                                }
                                }
                                variant="success"
                                >
                                Ամրագրել
                                </Button>
                            </div>
                        </div>
                    );
                })
            }
                
            </div>

            {
                spinner && <Spinner />
            }
            {
                modal &&
                <Book 
                    SearchFreeRooms={SearchFreeRooms} 
                    content={content} 
                    bookInfo={bookInfo} 
                    userInfo={userInfo} 
                    onClose={true} 
                    modalClose={() => modalClose()}
                />
            }
        </div>
    );


}

export default withStyles(styles)(Hotel);
