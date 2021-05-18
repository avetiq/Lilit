import React, { useEffect, useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';


function ContactUs(props){
    
    const {classes} = props;

    const [pageInfo, setPageInfo] = useState({});

    useEffect(()=>{
        fetch(
            `/api/Auth/ArmTravelInfo`,
            {
              method: "GET",
            }
          )
            .then(async (response) => {
              const res = await response.json();
      
              if (response.status >= 400 && response.status < 600) {
                if (res.error) {
                      throw res.error;
                } else {
                    throw new Error("Something went wrong!");
                }
              }
              return res;
            })
            .then((res) => {
              setPageInfo({
                address: res.address,
                email: res.email,
                info: res.info,
                logo: res.logo,
                phone: res.phone
              });
            })
            .catch((error) => {
              console.log("catch error", error);
            });
        }, []);
      

    return (
        <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h4 style={{color: 'rgb(172, 91 ,114)'}} >Ճանապարհորդություն Հայաստանում</h4>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', background: "gainsboro",
                height: 315, width: 815,}}>
                    <div className={classes.imgLogo} style={{backgroundImage: 'url(../../../photos/logo.png)'}} />
                        
                    <div className={classes.contactInfo}>
                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 30}}>Email հասցե</h5>
                            <h5>{pageInfo.email}</h5>
                        </div>

                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 110}}>Հեռ.</h5>
                            <h5>{pageInfo.phone}</h5>
                        </div>
                        
                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 84}}>Հասցե</h5>
                            <h5>{pageInfo.address}</h5>
                    </div>
                    </div>
                </div>
                <div className={classes.ourCars}>
                    <h4 style={{color: 'rgb(172, 91 ,114)'}} >Մեր աշխատակիցները</h4>
                    <h5>Նրանք միշտ պատրաստ ենք ցանկացած հարցի դեպքում ձեզ օգնության հասնել։</h5>
                    <div className={classes.row}>
                        <div className={classes.car}>
                            <div className={classes.image} style={{backgroundImage: 'url(../../../photos/ashot.jpg)'}}/>
                            <h5>Աշոտ</h5>
                        </div>
                        <div className={classes.car}>
                            <div className={classes.image} style={{backgroundImage: 'url(../../../photos/vika.png)'}}/>
                            <h5>Վիկա</h5>
                        </div>
                        <div className={classes.car}>
                            <div className={classes.image} style={{backgroundImage: 'url(../../../photos/hrant.jpg)'}}/>
                            <h5>Հրանտ</h5>
                        </div>
                    </div>        
                </div>
            </div> 
        </div>
    );


}

export default withStyles(styles)(ContactUs);
