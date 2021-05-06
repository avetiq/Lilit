import React from 'react';
import { Container, TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import RegisterModel from '../../../models/registration';


function Register(props) {

  const {classes} = props;
  
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passportid, setPassportid] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [city, setCity] = React.useState('');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [errorMail, setErrorMail] = React.useState('');
  const [errorCreditCard, setErrorCreditCard] = React.useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate16Number = (creditCardNumber) => {
  const re = /^\d{16}$/;
  return re.test(String(creditCardNumber).toLowerCase());
}
  
  const SubmitRegistration = () => {
      const RegistrationInfo = new RegisterModel();
      RegistrationInfo.userName = userName;
      RegistrationInfo.password = password;
      RegistrationInfo.passportid = passportid;
      if(!validateEmail(email)){
        setErrorMail('Ձեր էլ-փոստի հասցեն սխալ է:');
      }
      if(creditCardNumber.length < 16){
        setErrorCreditCard(' Ձեր բանկային քարտի համարը սխալ է:');
      }
      if(!validate16Number(creditCardNumber)){
        setErrorCreditCard(' Ձեր բանկային քարտի համարը սխալ է, պետք է թվեր լինեն:');
      }
      

      console.log(RegistrationInfo);
  }

  const handleChangeName = (event) => {
    const insertedText = event.target.value;
    switch(event.target.name){
      case "userName":
        setUserName(insertedText);
        break;
      case "password" : 
        setPassword(insertedText);
        break;
      case "passportid" : 
        setPassportid(insertedText);
        break;
      case "name":
        setName(insertedText);
        break;
      case "surname" : 
        setSurname(insertedText);
        break;
      case "gender" : 
        setGender(insertedText);
        break;
      case "email":
        setEmail(insertedText);
        break;
      case "city" : 
        setCity(insertedText);
        break;
      case "creditCardNumber" : 
        setCreditCardNumber(insertedText);
        break;
      case "country" : 
        setCountry(insertedText);
        break;
      default: 
       break;
    }
  }
  

      return (
        <div className={classes.main}>
        <div className={classes.root}>
        
            <div className={classes.d2}>
              <p className={classes.p2}>Register</p> 
              <p className={classes.line}></p>
            </div>
          <Container component="main" maxWidth="sm" className={classes.container}> 
            <div className={classes.errorDiv}> 
              <p className={classes.error}>{errorMail ? errorMail : ''}</p>
              <p className={classes.error}>{errorCreditCard ? errorCreditCard : ''}</p>
            </div>
            <TextField
              variant="outlined"
              fullWidth
              value={userName}
              name="userName"
              label='Մուտքանուն'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              name="password"
              label='Գաղտնաբառ'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={passportid}
              name="passportid"
              label='Անձնագրի ID'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={name}
              name="name"
              label='Անուն'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={surname}
              name="surname"
              label='Ազգանուն'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={gender}
              name="gender"
              label='Սեռ'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />

            <TextField
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              error={errorMail !== '' ? true : false}
              name="email"
              label='Էլ-փոստի հասցե'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={city}
              name="city"
              label='Քաղաք'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={country}
              name="country"
              label='Երկիր'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              error={errorCreditCard !== '' ? true : false}
              value={creditCardNumber}
              name="creditCardNumber"
              label='Բանկային քարտի համար XXXX XXXX XXXX XXXX'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            
            {<div className={classes.searchBtn}>
            
              <Button 
                onClick={SubmitRegistration}
                variant="success"
                >
                Գրանցվել
                </Button>
              
            </div>}
          </Container>  
        </div>
        
        </div>
        )
    
}

export default withStyles(styles)(Register);