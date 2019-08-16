import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setSelected } from '../../reducers/actions';
import { IRootState, sobayasType } from '../../common/types';

const Sort = () => {
  // Trying new react-redux hooks
  const sortBy = useSelector((state: IRootState) => state.sortBy);
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => {
        // Trying new react-redux hooks
        dispatch(setSortBy(sortBy === 'asc' ? 'desc' : 'asc'));
        dispatch(setSelected(Math.random() * -1));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z" />
      </svg>
    </Wrapper>
  );
};

// used in List comp
export function sortSobayas(sobayas: sobayasType, sortBy: string) {
  switch (sortBy) {
    case 'asc':
      return sobayas.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    case 'desc':
      return sobayas.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    default:
      return sobayas;
  }
}

// Avoid using connect thanks to react-redux hooks
export default Sort;

const Wrapper = styled.div`
  margin: auto 0.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
