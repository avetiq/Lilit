import React from "react";
import { YMaps, Map, Placemark, FullscreenControl, Popup } from "react-yandex-maps";

class LocationMap extends React.Component {
  


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
    {
      closePoints.map((point) => 
      <Placemark 
        key={point.lat.toString() + ' ' + point.lng.toString()}
        geometry={[point.lat, point.lng]}
        onClick={() => console.log(point)}
        options={{
          preset: "islands#icon",
          iconColor: 'red'
        }}
      />
      )
    }
    {
      <span>
        ooo
      </span>
    }
    <FullscreenControl />
    </Map>
  </YMaps>
);
}
}

export default LocationMap;