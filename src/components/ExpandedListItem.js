import React from "react";
import { Link } from "react-router-dom";
import { ExpandedListContainer, ExpandedListImg } from "./StyledComps";
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
      <ExpandedListContainer className="expanded list">
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
                <ExpandedListImg src={img} alt={sobaya.id} />
              </div>
            </div>
          </div>
        </Flipped>
      </ExpandedListContainer>
    </Flipped>
  );
}
