import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flipped } from "react-flip-toolkit";

export default function ExpandedListItem({ sobaya, match, index }) {
  const img = require(`../images/${sobaya.id}.jpg`);
  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="list"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("fade-in");
        }, 100);
      }}
    >
      <ExpandedList className="expanded list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped flipId={`name-${index}`} stagger="list">
              <div>
                <Link to={`${match.path}${sobaya.id}`} className="en">
                  {sobaya.name.en}
                </Link>
                <p className="jp">{sobaya.name.jp}</p>
              </div>
            </Flipped>
            <div className="desc">
              <div style={{ textAlign: `right`, fontSize: `1rem` }}>
                {sobaya.neighborhood}
              </div>
              <div style={{ fontSize: `1rem`, margin: `10px 0` }}>
                Recommendation: {sobaya.recommendation}
              </div>
              <div>
                <StyledImg src={img} alt={sobaya.id} />
              </div>
              {/* <div> */}
              {/* <Link to={`${match.path}${sobaya.id}`}>more</Link> */}
              {/* </div> */}
            </div>
          </div>
        </Flipped>
      </ExpandedList>
    </Flipped>
  );
}

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
  filter: grayscale(50%);
`;

const ExpandedList = styled.div`
  :hover {
    background-color: lightcyan;
    color: darkcyan;
    /* outline: darkcyan 7px solid; */
    box-shadow: 0 0 0 3pt lightcyan;
    a {
      /* text-decoration: none; */
      color: darkcyan;
    }
  }

  a {
    /* text-decoration: none; */
    color: white;
    :hover {
      color: lightgrey;
    }
  }
`;
