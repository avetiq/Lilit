import React from 'react';
import {Container, TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import LogInModel from '../../../models/logIn';
import { setCookie } from 'nookies'

function LogIn(props) {

  const {classes} = props;
  
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const SubmitLogin = () => {
      const logInInfo = new LogInModel();
      logInInfo.userName = userName;
      logInInfo.password = password;

      fetch(`/api/Auth/login?`+ new URLSearchParams({
          Username: userName,
          Password: password
        }), 
        {
          method: 'POST',
        })
        .then(response => response.json())
        .then(json => {
          if(json.token !== ""){
            setCookie(null, 'username', json.username, {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            });
          window.location.assign('/personal-page');

          }else{
            setUserName('');
            setPassword('');
            setError('Սխալ մուտքանուն կամ գաղտնաբառ։')
          }
          
        })
        .catch((error)=>{
          console.log('catch error', error);
      });
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
      
      default: 
       break;
    }
  }
      return (
        <div className={classes.main}>
        <div className={classes.root}>
        
            <div className={classes.d2}>
              <p className={classes.p2}>Log In</p> 
              <p className={classes.line}></p>
            </div>
          <Container component="main" maxWidth="sm" className={classes.container}> 
            <div className={classes.errorDiv}> 
              <p className={classes.error}>Եթե գրանցված չեք, ապա սեղմեք </p>
                <Link 
                style={{marginLeft: 5}}
                className={classes.error} 
                to={{pathname:`/register`,query:{}}}>
                այստեղ
                </Link>
              
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
            <span style={{color: 'red', fontSize: 10}}>{error}</span>
            {<div className={classes.searchBtn}>
            
              <Button 
                onClick={SubmitLogin}
                variant="success"
                >
                Մուտք
                </Button>
              
            </div>}
          </Container>  
        </div>
        
        </div>
        )
    
}

export default withStyles(styles)(LogIn);