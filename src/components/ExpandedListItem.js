import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExpandedListWrapper,
  Names,
  ImgWrapper,
  ExpandedListImg,
  SbsqPick
} from "./StyledComps";
import { ReactComponent as Close } from "../images/close.svg";
import { Flipped } from "react-flip-toolkit";

export default ({ sobaya, match, index }) => {
  const img = require(`../images/${sobaya.id}.jpg`);

  const [mouseonLink, setMouseonLink] = useState(false);

  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="list"
      onStart={el => {
        el.classList.add("fade-in");
      }}
    >
      <ExpandedListWrapper className="expanded list">
        <Close />
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div>
            <Flipped flipId={`name-${index}`} stagger="list">
              <Names>
                <Link
                  to={`${match.path}${sobaya.id}`}
                  className={`en preventShrink ${mouseonLink ? "on" : ""}`}
                  onMouseEnter={() => setMouseonLink(true)}
                  onMouseLeave={() => setMouseonLink(false)}
                >
                  {sobaya.name.en}
                </Link>
                <p className="jp">{sobaya.name.jp}</p>
              </Names>
            </Flipped>
            <div className="desc">
              <div style={{ textAlign: `right`, fontSize: `1rem` }}>
                {sobaya.neighborhood}
              </div>
              <SbsqPick>Sobasquare Pick: {sobaya.pick.en}</SbsqPick>
              <ImgWrapper
                onMouseEnter={() => setMouseonLink(true)}
                onMouseLeave={() => setMouseonLink(false)}
                className={`${mouseonLink ? "on" : null}`}
              >
                <Link to={`${match.path}${sobaya.id}`}>
                  <ExpandedListImg
                    className="preventShrink"
                    src={img}
                    alt={sobaya.id}
                  />
                  <span className="preventShrink">Learn More</span>
                </Link>
              </ImgWrapper>
            </div>
          </div>
        </Flipped>
      </ExpandedListWrapper>
    </Flipped>
  );
};
