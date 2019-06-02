import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Mapicon } from "../images/mapicon.svg";

const Nav = () => {
  return (
    <Wrapper>
      <Link to={`/map/`}>
        <Mapicon />
      </Link>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  position: fixed;
  top: 35px;
  left: 40px;
  width: 45px;
  /* height: 70px; */
`;
