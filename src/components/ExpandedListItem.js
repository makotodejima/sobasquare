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
      <div className="expanded list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped flipId={`name-${index}`} stagger="list">
              <div>
                <p className="jp">{sobaya.name.jp}</p>
                <p className="en">{sobaya.name.en}</p>
              </div>
            </Flipped>
            <div className="desc">
              <div>{sobaya.neighborhood}</div>
              <div>Likely open</div>
              <div>{sobaya.recommendation}</div>
              <div>
                <StyledImg src={img} alt={sobaya.id} />
              </div>
              <div>
                <Link to={`${match.path}${sobaya.id}`}>See Detail</Link>
              </div>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}

const StyledImg = styled.img`
  width: 90%;
  border-radius: 5px;
  filter: grayscale(50%);
`;
