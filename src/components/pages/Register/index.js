import React from 'react';
import { Container, TextField, FormControl, Select, InputLabel} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {validateEmail, validate16Number} from '../../../helpers/validates';
import idGenerator from '../../../helpers/idGenerator';


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
  const [error, setError] = React.useState('');

  
  
  const SubmitRegistration = () => {
      
      setError('');
      if(creditCardNumber.length < 16){
        setError(' Ձեր բանկային քարտի համարը սխալ է:');
        return;
      }
      if(!validate16Number(creditCardNumber)){
        setError('Ձեր բանկային քարտի համարը սխալ է, պետք է լինի 16 թիվ:');
        return;
      }
      if(!validateEmail(email)){
        setError('Ձեր էլ-փոստի հասցեն սխալ է:');
        return;
      }
      if(surname.length < 5){
        setError('Ազգանուն դաշտը պիտի լինի նվազագույնը 5 սիմվոլ:');
        return;
      }
      if(name.length < 5){
        setError('Անուն դաշտը պիտի լինի նվազագույնը 5 սիմվոլ:');
        return;
      }
      if(passportid.length < 8){
        setError('Անձնագրի ID դաշտը պիտի լինի նվազագույնը 8 սիմվոլ:');
        return;
      }
      if(password.length < 8){
        setError('Գաղտնաբառ դաշտը պիտի լինի նվազագույնը 8 սիմվոլ:');
        return;
      }
      if(userName.length < 6){
        setError('Մուտքանուն դաշտը պիտի լինի նվազագույնը 6 սիմվոլ:');
        return;
      }

  

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "username": userName,
        "passportid": passportid,
        "password": password,
        "name": name,
        "surname": surname,
        "gender": gender,
        "email": email,
        "city": city,
        "creditCardNumber": creditCardNumber,
        "country": country
      })
  };
  fetch('/api/Auth/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));


      
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
              <p className={classes.error}>{error ? error : ''}</p>
            </div>
            <TextField
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 20,
              }}
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
              inputProps={{
                maxLength: 16,
              }}
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
              inputProps={{
                maxLength: 10,
              }}
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
              inputProps={{
                maxLength: 20,
              }}
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
              inputProps={{
                maxLength: 20,
              }}
              value={surname}
              name="surname"
              label='Ազգանուն'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            
            <FormControl variant="outlined" className={classes.formControl} style={{"marginTop": 12}}>
            <InputLabel htmlFor="outlined-age-native-simple">Սեռ</InputLabel>
            <Select
              native
              value={gender}
              onChange={handleChangeName}
              label="Սեռ"
              name="gender"
              className={classes.selectWidth}
            >
              <option aria-label="None" value="" />
              {['F', 'M'].map((maleType) => {
                return (
                    <option key={idGenerator()} value={maleType}>{maleType}</option>
                  )
                })
              }
            
            </Select>
          </FormControl>

            <TextField
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 30,
              }}
              type="email"
              value={email}
              name="email"
              label='Էլ-փոստի հասցե'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 20,
              }}
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
              inputProps={{
                maxLength: 30,
              }}
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
              inputProps={{
                maxLength: 16,
              }}
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
                style={{backgroundColor: '#3b8053', borderColor: 'transparent'}}
                
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