import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flipped } from "react-flip-toolkit";

export default function ExpandedListItem({ sobaya, match, index }) {
  const img = require(`../images/${sobaya.id}.jpg`);
  return (
    <Flipped flipId={`listItem-${index}`} stagger="list">
      <div className="expanded list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped flipId={`name-${index}`} stagger="list">
              <div>
                <p className="jp">{sobaya.name.jp}</p>
                <p className="en">{sobaya.name.en}</p>
              </div>
            </Flipped>
            <div>
              <p>{sobaya.neighborhood}</p>
              <p>Likely open</p>
              <p>{sobaya.recommendation}</p>
              <StyledImg src={img} alt={sobaya.id} />
              <Link to={`${match.path}${sobaya.id}`}>See Detail</Link>
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
