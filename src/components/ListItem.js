import React, { useEffect } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import sr from "../ScrollReveal";

const shouldFlip = index => (prevDecisionData, currentDecisionData) =>
  index === prevDecisionData || index === currentDecisionData;

export default function ListItem({ index, sobaya }) {
  useEffect(() => {
    const config = {
      container: document.querySelector(".list-container"),
      duration: 800,
      opacity: 0,
      scale: 0.5,
      easing: "ease",
      reset: true
    };
    sr.reveal(".item-wrapper", config);
  }, []);

  // shouldFlip = {
  //   shouldFlip(index)
  return (
    <Flipped flipId={`listItem-${index}`}>
      <div className="normal list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped flipId={`name-${index}`} shouldFlip={!shouldFlip(index)}>
              <div>
                <p className="jp">{sobaya.name.jp}</p>
                <p className="en">{sobaya.name.en}</p>
              </div>
            </Flipped>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}
