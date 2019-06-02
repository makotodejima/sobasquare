import React, { useEffect } from "react";
import { Flipped } from "react-flip-toolkit";
import sr from "../ScrollReveal";
import { NormalListWrapper } from "./StyledComps";

// const shouldFlip = index => (prevDecisionData, currentDecisionData) =>
// index === prevDecisionData || index === currentDecisionData;

export default function ListItem({ index, sobaya, shouldFlip }) {
  useEffect(() => {
    const config = {
      container: document.querySelector(".list-container"),
      duration: 800,
      opacity: 0,
      scale: 0.4,
      easing: "ease-out",
      reset: true
    };
    sr.reveal(".item-wrapper", config);
  }, []);

  return (
    <Flipped flipId={`listItem-${sobaya.id}`} stagger="list">
      <NormalListWrapper>
        <Flipped inverseFlipId={`listItem-${sobaya.id}`}>
          <div>
            <Flipped flipId={`name-${sobaya.id}`} stagger="list">
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
