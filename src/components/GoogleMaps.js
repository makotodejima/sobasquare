import React, { Component } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../images/close.svg";

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
      s.src = `https://maps.google.com/maps/api/js?key=${
        process.env.REACT_APP_NOW_G_API_KEY
      }`;
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
      <>
        <Ovarlay />
        <CloseButton>
          <Link to="/">
            <Close alt="Close Map" />
          </Link>
        </CloseButton>
        <StyledMap id={this.props.id} />
      </>
    );
  }
}

const Ovarlay = styled.div`
  position: absolute;
  opacity: 0.9;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 35px;
  right: 40px;
  width: 45px;
  #close {
    #line-1,
    #line-2 {
      fill: none;
      stroke-width: 4px;
      stroke: #000;
      stroke-miterlimit: 10;
    }
  }
  @media (max-width: 414px) {
    top: 20px;
    right: 20px;
    width: 40px;
  }
`;

const StyledMap = styled.div`
  background-color: white;
  position: absolute;
  top: 9rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 830px;
  width: 80%;
  height: 70%;
  opacity: 1;
  z-index: 99;
  @media (max-width: 414px) {
    top: 5rem;
    width: 95%;
    height: 85%;
  }
`;

const InfoWindow = props => {
  const id = props.id;
  const { en, jp } = props.name;
  const neighborhood = props.neighborhood;
  const vibes = props.vibe;
  return (
    <InfoWindowWrap>
      <h2 className="en">{en}</h2>
      <h4 className="jp">{jp}</h4>
      <div className="neighborhood">{neighborhood}</div>
      <div className="vibe">
        {vibes.map((v, idx) => (
          <span key={idx}>{v}</span>
        ))}
      </div>
      <a className="link" href={`/sobaya/${id}`}>
        Learn More{" "}
        <span role="img" aria-label="Look">
          👀
        </span>
      </a>
    </InfoWindowWrap>
  );
};

const InfoWindowWrap = styled.div`
  padding: 5px 10px;
  font-family: ubuntu;
  .jp {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .neighborhood {
    text-align: right;
    margin-bottom: 12px;
  }
  .vibe span {
    display: inline-block;
    margin-bottom: 12px;
    margin-right: 3px;
    border-radius: 5px;
    padding: 0 4px;
    border: solid 1px grey;
    color: grey;
  }
  .link {
    text-align: center;
    display: block;
    font-size: 1.2rem;
    text-decoration: none;

    background-color: #4285f4;
    color: #fff;
    padding: 0px 8px;
    border-radius: 5px;
  }
`;

class GoogleMaps extends Component {
  render() {
    const { sobayasInfo } = this.props;
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 35.673569558713105, lng: 139.71011635849277 },
          zoom: 11.5
        }}
        onMapLoad={map => {
          const infoWindow = new window.google.maps.InfoWindow();
          sobayasInfo.coords.forEach((point, idx) => {
            var marker = new window.google.maps.Marker({
              position: point,
              map: map,
              title: "Sobaya's Info"
            });

            window.google.maps.event.addListener(marker, "click", function(e) {
              infoWindow.close(); // Close previously opened infowindow
              infoWindow.setContent(`<div id='infoWindow'></div>`);
              infoWindow.addListener("domready", e => {
                render(
                  <InfoWindow
                    id={sobayasInfo.id[idx]}
                    name={sobayasInfo.name[idx]}
                    neighborhood={sobayasInfo.neighborhood[idx]}
                    vibe={sobayasInfo.vibe[idx]}
                  />,
                  document.getElementById("infoWindow")
                );
              });
              infoWindow.open(map, marker);
            });
          });
        }}
      />
    );
  }
}

const mapStateToProps = ({ sobayas }) => {
  return {
    sobayasInfo: {
      id: sobayas.map(s => s.id),
      name: sobayas.map(s => s.name),
      neighborhood: sobayas.map(s => s.neighborhood),
      coords: sobayas.map(s => s.coords),
      vibe: sobayas.map(s => s.vibe)
    }
  };
};

export default connect(mapStateToProps)(GoogleMaps);
