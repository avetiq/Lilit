import React from "react";
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";
import {Link} from 'react-router-dom';


class LocationMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pointId: -1,
      pointName: '',
    };
  }
  


render() {
  const center = this.props.centerCoordinates;
  const {closePoints} = this.props;
  const mapData = {
    center: center || [40.177630, 44.512618],
    zoom: 14,
    behaviors: ["default", "scrollZoom"],
    controls: [],
    yandexMapDisablePoiInteractivity: false,
  };

  console.log(this.state.pointName);
    // draw at first out place then close points

return (
  <YMaps query={{apikey: 'key' }}>
    <Map
      defaultState={mapData}
      modules={["geolocation", "geocode"]}
      instanceRef={this.props.instanceRef}
    >
    <Placemark geometry={center} 
      options={{
        preset: "islands#dotIcon",
      }}
    />
    {closePoints.length > 0 &&
      closePoints.map((point) => 
      <Placemark 
        key={point.lat.toString() + ' ' + point.lng.toString()}
        geometry={[point.lat, point.lng]}
        onClick={() => this.setState({pointId: point.id, pointName: point.name })}
        options={{
          preset: "islands#icon",
          iconColor: 'red'
        }}
      />
      )
    }
    {this.props.forHotelPage ?
      <Link to={{pathname:`/result/view`,query:{id: this.state.pointId, name: this.state.pointName}}}>
          <h6 style={{fontSize: '18px', marginBottom: 12}}>{this.state.pointName}</h6>
      </Link> : 
      <Link to={{pathname:`/result/hotel`,query:{id: this.state.pointId, name: this.state.pointName}}}>
          <h6 style={{fontSize: '18px', marginBottom: 12}}>{this.state.pointName}</h6>
      </Link>
    }
    <FullscreenControl />
    </Map>
  </YMaps>
);
}
}

export default LocationMap;