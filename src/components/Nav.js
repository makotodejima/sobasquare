import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Mapicon } from '../images/mapicon.svg';

const Nav = () => (
  <Wrapper>
    <Link to="/map/">
      <Mapicon />
    </Link>
  </Wrapper>
);

export default Nav;

const Wrapper = styled.nav`
  position: absolute;
  top: 35px;
  right: 40px;
  width: 45px;
  @media (max-width: 414px) {
    top: 20px;
    right: 20px;
    width: 40px;
  }
`;
