import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setSortBy, setSelected } from "../../reducers/actions";

const Sort = ({ setSortBy, sortBy, setSelected }) => {
  return (
    <Wrapper
      onClick={() => {
        setSortBy(sortBy === "asc" ? "desc" : "asc");
        setSelected(sortBy === "asc" ? "desc" : "asc");
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

export function sortSobayas(sobayas, sortBy) {
  switch (sortBy) {
    case "asc":
      return sobayas.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    case "desc":
      return sobayas.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    default:
      return sobayas;
  }
}

const mapDispatchToProps = {
  setSortBy,
  setSelected,
};

const mapStateToProps = ({ sortBy }) => ({
  sortBy,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);

const Wrapper = styled.div`
  margin: auto 0.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
