import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flipped } from "react-flip-toolkit";

export default function ExpandedListItem({ sobaya, match, index }) {
  const img = require(`../images/${sobaya.id}.jpg`);
  return (
    <Flipped flipId={`listItem-${index}`}>
      <div className="expanded list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <p>{sobaya.name.jp}</p>
            <p>{sobaya.name.en}</p>

            <p>{sobaya.neighborhood}</p>
            <p>Likely open</p>
            <p>{sobaya.recommendation}</p>
            <StyledImg src={img} alt={sobaya.id} />
            <Link to={`${match.path}${sobaya.id}`}>See Detail</Link>
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
