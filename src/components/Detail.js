import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FoursquareLogo from "./FoursquareLogo.js";
import GoogleMapsIcon from "./GoogleMapsIcon.js";
import Spinner from "./Spinner";
import { ReactComponent as Close } from "../images/close.svg";
import { store } from "../index";
import { connect } from "react-redux";
import Img from "react-image";

import {
  DetailContainer,
  DetailImgContainer,
  Review,
  SbsqPick,
  Website,
  FlexContainer,
  ExternalLinks,
  GoogleMapsLink,
  FsqLink
} from "./StyledComps";

const Detail = ({ match, likes, sobayas }) => {
  const sobaya = sobayas.find(sobaya => sobaya.id === match.params.id);
  const image_1 = (
    <Img
      src={require(`../images/${sobaya.id}_1.jpg`)}
      alt={sobaya.name}
      loader={<Spinner />}
    />
  );
  const image_2 = (
    <Img
      src={require(`../images/${sobaya.id}_2.jpg`)}
      alt={sobaya.name}
      loader={<Spinner />}
    />
  );

  const f_client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";

  useEffect(() => {
    if (sobaya && !likes[sobaya.id]) {
      console.log("Now fetching Likes Count!!");
      fetch(
        `https://api.foursquare.com/v2/venues/${
          sobaya.fsq
        }/likes?client_id=${f_client_id}&client_secret=${
          process.env.REACT_APP_NOW_F_API_KEY
        }&v=20190601`
      )
        .then(res => res.json())
        .then(json => {
          /* response summery can be Japanese
          when request made by the client
          whose primary language is Japanese */
          const summary = json.response.likes.summary;
          store.dispatch({
            type: "SET_LIKE",
            sobaya: sobaya.id,
            likes: summary
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }, [sobayas]);

  return (
    <DetailContainer>
      <Link to="/">
        <Close />
      </Link>
      {sobaya && (
        <>
          <div className="name">
            <h1 style={{ display: `inline` }}>{sobaya.name.en}</h1>
            <p style={{ display: `inline`, marginLeft: `1rem` }} className="jp">
              {sobaya.name.jp}
            </p>
          </div>
          <div className="neighborhood">
            <h3 style={{ textAlign: `right` }}>{sobaya.neighborhood}</h3>
          </div>
          {sobaya.review && (
            <Review>
              <p>{sobaya.review.en}</p>
            </Review>
          )}
          <FlexContainer d="row" j="space-between">
            <SbsqPick>
              <p>
                SOBASQUARE Pick: <strong>{sobaya.pick.en}</strong>
              </p>
            </SbsqPick>
            {sobaya.url && (
              <Website>
                <a href={sobaya.url} target="_blank" rel="noopener noreferrer">
                  <span>Visit website</span>
                </a>
              </Website>
            )}
          </FlexContainer>

          <DetailImgContainer>
            <div>{image_1}</div>
            <div>{image_2}</div>
          </DetailImgContainer>
          <ExternalLinks>
            <GoogleMapsLink>
              <a
                href={sobaya.googlemaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Open in Google Maps</span>
                <GoogleMapsIcon />
              </a>
            </GoogleMapsLink>
            <FsqLink>
              <a
                href={`https://foursquare.com/v/${sobaya.fsq}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {likes[sobaya.id] === undefined ? (
                  <>LOADING</>
                ) : (
                  <>
                    <span className="likes">{likes[sobaya.id]}</span>
                    <FoursquareLogo />
                  </>
                )}
              </a>
            </FsqLink>
          </ExternalLinks>

          <div className="address">{sobaya.address}</div>
        </>
      )}
    </DetailContainer>
  );
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas,
    likes: state.likes
  };
};

export default connect(mapStateToProps)(Detail);
