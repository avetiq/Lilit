import React from 'react';
import {
  TextField, FormControl, Select, InputLabel
} from '@material-ui/core';
import classes from './style.module.css';
import idGenerator from '../../helpers/idGenerator';
import {districts} from '../../config/general'; 
import { Button } from 'react-bootstrap';


function ViewSearch(props) {
    
    
    const [view, setView] = React.useState(props.view ? props.view : '');
    const [district, setDistrict] = React.useState(props.district ? props.district : '');

    const handleChangeName = (event) => {
      const insertedText = event.target.value;
      switch(event.target.name){
        case "view":
          setView(insertedText);
          break;
        case "district" : 
          setDistrict(insertedText);
          break;
        default: 
         break;
      }
    }

    return (
        <div className={classes.main}>
            <TextField
              variant="outlined"
              fullWidth
              value={view.replaceAll('+', ' ')}
              name="view"
              label='Տեսարժան վայր'
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
                className={classes.inputColor}
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
            
            <div className={classes.btnDiv}>
              <Button 
                  onClick={()=>props.ViewParent({view, district})}
                  style={{backgroundColor: '#3b8053', borderColor: 'transparent'}}

                  >
                  Փնտրել
              </Button>
            </div>  
        </div>  
        
    );


}

export default ViewSearch;
