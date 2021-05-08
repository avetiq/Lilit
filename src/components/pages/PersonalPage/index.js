import React from 'react';
import {Container, TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import LogInModel from '../../../models/logIn';
import {parseCookies, setCookie } from 'nookies'
import PersonalInfoModel from '../../../models/personalinfo';
import ReservedListModel from '../../../models/reservedList';
import { validate16Number} from '../../../helpers/validates';
import idGenerator from '../../../helpers/idGenerator';
import DateUtil from '../../../helpers/DateUtil';

function PersonalPage(props) {

  const {classes} = props;
  
  const cookies = parseCookies()

  const [userInfo, setUserInfo] = React.useState(null);
  const [reservedList, setReservedList] = React.useState(null);
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [errorPwd, setErrorPwd] = React.useState('');
  const [errorCardNumber, setErrorCardNumber] = React.useState('');

  const resetPassword = () => {
    setErrorPwd('');
    if(oldPassword.length < 8 || newPassword.length < 8){
      setErrorPwd('Գաղտնաբառ դաշտը պիտի լինի նվազագույնը 8 սիմվոլ:');
      return;
    }
    // // console.log({
    // //   oldPassword,
    // //   newPassword
    // // })
  }

  const resetOtherInfo = () => {
    setErrorCardNumber('');
    if(creditCardNumber.length < 16){
      setErrorCardNumber(' Ձեր բանկային քարտի համարը սխալ է:');
      return;
    }
    if(!validate16Number(creditCardNumber)){
      setErrorCardNumber('Ձեր բանկային քարտի համարը սխալ է, պետք է լինի 16 թիվ:');
      return;
    }
    // console.log({
    //   creditCardNumber,
    //   country,
    //   city
    // })
  }

  React.useEffect(() => {

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




      fetch(`/api/Hotel/ReserveInfoForUser`, {
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
            if(res){
              const resultList: Array<ReservedListModel> = [];
                res.forEach(reserve => {
                    const current = new ReservedListModel();
                    current.creditCardNumber = reserve.creditCardNumber;
                    current.hotelName = reserve.hotelName;
                    current.district = reserve.district;
                    current.address = reserve.address;
                    current.phone = reserve.phone;
                    current.photoSource = reserve.photoSource;
                    current.roomType = reserve.roomType;
                    current.from = reserve.from;
                    current.to = reserve.to;
                    current.allPrice = reserve.allPrice;
                    current.bedQuantity = reserve.bedQuantity;
                    resultList.push(current);
                });
                
                setReservedList(resultList);
            }
        })
        .catch((error)=>{
            console.log('catch error', error);
        });

  }, []);
console.log(reservedList)
console.log(userInfo)
  return (
        <div className={classes.main}>
        
          <div className={classes.editInfo}>
          <h4>Խմբագրել անձնական տյալները</h4>
          <h4>{userInfo && userInfo.Name + ' ' + userInfo.Surname}</h4>
            <div className={classes.resetPwd}>
              <h5 style={{paddingTop: 30}}>Փոխել գաղտնաբառը</h5>
              <span style={{color: 'red', fontSize: 10}}>{errorPwd}</span>
                <TextField
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 16,
                }}
                type="password"
                value={oldPassword}
                name="oldPassword"
                label='Հին Գաղտնաբառ'
                onChange={(e) => setOldPassword(e.target.value)}
                className={classes.inputColor}
                style={{"marginTop": 12}}
              />
              <TextField
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 16,
                }}
                type="password"
                value={newPassword}
                name="newPassword"
                label='Նոր Գաղտնաբառ'
                onChange={(e) => setNewPassword(e.target.value)}
                className={classes.inputColor}
                style={{"marginTop": 12}}
              />
              
              <Button 
                style={{margin: '20px auto 0px auto'}}
                onClick={resetPassword}
                variant="success"
              >
              Հաստատել
              </Button>
            </div>  
            <div className={classes.changeOtherInfo}>
            <span style={{color: 'red', fontSize: 10}}>{errorCardNumber}</span>
                  <TextField
                  variant="outlined"
                  fullWidth
                  value={creditCardNumber}
                  inputProps={{
                    maxLength: 16,
                  }}
                  name="creditCardNumber"
                  label='Բանկային քարտի համար XXXX XXXX XXXX XXXX'
                  onChange={(e) => setCreditCardNumber(e.target.value)}
                  className={classes.inputColor}
                  style={{"marginTop": 12}}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  value={city}
                  inputProps={{
                    maxLength: 20,
                  }}
                  name="city"
                  label='Քաղաք'
                  onChange={(e) => setCity(e.target.value)}
                  className={classes.inputColor}
                  style={{"marginTop": 12}}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  value={country}
                  inputProps={{
                    maxLength: 20,
                  }}
                  name="country"
                  label='Երկիր'
                  onChange={(e) => setCountry(e.target.value)}
                  className={classes.inputColor}
                  style={{"marginTop": 12}}
                />
                <Button 
                  style={{margin: '20px auto 0px auto'}}
                  onClick={resetOtherInfo}
                  variant="success"
                >
                Հաստատել
                </Button>
            </div>
          </div>
          <div className={classes.showInfo}>
            <h3 style={{margin: '0 auto', marginBottom: 30}}>Ձեր ամրագրումները</h3>
            <div className={classes.reservedList}>
            {reservedList && 
              reservedList.map((res) => {
                var imgUrl = res.photoSource.split('\\').join('/');
                return (
                <div key={idGenerator()} className={classes.oneReserve}>
                  <div className={classes.img} style={{backgroundImage: `url(${imgUrl})`}} />
                  <div className={classes.infoMoney}>
                    <h5>{res.hotelName}</h5>
                    <h6>Հասցե {res.address}</h6>
                    <h6>Հեռ. {res.phone}</h6>
                    <h5>{DateUtil.formatDate(res.from)}-ից մինչև {DateUtil.formatDate(res.to)}</h5>
                    <h6>{`${res.roomType} համար ${res.allPrice}դրամ`}</h6>
                  </div>
                </div>
                );
              })
            } 
                  
            </div>
          </div>
             
        </div>
        )
    
}

export default withStyles(styles)(PersonalPage);