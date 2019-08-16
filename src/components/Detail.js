import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Img from 'react-image';
import FoursquareLogo from './FoursquareLogo';
import GoogleMapsIcon from './GoogleMapsIcon';
import Spinner from './Spinner';
import { ReactComponent as Close } from '../images/close.svg';
import { setLike } from '../reducers/actions';

import {
  DetailContainer,
  DetailImgContainer,
  Review,
  SbsqPick,
  Website,
  FlexContainer,
  ExternalLinks,
  GoogleMapsLink,
  FsqLink,
} from './StyledComps';

const Detail = ({ match, setLike, like, sobayas }) => {
  const sobaya = sobayas.find(sobaya => sobaya.id === match.params.id);
  const f_client_id = 'XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX';

  useEffect(() => {
    async function getLikeCount() {
      if (!like[sobaya.id]) {
        const res = await fetch(
          `https://api.foursquare.com/v2/venues/${sobaya.fsq}/likes?client_id=${f_client_id}&client_secret=${process.env.REACT_APP_NOW_F_API_KEY}&v=20190727`,
        );
        const data = await res.json();
        /*  response summery can be Japanese   *
         *  when request made by the client    *
         *  whose primary language is Japanese */
        const { summary } = data.response.likes;
        setLike(sobaya.id, summary);
      }
    }
    getLikeCount().catch(err => console.error(err));
  }, [like, setLike, sobaya.fsq, sobaya.id]);

  return (
    <DetailContainer>
      <Link to="/">
        <Close />
      </Link>
      {sobaya && (
        <>
          <div className="name">
            <h1 style={{ display: 'inline' }}>{sobaya.name.en}</h1>
            <p style={{ display: 'inline', marginLeft: '1rem' }} className="jp">
              {sobaya.name.jp}
            </p>
          </div>
          <div className="neighborhood">
            <h3 style={{ textAlign: 'right' }}>{sobaya.neighborhood}</h3>
          </div>
          {sobaya.review && (
            <Review>
              <p>{sobaya.review.en}</p>
            </Review>
          )}
          <FlexContainer d="row" j="space-between">
            <SbsqPick>
              <p>
                SOBASQUARE Pick: <strong>{sobaya.pick.en}</strong>
              </p>
            </SbsqPick>
            {sobaya.url && (
              <Website>
                <a href={sobaya.url} target="_blank" rel="noopener noreferrer">
                  <span>Visit website</span>
                </a>
              </Website>
            )}
          </FlexContainer>

          <DetailImgContainer>
            <div>
              <Img
                src={require(`../images/${sobaya.id}_1.jpg`)}
                alt={sobaya.name}
                loader={<Spinner />}
              />
            </div>
            <div>
              <Img
                src={require(`../images/${sobaya.id}_2.jpg`)}
                alt={sobaya.name}
                loader={<Spinner />}
              />
            </div>
          </DetailImgContainer>
          <ExternalLinks>
            <GoogleMapsLink>
              <a
                href={sobaya.googlemaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Open in Google Maps</span>
                <GoogleMapsIcon />
              </a>
            </GoogleMapsLink>
            <FsqLink>
              <a
                href={`https://foursquare.com/v/${sobaya.fsq}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {like[sobaya.id] === undefined ? (
                  <>LOADING</>
                ) : (
                  <>
                    <span className="likes">{like[sobaya.id]}</span>
                    <FoursquareLogo />
                  </>
                )}
              </a>
            </FsqLink>
          </ExternalLinks>

          <div className="address">{sobaya.address}</div>
        </>
      )}
    </DetailContainer>
  );
};

const mapStateToProps = state => ({
  sobayas: state.sobayas,
  like: state.like,
});

export default connect(
  mapStateToProps,
  { setLike },
)(Detail);
