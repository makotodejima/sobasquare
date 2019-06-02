import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <Link to={`/map/`}>SHOW MAP</Link>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
`;
