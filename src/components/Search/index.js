import 'date-fns';
import React from 'react';
import classes from './style.module.css';
import {
    Container, TextField, FormControl, Select, InputLabel
  } from '@material-ui/core';
import {districts} from '../../config/general'; 
import { Button } from 'react-bootstrap';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import idGenerator from '../../helpers/idGenerator';  

function Search() {

  const [hotel, setHotel] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);

  const handleDateChange = (date, isFirst) => {
    console.log(date);
    if(isFirst){
      setDateFrom(date);
    }else{
      setDateTo(date);
    }
  };

  const handleChangeName = (event) => {
    switch(event.target.name){
      case "hotel":
        setHotel(event.target.value);
        break;
      case "district" : 
        setDistrict(event.target.value);
        break;
      default: 
       break;
    }
  };

  const handleSubmit = () => {
    const mySearchParams = {
      hotel,
      district,
      dateFrom,
      dateTo
    }
    console.log(mySearchParams);
  };

        return (
        <div className={classes.root}>
        
            <div className={classes.d2}>
              <p className={classes.p2}>WELCOME</p> <p className={classes.p2}>TO ARMENIA</p>
              <p className={classes.line}></p>
            </div>
          <Container component="main" maxWidth="sm" className={classes.container}> 
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={hotel}
              name="hotel"
              label='Անվանում'
              onChange={handleChangeName}
              className={classes.inputColor}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Ընտրեք մարզը</InputLabel>
              <Select
                native
                value={district}
                onChange={handleChangeName}
                label="Ընտրեք մարզը"
                name="district"
                className={classes.selectWidth}
              >
                <option aria-label="None" value="" />
                {districts.map((district) => {
                  return (
                      <option key={idGenerator()} value={district}>{district}</option>
                    )
                  })
                }
              
              </Select>
            </FormControl>
        
            <div className={classes.dates}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={classes.inputColor}
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Սկսած"
                  value={dateFrom}
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
                  className={classes.inputColor}
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Մինչև"
                  name="dateTo"
                  value={dateTo}
                  onChange={(date)=>handleDateChange(date, false)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>   
            <div className={classes.searchBtn}>
              <Button 
              variant="success"
              onClick={handleSubmit}
              >
              Search
              </Button>
            </div>
          </Container>  
        </div>
        )
    
}

export default Search;