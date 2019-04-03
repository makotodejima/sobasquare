import React from "react";
import { Link } from "react-router-dom";
import sobayas from "../data/sobaya.js";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: beige;
  padding: 5rem 2rem;
  z-index: 1;
`;

const Detail = props => {
  const { name, neighborhood, address, recommendation, fsq } = props.sobaya;
  return (
    <Container>
      <p>{name.jp}</p>
      <p>{name.en}</p>
      <p>{neighborhood}</p>
      <p>{recommendation}</p>
      <p>{address}</p>
      <p>{fsq}</p>

      {/*  Likes count, rating in the colored box */}

      <Link to="/">back</Link>
    </Container>
  );
};

export default Detail;
