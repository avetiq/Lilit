import React from 'react';
import {Container, TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import LogInModel from '../../../models/logIn';
import {parseCookies, setCookie } from 'nookies'
import PersonalInfoModel from '../../../models/personalinfo';


function PersonalPage(props) {

  const {classes} = props;
  
  const cookies = parseCookies()

  const [userInfo, setUserInfo] = React.useState(null);

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

  }, []);
  console.log(userInfo)
      return (
        <div className={classes.main}>
        
          <div className={classes.editInfo}>
          <h4>Խմբագրել անձնական տյալները</h4>
            <TextField
            variant="outlined"
            fullWidth
            //value={userName}
            name="userName"
            label='Մուտքանուն'
            //onChange={handleChangeName}
            className={classes.inputColor}
            style={{"marginTop": 12}}
          />
          <TextField
            variant="outlined"
            fullWidth
            type="password"
            //value={password}
            name="password"
            label='Գաղտնաբառ'
            //onChange={handleChangeName}
            className={classes.inputColor}
            style={{"marginTop": 12}}
          />
          </div>
          <div className={classes.showInfo}>
            {userInfo && <div className={userInfo.Gender === 'F' ? classes.female : classes.male} />}
            <h4>{userInfo && userInfo.Name + ' ' + userInfo.Surname}</h4>
          </div>
             
        </div>
        )
    
}

export default withStyles(styles)(PersonalPage);