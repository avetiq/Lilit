import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SearchHotel from "../../SearchHotel";
import ViewSearch from "../../ViewSearch";
import HotelResult from "../../HotelResult";
import ViewResult from "../../ViewResult";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import searchResult from "../../../models/searchResult";
import DateUtil from "../../../helpers/DateUtil";
import idGenerator from "../../../helpers/idGenerator";
import objectFromSearchParams from "../../../helpers/objectFromSearchParams";
import Spinner from "../../Spinner";


function Result({ classes }) {
  
  const [hotelSearch, setHotelSearch] = useState(true);
  const [viewSearch, setViewSearch] = useState(false);
  const [hotelList, setHotelList] = useState();
  const [viewList, setViewList] = useState();
  const [hotelFreeRooms, setHotelFreeRooms] = useState();
  const [spinner, setSpinner] = useState(true);

  const { search } = useLocation();

  const initialSearchValues = objectFromSearchParams(search);

  console.log(initialSearchValues);

  const [district, setDistrict] = React.useState(initialSearchValues.district);

    const HotelParent = (hotelSearchParams) => {

        window.location.assign(`/result?${new URLSearchParams({
            hotel: hotelSearchParams.hotel,
            view: '',
            district: hotelSearchParams.district,
            bed: hotelSearchParams.bedQuantity ? parseInt(hotelSearchParams.bedQuantity) : '',
            from: hotelSearchParams.dateFrom ? hotelSearchParams.dateFrom : '',
            to: hotelSearchParams.dateTo ? hotelSearchParams.dateTo : '',
          }).toString()}`);

        
    }

    const ViewParent = (viewSearchParams) => {
        
        window.location.assign(`/result?${new URLSearchParams({
                  hotel: '',
                  view: viewSearchParams.view,
                  district: viewSearchParams.district,
                  bed: '',
                  from: '',
                  to: '',
                }).toString()}`);
              
                
        
    }

  useEffect(() => {
    const initialHotelFreeRooms = {
      from: initialSearchValues.from ? DateUtil.formatDate(initialSearchValues.from) : null,
      to: initialSearchValues.to ? DateUtil.formatDate(initialSearchValues.to) : null,
      bed: initialSearchValues.bed,
    };
    console.log(initialHotelFreeRooms)
    setHotelFreeRooms(initialHotelFreeRooms);

    fetch(
      `/api/Travel?` +
        new URLSearchParams({
          HotelName: initialSearchValues.hotel,
          ViewName: initialSearchValues.view,
          District: initialSearchValues.district,
          From: initialSearchValues.from
            ? DateUtil.formatDate(initialSearchValues.from)
            : "",
          To: initialSearchValues.to
            ? DateUtil.formatDate(initialSearchValues.to)
            : "",
          BedQuantity: initialSearchValues.bed
            ? parseInt(initialSearchValues.bed)
            : "",
        }),
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
        const dataHotel = [];
        const dataView = [];
        res.forEach((resElement) => {
          const current = new searchResult();
          current.id = resElement.id;
          current.name = resElement.name;
          current.district = resElement.district;
          current.photoSource = resElement.photoSource;
          current.longInfo = resElement.longInfo;
          current.latitude = resElement.latitude;
          current.longitude = resElement.longitude;
          if (resElement.isHotel) {
            dataHotel.push(current);
          } else {
            dataView.push(current);
          }
        });

        setHotelList(dataHotel);
        setViewList(dataView);
        setSpinner(false);
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  }, []);

    return (
        <div className={classes.main}>
            <div className={classes.headerLinks}>
                <div className={classes.headerLinksColor}>
                    <Button
                    variant="success"
                    className={`${classes.buttonPadding} ${hotelSearch ? classes.buttonHeightMax : classes.buttonHeightMin}`}
                    onClick={()=> {
                        if(!hotelSearch){
                            setHotelSearch(!hotelSearch); setViewSearch(!viewSearch);
                        }
                    }}
                    >
                        <p className={`${hotelSearch ? classes.linkBackground : ''}`}>Հյուրանոցներ</p>
                    </Button>
                </div>
                <div className={classes.headerLinksColor}>
                    <Button
                    className={`${classes.buttonPadding} ${viewSearch ? classes.buttonHeightMax : classes.buttonHeightMin}`}
                    variant="success"
                    onClick={()=> {
                        if(!viewSearch){
                            setViewSearch(!viewSearch); setHotelSearch(!hotelSearch);
                        }
                    }}
                    >
                        <p className={`${viewSearch ? classes.linkBackground : ''}`}>Տեսարժան վայրեր</p>
                    </Button>    
                </div>
            </div>
            <div className={classes.formInputs}>
                {hotelSearch && <SearchHotel
                    HotelParent={HotelParent}
                    hotel={initialSearchValues.hotel}
                    district={district}
                    bed={initialSearchValues.bed}
                    from={initialSearchValues.from}
                    to={initialSearchValues.to}
                />}
                {viewSearch && <ViewSearch
                    ViewParent={ViewParent}
                    view={initialSearchValues.view}
                    district={district}
                    />}
            </div>
            {
                hotelSearch && hotelList &&
                hotelList.map((el) => 
                    <HotelResult
                        key={idGenerator()}
                        info={el}
                        hotelFreeRooms={hotelFreeRooms}
                    />
                )
            }
            {
                viewSearch && viewList &&
                viewList.map((el) => 
                    <ViewResult
                        key={idGenerator()}
                        info={el}
                    />
                )
            }
            {
                spinner && <Spinner />
            }
        </div>
    );

}

export default withStyles(styles)(Result);
