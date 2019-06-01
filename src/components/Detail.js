import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoursquareLogo from "./FoursquareLogo.js";
import { ReactComponent as Gmaps } from "../images/google-maps.svg";
import { ReactComponent as Close } from "../images/close.svg";
import { store } from "../index";
import { connect } from "react-redux";
import Img from "react-image";

import {
  DetailContainer,
  DetailImgContainer,
  Review,
  SbsqPick,
  ExternalLinks,
  GoogleMapsLink,
  FsqLink
} from "./StyledComps";

const Detail = ({ match, likes, sobayas }) => {
  const sobaya = sobayas.find(sobaya => sobaya.id === match.params.id);

  const f_client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
  const f_api_key = process.env.NOW_F_API_KEY;

  useEffect(() => {
    if (sobaya && !likes[sobaya.id]) {
      console.log("Now fetching Likes Count!!");
      fetch(
        `https://api.foursquare.com/v2/venues/${
          sobaya.fsq
        }/likes?client_id=${f_client_id}&client_secret=${f_api_key}&v=20190526`
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
          <SbsqPick>
            <p>
              SOBASQUARE Pick: <strong>{sobaya.pick.en}</strong>
            </p>
          </SbsqPick>

          {sobaya.url && (
            <div className="url">
              <a href={sobaya.url} target="_blank" rel="noopener noreferrer">
                <p>{sobaya.url}</p>
              </a>
            </div>
          )}

          <DetailImgContainer>
            <div>
              <Img
                src={require(`../images/${sobaya.id}_1.jpg`)}
                alt={sobaya.id}
                loader={`Wait`}
              />
            </div>
            <div>
              <Img
                src={require(`../images/${sobaya.id}_2.jpg`)}
                alt={sobaya.name}
                loader={`It's loading`}
              />
            </div>
          </DetailImgContainer>
          <ExternalLinks>
            <GoogleMapsLink
              href={sobaya.googlemaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gmaps />
              Google Maps
            </GoogleMapsLink>
            <FsqLink>
              <a
                href={`https://foursquare.com/v/${sobaya.fsq}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {likes[sobaya.id] === undefined ? (
                  <p>Loading</p>
                ) : (
                  <p>
                    {likes[sobaya.id]}
                    <span> on Foursquare</span>
                  </p>
                )}
                <div className="logo">
                  <FoursquareLogo />
                </div>
              </a>
            </FsqLink>
          </ExternalLinks>
          <div className="address">
            <p style={{ textAlign: `center`, fontSize: `1rem` }}>
              {sobaya.address}
            </p>
          </div>
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
