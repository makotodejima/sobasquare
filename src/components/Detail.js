import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sobayas from "../data/sobayas.js";
import FoursquareLogo from "./FoursquareLogo.js";
import GoogleMapsIcon from "./GoogleMapsIcon";
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

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

const Detail = ({ match, likes }) => {
  const sobaya = sobayas[match.params.id];

  const img_1 = require(`../images/${sobaya.id}_1.jpg`);
  const img_2 = require(`../images/${sobaya.id}_2.jpg`);
  // const img_3 = require(`../images/${id}_3.jpg`);

  useEffect(() => {
    if (!likes[sobaya.id]) {
      console.log("Now fetching Likes Count!!");
      fetch(
        `https://api.foursquare.com/v2/venues/${
          sobayas[sobaya.id].fsq
        }/likes?client_id=${client_id}&client_secret=${client_secret}&v=20190401`
      )
        .then(res => res.json())
        .then(json => {
          /* response summery can be Japanese 
          when request made by the client 
          whose primary lang is Japanese */
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
  }, []);

  return (
    <DetailContainer>
      <Link to="/">
        <Close />
      </Link>
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
          <Img src={img_1} alt={sobaya.id} loader={`Wait`} />
        </div>
        <div>
          <Img src={img_2} alt={sobaya.name} loader={`It's loading`} />
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
    </DetailContainer>
  );
};

const mapStateToProps = state => {
  return {
    likes: state.likes
  };
};

export default connect(mapStateToProps)(Detail);
