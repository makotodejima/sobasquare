import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flipped } from "react-flip-toolkit";
import styled, { keyframes } from "styled-components";
import sobayas from "../data/sobayas.js";
import Foursquare from "./FoursquareLogo.js";
import Times from "./Times";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

const Detail = ({ match, index }) => {
  const { id, name, neighborhood, address, recommendation, fsq } = sobayas[
    match.params.id
  ];
  const [fsqData, setFsqData] = useState({});
  const img_1 = require(`../images/${id}_1.jpg`);
  const img_2 = require(`../images/${id}_2.jpg`);

  // if (`../images/${id}_3.jpg`) {
  //   const img_3 = require(`../images/${id}_3.jpg`);
  // }

  // useEffect(() => {
  //   if (!fsqData[id]) {
  //     console.log("fetching now!!");
  //     fetch(
  //       `https://api.foursquare.com/v2/venues/${
  //         sobayas[id].fsq
  //       }?client_id=${client_id}&client_secret=${client_secret}&v=20190401`
  //     )
  //       .then(res => res.json())
  //       .then(json => {
  //         const venueData = json.response.venue;
  //         console.log(venueData);

  //         setFsqData({ ...fsqData, [id]: venueData });
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //       });
  //   }
  //   console.log(fsqData);
  // }, []);

  const sobaya = fsqData[id];

  // if (!sobaya) return <p>loading</p>;
  return (
    <Container>
      <Link to="/">
        <Times />
      </Link>

      <h1>{name.en}</h1>
      <h2>{name.jp}</h2>
      <h3>{neighborhood}</h3>
      <p>{address}</p>
      <p>
        おすすめは <strong>{recommendation}</strong>
      </p>
      <p>
        雰囲気も昔ながらの蕎麦屋かんがあってとてもいい。麺は硬めでとてもおいしい。
      </p>
      <p>www.sobaysobayasobaya.com</p>

      <ImgContainer>
        <div>
          <img src={img_1} alt={id} />
        </div>
        <div>
          <img src={img_2} alt={name} />
        </div>
      </ImgContainer>
      <hr />
      <div className="foursquare-logo">
        <Foursquare />
      </div>

      {/* <h3>{`Likes on Foursqare: ${sobaya.likes}`}</h3>
      <h3>{`Now: ${sobaya.hours.status}`}</h3>
      <h3>{`Rating on Foursquare: ${sobaya.ratings}`}</h3> */}
      {/* Website? */}
      {/* Foursquare says 'Lots of people like this place. by reason */}
      {/*  Likes count, rating in the colored box */}
    </Container>
  );
};

export default Detail;

const fadein = keyframes`
  from {
    opacity: 0;   
  }
  to   {
    opacity: 1; 
  } 
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightyellow;
  padding: 2rem 2rem;
  z-index: 10;
  animation: ${fadein} 0.3s ease-in;
`;

const ImgContainer = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  div {
    flex: 1;
    margin: auto 5px;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* filter: grayscale(30%); */
    }
  }
  /* position: relative; */
  /* max-width: auto; */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
`;
