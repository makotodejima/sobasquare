import React from "react";
import Fade from "react-reveal/Fade";

export default function ListItem(props) {
  // useEffect(() => {
  //   const listContainer = document.querySelector(".list-container");
  //   listContainer.addEventListener("scroll", handleScroll);

  //   return () => {
  //     listContainer.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // const handleScroll = () => {
  //   const listContainer = document.querySelector(".list-container");
  //   const topOfList = listContainer.offsetTop;
  //   const bottomOfList = listContainer.offsetTop + listContainer.offsetHeight;

  //   const normalList = document.querySelectorAll(".normal");
  //   // const middleOfNoraml = normalList.offsetTop + normalList.offsetHeight / 2;
  //   // if ()
  //   console.log(normalList);
  // };

  return (
    <Fade opposite>
      <div className="normal list">
        <p>{props.sobaya.name.jp}</p>
        <p>{props.sobaya.name.en}</p>
      </div>
    </Fade>
  );
}
