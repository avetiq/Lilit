import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Carousel } from "3d-react-carousal";
import LocationMap from "../../LocationMap";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function AboutUs(props) {
  const { classes } = props;
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <div className={classes.main} style={{ backgroundColor: "#f0f2f5" }}>
      <div className={classes.slide} >
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </div>
      <div className={classes.content}>
        <h4>Տարվա լավագույն շրջագայության կազմակերպիչ</h4>
        <div className={classes.textAndMap}>
          <div className={classes.text}>
            Մեր ընկերությունը հիմնադրվել է 2000 թվականին և մինչ օրս գործում է
            հայկական զբոսաշրջության շուկայում։ Մեր գործակալությունը մասնագիտացած
            է Հայաստանում։ Մեր կայքի միջոցով կարող եք գտնել ձեզ հարմար
            հյուրանոցները, ամրագրել դրանք, ինչպես նաև տեսնել թե ինչ մոտակա
            տեսարժան վայրեր կան, որոնք կարող եք այցելել ձեր շրջագայության
            ընթացքում։ 2021 թվականին ճանաչվեցինք տարվա լավագույն շրջագայության
            կազմակերպիչ ողջ տարածաշրջանում և համարվում ենք ոլորտի առաջատար։
          </div>
          <div>
            <LocationMap
              forHotelPage
              centerCoordinates={[40.184096, 44.51501]}
              closePoints={[]}
            />
          </div>
        </div>
        <div className={classes.ourCars}>
          <h4>Մեր կողմից տրամադրվող ավտոմեքենաները</h4>
          <div className={classes.row}>
            <div className={classes.car}>
              <h5>Mersedes S class</h5>
              <h5>100.000Դ</h5>
              <div
                className={classes.image}
                style={{ backgroundImage: "url(../../../photos/sClass.jpg)" }}
              />
            </div>
            <div className={classes.car}>
              <h5>Ferrari 458 Italia</h5>
              <h5>150.000Դ</h5>
              <div
                className={classes.image}
                style={{ backgroundImage: "url(../../../photos/bently.jpg)" }}
              />
            </div>
            <div className={classes.car}>
              <h5>Mersedes sprinter</h5>
              <h5>120.000Դ</h5>
              <div
                className={classes.image}
                style={{ backgroundImage: "url(../../../photos/sprinter.jpg)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.videoWrapper}>
        <div className={classes.video}>
          <h4 style={{ margin: "0px auto 20px auto" }}>Երևան</h4>
          <div>
            <Player
              poster="/assets/poster.png"
              src="photos/Vid.mov"
              loop
              autoPlay
              muted
            />
          </div>
        </div>
        <div className={classes.video}>
          <h4 style={{ margin: "0px auto 20px auto" }}>Աժդահակ</h4>
          <div>
            <Player
              loop
              autoPlay
              muted
              poster="/assets/poster.png"
              src="photos/vid2.mov"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(AboutUs);
