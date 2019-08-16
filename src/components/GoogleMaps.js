import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../images/close.svg';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options,
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_NOW_G_API_KEY}`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
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
  position: fixed;
  opacity: 0.9;
  background-color: white;
  top: 0;
  left: 0;
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
  const { id } = props;
  const { en, jp } = props.name;
  const { neighborhood } = props;
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
        Learn More{' '}
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
          zoom: 11.5,
          styles: [
            {
              elementType: 'geometry',
              stylers: [
                {
                  color: '#ebe3cd',
                },
              ],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#523735',
                },
              ],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#f5f1e6',
                },
              ],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#c9b2a6',
                },
              ],
            },
            {
              featureType: 'administrative.land_parcel',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#dcd2be',
                },
              ],
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#ae9e90',
                },
              ],
            },
            {
              featureType: 'administrative.neighborhood',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#dfd2ae',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#dfd2ae',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#93817c',
                },
              ],
            },
            {
              featureType: 'poi.business',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry.fill',
              stylers: [
                {
                  color: '#a5b076',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#447530',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#f5f1e6',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#fdfcf8',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#f8c967',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#e9bc62',
                },
                {
                  weight: 1,
                },
              ],
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#e98d58',
                },
                {
                  weight: 1.5,
                },
              ],
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#db8555',
                },
                {
                  weight: 0.5,
                },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#806b63',
                },
              ],
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#aaaaaa',
                },
              ],
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#8f7d77',
                },
              ],
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#ebe3cd',
                },
              ],
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#dfd2ae',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [
                {
                  color: '#b9d3c2',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'labels.text',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#92998d',
                },
              ],
            },
          ],
        }}
        onMapLoad={map => {
          const infoWindow = new window.google.maps.InfoWindow();
          sobayasInfo.coords.forEach((point, idx) => {
            const marker = new window.google.maps.Marker({
              position: point,
              map,
              title: "Sobaya's Info",
            });

            window.google.maps.event.addListener(marker, 'click', e => {
              infoWindow.close(); // Close previously opened infowindow
              infoWindow.setContent("<div id='infoWindow'></div>");
              infoWindow.addListener('domready', e => {
                render(
                  <InfoWindow
                    id={sobayasInfo.id[idx]}
                    name={sobayasInfo.name[idx]}
                    neighborhood={sobayasInfo.neighborhood[idx]}
                    vibe={sobayasInfo.vibe[idx]}
                  />,
                  document.getElementById('infoWindow'),
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

const mapStateToProps = ({ sobayas }) => ({
  sobayasInfo: {
    id: sobayas.map(s => s.id),
    name: sobayas.map(s => s.name),
    neighborhood: sobayas.map(s => s.neighborhood),
    coords: sobayas.map(s => s.coords),
    vibe: sobayas.map(s => s.vibe),
  },
});

export default connect(mapStateToProps)(GoogleMaps);
