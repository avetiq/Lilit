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

  const [pageInfo, setPageInfo] = React.useState({});

  React.useEffect(()=>{
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
    <div className={classes.main} style={{ backgroundColor: "#f0f2f5" }}>
      <div className={classes.slide} >
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </div>
      <div className={classes.content}>
        <h4>Տարվա լավագույն շրջագայության կազմակերպիչ</h4>
        <div className={classes.textAndMap}>
          <div className={classes.text}>
            {pageInfo.info}
          </div>
          <div>
            <LocationMap
              forHotelPage
              centerCoordinates={[40.184096, 44.51501]}
              closePoints={[]}
            />
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
