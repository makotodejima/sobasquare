import React, { Component } from "react";
import { render } from "react-dom";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBMH7vnx1vsRZlxCAOs2sYk8_VTvXxdsYM`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "80%",
          zIndex: "10"
        }}
        id={this.props.id}
      />
    );
  }
}

const InfoWindow = props => {
  return (
    <>
      <h4>Sobaya's name</h4>
      <div>Sobaya address</div>
      <div>Sobaya link</div>
    </>
  );
};

class GoogleMaps extends Component {
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
export default GoogleMaps;
