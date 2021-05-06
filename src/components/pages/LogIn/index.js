import React from 'react';
import {Container, TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import LogInModel from '../../../models/logIn';


function LogIn(props) {

  const {classes} = props;
  
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SubmitLogin = () => {
      const logInInfo = new LogInModel();
      logInInfo.userName = userName;
      logInInfo.password = password;

      console.log(logInInfo);
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
            
            {<div className={classes.searchBtn}>
            <Link to={{pathname:`/`,query:{}}}>
              <Button 
                onClick={SubmitLogin}
                variant="success"
                >
                Մուտք
                </Button>
              </Link>
            </div>}
          </Container>  
        </div>
        
        </div>
        )
    
}

export default withStyles(styles)(LogIn);