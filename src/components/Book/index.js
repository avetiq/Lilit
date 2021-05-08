
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {validateEmail, validate16Number} from '../../helpers/validates';
import { Container, TextField} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DateUtil from '../../helpers/DateUtil';
import { parseCookies } from 'nookies'
import PersonalInfoModel from '../../models/personalinfo';

function EditTaskModal(props){
      
        const {classes, modalClose, userInfo, bookInfo, content, SearchFreeRooms} = props;
        
        const [personCreditCardNumber, setPersonCreditCardNumber] = React.useState(userInfo.CreditCardNumber);
        const [error, setError] = React.useState(null);
        const [bookModel, setBookModel] = React.useState({
          from: bookInfo.from,
          to: bookInfo.to,
          hotelName: content.name,
          district: content.district,
          money: DateUtil.dateDifference(bookInfo.from, bookInfo.to)*bookInfo.money,
          bedQuantity: bookInfo.bedQuantity,
          oneNightMoney: bookInfo.money,
          userName: userInfo.Username
        });


        const onSave = () => {
          setError(null);
          if(personCreditCardNumber.length < 16){
            setError('Ձեր բանկային քարտի համարը սխալ է:');
            return;
          }
          if(!validate16Number(personCreditCardNumber)){
            setError('Ձեր բանկային քարտի համարը սխալ է, պետք է լինի 16 թիվ:');
            return;
          }
          setBookModel({
            ...bookModel,
            personCreditCardNumber
          })

            const requestOptions = {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'userName': userInfo.Username
              },
              body: JSON.stringify({
                "personCreditCardNumber": personCreditCardNumber,
                "from": bookModel.from,
                "to": bookModel.to,
                "hotelName": bookModel.hotelName,
                "district": bookModel.district,
                "money": bookModel.money,
                "bedQuantity": bookModel.bedQuantity,
                "oneNightMoney": bookModel.oneNightMoney,
                "userName": bookModel.userName
              })
            };
               fetch('/api/Travel/Book', requestOptions)
                   .then(response => response.json())
                   .then(data => console.log(data));
            alert('Շնորհակալություն, բարեհաջող ամրագրվեց ձեր սենյակը')
            SearchFreeRooms();
            modalClose();
        }

        const handleChangeCreditCard = (event) => {
            const insertedText = event.target.value;
            setPersonCreditCardNumber(insertedText);
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
              <h6>Կարող եք միայն փոփոխել քարտի համարը</h6>
            
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          <TextField
              variant="outlined"
              fullWidth
              disabled
              value={bookModel.userName}
              name="userName"
              label='Մուտքանուն'
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 16,
              }}
              value={personCreditCardNumber}
              name="personCreditCardNumber"
              label='Բանկային քարտի համար XXXX XXXX XXXX XXXX'
              onChange={handleChangeCreditCard}
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <span style={{fontSize: 10, color: 'red'}}>{error ? error : ''}</span>
            <TextField
              variant="outlined"
              fullWidth
              disabled
              value={bookModel.hotelName}
              name="hotelName"
              label='Հյուրանոցի անվանում'
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              fullWidth
              disabled
              value={bookModel.district}
              name="district"
              label='Մարզ'
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />

            <TextField
              variant="outlined"
              fullWidth
              disabled
              value={bookModel.oneNightMoney}
              name="oneNightMoney"
              label='Մեկ գիշերվա արժեքը'
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
            <TextField
              variant="outlined"
              disabled
              fullWidth
              value={bookModel.bedQuantity}
              name="bedQuantity"
              label='Տեղերի քանանկը'
              className={classes.inputColor}
              style={{"marginTop": 12}}
            />
                       
            
            <div className={classes.dates}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={`${classes.inputColor} ${classes.datesInputStyle}`}
                  variant="inline"
                  format="dd/MM/yyyy"
                  label="Սկսած"
                  disabled
                  value={bookInfo.from}
                  name="dateFrom"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={`${classes.inputColor} ${classes.datesInputStyle}`}
                  variant="inline"
                  format="dd/MM/yyyy"
                  label="Մինչև"
                  disabled
                  name="dateTo"
                  value={bookInfo.to}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div> 
          </Modal.Body>
          <Modal.Footer>
            <p>{bookModel.money}դրամ </p>
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