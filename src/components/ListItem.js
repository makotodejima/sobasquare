import React, { useEffect } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import sr from "../ScrollReveal";
import { NormalListWrapper } from "./StyledComps";

const shouldFlip = index => (prevDecisionData, currentDecisionData) =>
  index === prevDecisionData || index === currentDecisionData;

export default function ListItem({ index, sobaya }) {
  useEffect(() => {
    const config = {
      container: document.querySelector(".list-container"),
      duration: 900,
      opacity: 0,
      scale: 0.6,
      easing: "ease",
      reset: true
    };
    sr.reveal(".item-wrapper", config);
  }, []);

  return (
    <Flipped flipId={`listItem-${index}`} stagger="list">
      <NormalListWrapper>
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped
              flipId={`name-${index}`}
              shoudFlip={shouldFlip(index)}
              stagger="list"
            >
              <div>
                <p className="en">{sobaya.name.en}</p>
                <p className="jp">{sobaya.name.jp}</p>
                <p style={{ textAlign: `right` }} className="jp">
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
