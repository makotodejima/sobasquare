import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/sbsq_logo.svg';
import { ILogoProps } from '../common/types';

const Logo = ({ setVisibilityFilter, setSortBy, setSelected }: ILogoProps) => (
  <Container
    onClick={() => {
      setVisibilityFilter('');
      setSortBy('asc');
      setSelected('logoClicked');
    }}
  >
    <Link to="/">
      <img src={logo} alt="Sobasquare logo" />
    </Link>
  </Container>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVisibilityFilter: (keyword: string) =>
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      visibilityFilter: keyword,
    }),
  setSortBy: (sortBy: string) =>
    dispatch({
      type: 'SET_SORT_BY',
      sortBy,
    }),
  setSelected: (id: string) =>
    dispatch({
      type: 'SET_SELECTED',
      id,
    }),
});

export default connect(
  null,
  mapDispatchToProps,
)(Logo);

const Container = styled.div`
  width: 120px;
  margin: 1.5rem auto 0;
  @media (max-width: 414px) {
    width: 80px;
    margin: 1rem auto 0;
  }
`;
