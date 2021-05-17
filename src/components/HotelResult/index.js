import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import nameConverter from "../../helpers/nameConverter";
import { Button } from "react-bootstrap";

function HotelResult(props) {
  const { classes, info, hotelFreeRooms } = props;
  console.log(hotelFreeRooms)
  return (
    <div className={classes.main}>
      <div className={classes.headerPart}>
        <div className={classes.hotelName}>
          <Link
            to={{
              pathname: `/result/hotel`,
              query: {
                id: info.id,
                name: info.name,
                bed: hotelFreeRooms.bed,
                to: hotelFreeRooms.to,
                from: hotelFreeRooms.from,
              },
            }}
          >
            <h4 style={{ fontSize: "1.3rem" }}>{info.name.indexOf("(") > 0 ? nameConverter(info.name) : info.name}</h4>
          </Link>
        </div>
      </div>
      <div className={classes.contextPart}>
        <div className={classes.imageDiv}>
          <img
            alt="hotel"
            src={info.photoSource}
            className={classes.imgStyle}
          />
        </div>
        <div className={classes.descriptionDiv}>
          <BrowserView>
            <p className={classes.descriptionText}>
              {info.longInfo.length > 450
                ? info.longInfo.substring(0, 450)
                : info.longInfo}
              ...
            </p>
          </BrowserView>
          <MobileView>
            <p className={classes.descriptionText}>
              {info.longInfo.length > 150
                ? info.longInfo.substring(0, 150)
                : info.longInfo}
              ...
            </p>
          </MobileView>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Button style={{backgroundColor: '#3b8053', borderColor: 'transparent'}} >
          <Link
          style={{textDecoration: 'none', color: 'white'}}
          to={{
            pathname: `/result/hotel`,
            query: {
              id: info.id,
              name: info.name,
              bed: hotelFreeRooms.bed,
              to: hotelFreeRooms.to,
              from: hotelFreeRooms.from,
            },
          }}
        >
          Դիտել 
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(HotelResult);
