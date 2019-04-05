import React, { useEffect } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import sr from "../ScrollReveal";

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

  return (
    <Flipped flipId={`listItem-${index}`}>
      <div className="normal list">
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <p>{sobaya.name.jp}</p>
            <p>{sobaya.name.en}</p>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}
