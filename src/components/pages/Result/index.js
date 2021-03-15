import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import classes from './style.module.css';


function Result(props){
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
    console.log(props.match.params);

    return (
        <div className={classes.main}>
            <div className={classes.formInputs}>
                <div className={classes.dates}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            className={classes.inputColor}
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
            </div>   
        </div>
    );


}

export default Result;
