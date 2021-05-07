
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {validateEmail, validate16Number} from '../../helpers/validates';
import { Container, TextField} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

function EditTaskModal(props){
      
        const {onClose, classes, modalClose} = props;

        const [userName, setUserName] = React.useState('');
        const [passportid, setPassportid] = React.useState('');
        const [name, setName] = React.useState('');
        const [surname, setSurname] = React.useState('');
        const [gender, setGender] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [city, setCity] = React.useState('');
        const [creditCardNumber, setCreditCardNumber] = React.useState('');
        const [country, setCountry] = React.useState('');
        const [errorMail, setErrorMail] = React.useState('');
        const [errorCreditCard, setErrorCreditCard] = React.useState('');

        const onSave = () => {
            console.log('save')
            //modalClose(false);
        }
        
        const SubmitRegistration = () => {
            
            setErrorMail('');
            setErrorCreditCard('');
            if(!validateEmail(email)){
                setErrorMail('Ձեր էլ-փոստի հասցեն սխալ է:');
            }
            if(creditCardNumber.length < 16){
                setErrorCreditCard(' Ձեր բանկային քարտի համարը սխալ է:');
            }
            if(!validate16Number(creditCardNumber)){
                setErrorCreditCard(' Ձեր բանկային քարտի համարը սխալ է, պետք է թվեր լինեն:');
            }
            

        }

        const handleChangeName = (event) => {
            const insertedText = event.target.value;
            switch(event.target.name){
            case "userName":
                setUserName(insertedText);
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

        return(
            <Modal
            show={true}
            onHide={modalClose}
            size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Ամրագրել համարը
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          <TextField
              variant="outlined"
              fullWidth
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
              value={surname}
              name="surname"
              label='Ազգանուն'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={gender}
              name="gender"
              label='Սեռ'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />

            <TextField
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              error={errorMail !== '' ? true : false}
              name="email"
              label='Էլ-փոստի հասցե'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
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
              error={errorCreditCard !== '' ? true : false}
              value={creditCardNumber}
              name="creditCardNumber"
              label='Բանկային քարտի համար XXXX XXXX XXXX XXXX'
              onChange={handleChangeName}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button 
            onClick={onSave}
            variant='success'
            >
            Save
            </Button>
            <Button onClick={modalClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
        );
    
}




export default withStyles(styles)(EditTaskModal);