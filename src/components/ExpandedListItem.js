import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExpandedListWrapper,
  Names,
  Description,
  ImgWrapper,
  SbsqPick
} from "./StyledComps";
import { ReactComponent as Close } from "../images/close.svg";
import { Flipped } from "react-flip-toolkit";
import Img from "react-image";
import Spinner from "./Spinner";

const ExpandedListItem = ({ sobaya, index, match }) => {
  const img = require(`../images/${sobaya.id}.jpg`);
  const [mouseonLink, setMouseonLink] = useState(false);

  return (
    <Flipped
      flipId={`listItem-${sobaya.id}`}
      stagger="list"
      onStart={el => {
        el.classList.add("fade-in");
      }}
    >
      <ExpandedListWrapper className="expanded list">
        <Close />
        <Flipped inverseFlipId={`listItem-${sobaya.id}`}>
          <div>
            <Flipped flipId={`name-${sobaya.id}`} stagger="list">
              <Names>
                <Link
                  to={`/sobaya/${sobaya.id}`}
                  className={`en preventShrink ${mouseonLink ? "on" : ""}`}
                  onMouseEnter={() => setMouseonLink(true)}
                  onMouseLeave={() => setMouseonLink(false)}
                >
                  {sobaya.name.en}
                </Link>
                <p className="jp">{sobaya.name.jp}</p>
              </Names>
            </Flipped>
            <Description className="desc">
              <div
                style={{
                  textAlign: `right`,
                  fontSize: `1rem`
                }}
              >
                {sobaya.neighborhood}
              </div>
              <SbsqPick>
                Sobasquare Pick: <strong>{sobaya.pick.en}</strong>
              </SbsqPick>
              <ImgWrapper
                onMouseEnter={() => setMouseonLink(true)}
                onMouseLeave={() => setMouseonLink(false)}
                className={`${mouseonLink ? "on" : null}`}
              >
                <Link to={`/sobaya${match.path}${sobaya.id}`}>
                  <Img
                    className="preventShrink"
                    src={img}
                    alt={sobaya.id}
                    loader={
                      <div className="wrap">
                        <Spinner />
                      </div>
                    }
                  />
                  <span className="preventShrink">Learn More</span>
                </Link>
              </ImgWrapper>
            </Description>
          </div>
        </Flipped>
      </ExpandedListWrapper>
    </Flipped>
  );
};

export default ExpandedListItem;
