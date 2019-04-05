import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flipped } from "react-flip-toolkit";
import styled from "styled-components";
import sobayas from "../data/sobayas.js";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

const Detail = ({ match, index }) => {
  const { id, name, neighborhood, address, recommendation, fsq } = sobayas[
    match.params.id
  ];
  const [fsqData, setFsqData] = useState({});

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
    <Flipped flipId={`listItem-${index}`}>
      <Container>
        <p>{name.jp}</p>
        <p>{name.en}</p>
        <p>{neighborhood}</p>
        <p>{recommendation}</p>
        <p>{address}</p>
        <p>{fsq}</p>
        <p>
          my memo this place is awesome because i live nearby. Childhood memory
          comes out.
        </p>
        <p>www.url.com by Foursquare</p>
        <p>Information by Foursquare</p>
        {/* <h3>{`Likes on Foursqare: ${sobaya.likes}`}</h3>
      <h3>{`Now: ${sobaya.hours.status}`}</h3>
      <h3>{`Rating on Foursquare: ${sobaya.ratings}`}</h3> */}
        {/* Website? */}
        {/* Foursquare says 'Lots of people like this place. by reason */}
        {/*  Likes count, rating in the colored box */}
        <Link to="/">back</Link>
      </Container>
    </Flipped>
  );
};

export default Detail;

const Container = styled.div`
  position: absolute;
  width: 500px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: bisque;
  padding: 5rem 2rem;
  z-index: 10;
`;
