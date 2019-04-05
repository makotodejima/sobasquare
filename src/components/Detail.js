import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sobayas from "../data/sobayas.js";

const Detail = ({ fsqData, match }) => {
  const { name, neighborhood, address, recommendation, fsq } = sobayas[
    match.params.id
  ];
  const sobaya = fsqData[match.params.id];

  // console.log(fsqData);
  // console.log(match.params.id);
  // console.log(sobaya);

  if (!sobaya) return null;
  return (
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
      <h3>{`Likes on Foursqare: ${sobaya.likes}`}</h3>
      <h3>{`Now: ${sobaya.hours.status}`}</h3>
      <h3>{`Rating on Foursquare: ${sobaya.ratings}`}</h3>
      {/* Website? */}
      {/* Foursquare says 'Lots of people like this place. by reason */}
      {/*  Likes count, rating in the colored box */}
      <Link to="/">back</Link>
    </Container>
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
