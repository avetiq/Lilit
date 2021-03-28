import 'date-fns';
import React from 'react';
import {
    Container, TextField, FormControl, Select, InputLabel
  } from '@material-ui/core';
import {districts} from '../../../config/general'; 
import { Button } from 'react-bootstrap';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Link} from 'react-router-dom';
import idGenerator from '../../../helpers/idGenerator';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

function Search(props) {

  const {classes} = props;
  
  const [hotel, setHotel] = React.useState('');
  const [view, setView] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [bedQuantity, setBedQuantity] = React.useState('');
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [allInputsEmpty, setAllInputsEmpty] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const bedArray = [1,2,3,4,5];

  const handleDateChange = (date, isFirst) => {
    if(isFirst){
      setDateFrom(date);
    }else{
      setDateTo(date);
    }
  };

  React.useEffect(() => {
    if(view.trim() === "" && hotel.trim() === ""){
      setAllInputsEmpty(true);
    }else{
      setAllInputsEmpty(false);
    }

    if(hotel.trim() !== "" && dateFrom === null){
        setHasError(true);
    }else{
      setHasError(false);
    }

    if(dateFrom !== null){
      setDateFrom(dateFrom);
    }

    if(dateTo !== null){
      setDateTo(dateTo);
    }
    
    
  }, [hotel, view, dateFrom, dateTo]);

  const handleChangeName = (event) => {
    const insertedText = event.target.value;
    switch(event.target.name){
      case "hotel":
        setHotel(insertedText);
        break;
      case "district" : 
        setDistrict(insertedText);
        break;
      case "view" : 
        setView(insertedText);
        break;
      case "bedQuantity" :
        setBedQuantity(insertedText);
      default: 
       break;
    }
    
  };

      return (
        <div className={classes.main}>
        <div className={classes.root}>
        
            <div className={classes.d2}>
              <p className={classes.p2}>WELCOME</p> <p className={classes.p2}>TO ARMENIA</p>
              <p className={classes.line}></p>
            </div>
          <Container component="main" maxWidth="sm" className={classes.container}> 
            <div className={classes.errorDiv}> 
              <p className={classes.error}>Լրացրեք հյուրանոցի կամ տեսարժան վայրի անվանում փնտրելու համար</p>
            </div>
            <TextField
              variant="outlined"
              fullWidth
              value={hotel}
              name="hotel"
              label='Հյուրանոցի անվանում'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={view}
              name="view"
              label='Տեսարժան վայրի անվանում'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <FormControl variant="outlined" className={classes.formControl} style={{"marginTop": 12}}>
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

            <FormControl variant="outlined" className={classes.formControl} style={{"marginTop": 12}}>
              <InputLabel htmlFor="outlined-age-native-simple">Ընտրեք տեղերի քանակը</InputLabel>
              <Select
                native
                value={bedQuantity}
                onChange={handleChangeName}
                label="Ընտրեք տեղերի քանակը"
                name="bedQuantity"
                className={classes.selectWidth}
              >
                <option aria-label="None" value="" />
                {bedArray.map((bedNumber) => {
                  return (
                      <option key={idGenerator()} value={bedNumber}>{bedNumber}</option>
                    )
                  })
                }
              
              </Select>
            </FormControl>
        
            <div className={classes.dates}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={`${classes.inputColor} ${classes.datesInputStyle}`}
                  variant="inline"
                  format="dd/MM/yyyy"
                  label="Սկսած"
                  value={dateFrom}
                  name="dateFrom"
                  onChange={(date)=>handleDateChange(date, true)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              {hasError && <div style={{"margin": 0}}>
                <p className={classes.errorSM}>Լրացրեք նաև սկսած ժամանակը</p>
              </div>}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={`${classes.inputColor} ${classes.datesInputStyle}`}
                  variant="inline"
                  format="dd/MM/yyyy"
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
            {hasError && <div style={{"margin": 0}}>
                <p className={classes.error}>Լրացրեք նաև սկսած ժամանակը</p>
            </div>}
            {!allInputsEmpty && !hasError && <div className={classes.searchBtn}>
            <Link to={{pathname:`/result`,query:{hotel, view, district, bed: bedQuantity, from: dateFrom, to: dateTo}}}>
              <Button 
                variant="success"
                >
                Փնտրել
                </Button>
              </Link>
            </div>}
          </Container>  
        </div>
        </div>
        )
    
}

export default withStyles(styles)(Search);