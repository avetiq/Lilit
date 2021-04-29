import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';


function ContactUs(props){
    
    const {classes} = props;

    return (
        <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h4>Շրջագայություն Հայաստանում</h4>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', background: "bisque",
                height: 315, width: 815,}}>
                    <div className={classes.imgLogo} style={{backgroundImage: 'url(../../../photos/logo.png)'}} />
                        
                    <div className={classes.contactInfo}>
                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 30}}>Email address</h5>
                            <h5>travelInArmenia@gmail.com</h5>
                        </div>

                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 125}}>Tel.</h5>
                            <h5>011 11 11 11</h5>
                        </div>
                        
                        <div style={{ display: 'flex'}}>
                            <h5 style={{ marginRight: 82}}>Address</h5>
                            <h5>Tumanyan 25</h5>
                    </div>
                    </div>
                </div>
                <div className={classes.ourCars}>
                    <h4>Մեր աշխատակիցները</h4>
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
