import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setVisibilityFilter, setSelected } from '../reducers/actions';

const NoResults = ({ setVisibilityFilter, setSelected }) => {
  const handleClick = e => {
    const keyword = e.target.textContent;
    setVisibilityFilter(keyword);
    setSelected('Pressed-button-' + keyword); // To change Flipkey
  };

  const items = ['Azabu', 'Kanda', 'Sarashina', 'Roppongi', 'Minato'];

  return (
    <Wrapper>
      <h1>No Results</h1>
      <p>Try these keywords?</p>
      {items.map(item => (
        <Button key={item} onClick={handleClick}>
          {item}
        </Button>
      ))}
    </Wrapper>
  );
};

const mapDispatchToProps = {
  setVisibilityFilter,
  setSelected,
};

export default connect(
  null,
  mapDispatchToProps,
)(NoResults);

const Wrapper = styled.div`
  text-align: center;
  h1 {
    margin: 1rem;
  }
  p {
    margin: 2rem;
  }
`;

const Button = styled.button`
  display: block;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px auto;
  padding: 4px 15px;
  border: 1px solid darkgrey;
  border-radius: 15px;
  background-color: transparent;
  transition: all 0.1s;
  :hover {
    opacity: 0.6;
  }
`;
