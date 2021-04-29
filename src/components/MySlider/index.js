import React from "react";
import Slider from "react-slick";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function MySlider (props){
  
    const {images} = props;

    const prevArrow = () => {
        return <ChevronLeftIcon  />
    }

    
    const nextArrow = () => {
        return <ChevronRightIcon  />
    }

    return (
        <Slider
            className={props.className}
            dots={true} 
            infinite={true} 
            speed={1000} 
            slidesToScroll={1} 
            arrows={true} 
            slidesToShow={1}
            prevArrow={prevArrow()}
            nextArrow={nextArrow()}
            autoplay={true}
            autoplaySpeed={5000}
        >    
            {
                images.map((img) =>
                    <img src={img} key={img} width="100%" />
                )
            }
        </Slider>
    );
}
