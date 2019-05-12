import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./Map";
import InfoWindow from "./InfoWindow";

class GoogleMap extends Component {
  state = {
    position: [
      { lat: 35.65, lng: 139.84 },
      { lat: 35.65, lng: 139.81 },
      { lat: 35.6, lng: 139.84 }
    ]
  };

  constructor() {
    super();
  }

  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    infoWindow.addListener("domready", e => {
      render(<InfoWindow />, document.getElementById("infoWindow"));
    });
    infoWindow.open(map);
  }

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 35.652832, lng: 139.839478 },
          zoom: 10
        }}
        onMapLoad={map =>
          this.state.position.map(point => {
            var marker = new window.google.maps.Marker({
              position: point,
              map: map,
              title: "Hello Istanbul!"
            });
            marker.addListener("click", e => {
              this.createInfoWindow(e, map);
            });
          })
        }
      />
    );
  }
}
export default GoogleMap;
