import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

const Detail = props => {
  const { sobayas, match } = props;
  const { name, neighborhood, address, recommendation, fsq } = sobayas[
    match.params.id
  ];
  useEffect(() => {
    fetch(
      `https://api.foursquare.com/v2/venues/${fsq}/tips?client_id=${client_id}&client_secret=${client_secret}&v=20190401`
    )
      .then(res => res.json())
      .then(data => {
        const tips = data.response.tips.items;
        console.log(tips[0].text);
      })
      .catch(function(err) {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>{name.jp}</p>
      <p>{name.en}</p>
      <p>{neighborhood}</p>
      <p>{recommendation}</p>
      <p>{address}</p>

      <Link to="/">back</Link>
    </div>
  );
};

export default Detail;
