import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import searchResult from '../../../models/searchResult';
import Spinner from '../../Spinner';
import 'react-slideshow-image/dist/styles.css';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

function View(props){
    
    const {classes} = props;
    const initialSearchValues = props.location.query;

    const [content, setContent] = React.useState();
    const [spinner, setSpinner] = React.useState(true);
    const [images, setImgaes] = React.useState([]);

    React.useEffect(()=>{
        
        fetch(`/api/View/${initialSearchValues.id}`, {
            method: 'GET',
        })
            .then(async (response) => {
                const res = await response.json();

                if(response.status >=400 && response.status < 600){
                    if(res.error){
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }
                return res;
            })
            .then((res) =>{
                
                const data = new searchResult();
                data.id = res[0].id;
                data.name = res[0].name;
                data.district = res[0].district;
                data.photoSource = res[0].photoSource;
                data.longInfo = res[0].longInfo;
                data.latitude = res[0].latitude;
                data.longitude = res[0].longitude;
                data.phone = res[0].phone;
                data.address = res[0].address;
                
                setContent(data);
            })
            .catch((error)=>{
                console.log('catch error', error);
            });

            //geting photos
            fetch(`/api/View/Photos/${initialSearchValues.id}`, {
                method: 'GET',
            })
                .then(async (response) => {
                    const res = await response.json();
    
                    if(response.status >=400 && response.status < 600){
                        if(res.error){
                            throw res.error;
                        }
                        else {
                            throw new Error('Something went wrong!');
                        }
                    }
                    return res;
                })
                .then((res) =>{
                    
                    const imgList: Array<String> = [];
                    res.forEach(name => {
                        imgList.push(name);
                    });

                    setImgaes(imgList);
                    setSpinner(false);
                })
                .catch((error)=>{
                    console.log('catch error', error);
                });

    }, [])
const imagesShow = images.map((name) => ({
    src: name,
    sizes: '300px , 300px'
  }));
  console.log(content);
    return (
        <div className={classes.main}>
            <div className={classes.headerContent}>
                <h4 style={{margin: '0 auto'}}>{content && content.name}</h4>
                <Carousel images={imagesShow} className={classes.carousel}/>
            </div>
            {
                spinner && <Spinner />
            }
        </div>
    );


}

export default withStyles(styles)(View);
