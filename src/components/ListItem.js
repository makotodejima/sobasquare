import React from "react";
import { Flipped } from "react-flip-toolkit";
import { NormalListWrapper } from "./StyledComps";

// const shouldFlip = index => (prevDecisionData, currentDecisionData) =>
// index === prevDecisionData || index === currentDecisionData;

export default function ListItem({ sobaya, shouldFlip }) {
  return (
    <Flipped flipId={`listItem-${sobaya.id}`}>
      <NormalListWrapper>
        <Flipped inverseFlipId={`listItem-${sobaya.id}`}>
          <div>
            <Flipped flipId={`name-${sobaya.id}`}>
              <div>
                <p className="en">{sobaya.name.en}</p>
                <p className="jp">{sobaya.name.jp}</p>
                <p style={{ textAlign: `right`, fontSize: `1rem` }}>
                  {sobaya.neighborhood}
                </p>
              </div>
            </Flipped>
          </div>
        </Flipped>
      </NormalListWrapper>
    </Flipped>
  );
}
