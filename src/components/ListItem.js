import React, { useEffect } from "react";
import sr from "../ScrollReveal";

export default function ListItem(props) {
  let ref = React.createRef();

  useEffect(() => {
    const config = {
      container: document.querySelector(".list-container"),
      duration: 800,
      opacity: 0,
      scale: 0.8,
      easing: "ease",
      reset: true
    };
    sr.reveal(".item-wrapper", config);

    return () => {
      sr.clean(".normal");
    };
  }, []);

  return (
    <div className="normal list" ref={ref}>
      <p>{props.sobaya.name.jp}</p>
      <p>{props.sobaya.name.en}</p>
    </div>
  );
}
