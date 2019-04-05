import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Detail = props => {
  const { name, neighborhood, address, recommendation, fsq } = props.sobaya;
  return (
    <Container>
      <p>{name.jp}</p>
      <p>{name.en}</p>
      <p>{neighborhood}</p>
      <p>{recommendation}</p>
      <p>{address}</p>
      <p>
        my MEmo this place is awesome because i live nearby. Childhood memory
        comes out.
      </p>
      <p>www.url.com by Foursquare</p>
      <p>Information by Foursquare</p>
      <p>{fsq}</p>

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
