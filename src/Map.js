import React from 'react';

import {withGoogleMap, GoogleMap,
        Marker} from "react-google-maps";

const GoogleMapContainer = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.defaultPosition}
  >
    <Marker defaultPosition={props.defaultPosition}
      title="Nossa loja"
    />
  </GoogleMap>
));

export default class Map extends React.Component {
  render(){
    const defaultPosition = {lat: -15.799533, lng: -48.021679};
    const zoom = 12;
    return (
      <GoogleMapContainer
        containerElement={
          <div style={{ height: "100%", minHeight: "400px" }} />
        }
        mapElement={
          <div style={{ height: "100%", minHeight: "400px" }} />
        }
        zoom={zoom}
        defaultPosition={defaultPosition}
      />
    );
  }
}
