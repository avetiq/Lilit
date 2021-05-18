import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  TextField, FormControl, Select, InputLabel
} from '@material-ui/core';
import classes from './style.module.css';
import idGenerator from '../../helpers/idGenerator';
import {districts} from '../../config/general'; 
import { Button } from 'react-bootstrap';
import DateUtil from '../../helpers/DateUtil'; 


function SearchHotel(props) {
    
    
    const [dateFrom, setDateFrom] = React.useState(props.from ? DateUtil.formatDate(props.from) : null);
    const [dateTo, setDateTo] = React.useState(props.to ? DateUtil.formatDate(props.to) : null);
    const [hotel, setHotel] = React.useState(props.hotel ? props.hotel : '');
    const [bedQuantity, setBedQuantity] = React.useState(props.bed ? props.bed : '');
    const [district, setDistrict] = React.useState(props.district ? props.district : '');
    const bedArray = [1,2,3,4,5];

    const handleChangeName = (event) => {
      const insertedText = event.target.value;
      switch(event.target.name){
        case "hotel":
          setHotel(insertedText);
          break;
        case "district" : 
          setDistrict(insertedText);
          break;
        case "bedQuantity" :
          setBedQuantity(insertedText);
        default: 
         break;
      }
    }

    const handleDateChange = (date, isFirst) => {
        
        if(isFirst){
          setDateFrom(DateUtil.formatDate(date));
        }else{
          setDateTo(DateUtil.formatDate(date));
        }
      };

      
    return (
        <div className={classes.main}>
            <TextField
              variant="outlined"
              fullWidth
              value={hotel.replaceAll('+', ' ')}
              name="hotel"
              label='Հյուրանոցի անվանում'
              onChange={handleChangeName}
              className={`${classes.inputColor} ${classes.color_input}` }
              style={{"marginTop": 12}}
            />
            <FormControl variant="outlined" className={classes.formControl} style={{"marginTop": 12}}>
              <InputLabel htmlFor="outlined-age-native-simple">Ընտրեք տեղերի քանակը</InputLabel>
              <Select
                native
                value={bedQuantity}
                onChange={handleChangeName}
                label="Ընտրեք տեղերի քանակը"
                name="bedQuantity"
                className={`${classes.inputColor} ${classes.color_input}` }
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
            <FormControl variant="outlined" className={classes.formControl} style={{"marginTop": 12}}>
              <InputLabel htmlFor="outlined-age-native-simple">Ընտրեք մարզը</InputLabel>
              <Select
                native
                value={district}
                onChange={handleChangeName}
                label="Ընտրեք մարզը"
                name="district"
                className={`${classes.inputColor} ${classes.color_input}` }
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
                        label="Սկսած"
                        value={dateFrom !== null ? DateUtil.addDays(dateFrom, 0) : null}
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
                        label="Մինչև"
                        name="dateTo"
                        value={dateTo !== null ? DateUtil.addDays(dateTo, 0) : null}
                        onChange={(date)=>handleDateChange(date, false)}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className={classes.btnDiv}>
              <Button 
                  onClick={() => {
                    props.HotelParent({
                      hotel,
                      bedQuantity,
                      district,
                      dateTo,
                      dateFrom
                    });
                  }}
                  style={{backgroundColor: '#3b8053', borderColor: 'transparent'}}

                  >
                  Փնտրել
              </Button>
            </div>  
        </div>  
        
    );


}

export default SearchHotel;
