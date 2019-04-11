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
        el.classList.add("fade-in");
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
              <div
                style={{
                  fontFamily: `Ubuntu`,
                  fontSize: `1rem`,
                  margin: `10px 0`
                }}
              >
                Sobasquare Pick: {sobaya.recommendation}
              </div>
              <div>
                <StyledImg src={img} alt={sobaya.id} />
              </div>
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
  box-shadow: 0px 0px 45px -25px rgba(0, 0, 0, 0.75);

  a {
    /* text-decoration: none; */
    color: black;
    transition: color 0.3s;
    :hover {
      color: darkcyan;
    }
  }
`;
