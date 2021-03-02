import React from 'react';
import classes from './style.module.css';
import {
    Container, Button, TextField, Typography,
  } from '@material-ui/core';

class Search extends React.Component {


    

    render() {
        const errorText = '';

        return (
            <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.content}>
        <Typography variant="subtitle1">
          some text
        </Typography>
        <Typography variant="body1" className={errorText !== '' ? classes.errorText : classes.hidden}>
          {errorText}
        </Typography>
        <div className={classes.form}>
          <Typography variant="subtitle2">
            asdasdas
          </Typography>
          <TextField
            className={classes.firstItem}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //value={user.email}
            id="email"
            name="email"
            label="email"
            type="email"
            //onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //value={user.username}
            id="username"
            name="username"
            //label={t('username')}
            //onChange={handleChange}
          />
          
          <div className={classes.signUpButton}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //onClick={handleSignUp}
            >
              <Typography variant="caption">
                asdhiasi
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </Container>
        )
    }
}

export default Search;