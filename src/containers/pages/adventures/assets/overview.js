import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../components/loader";

const Overview = ({adventure, adventureCardbacks}) => {
  const {overview, name} = adventure;
  const {cinematic, gameboard, img} = overview;

  const mapCardbacks = () =>{
    if(!adventureCardbacks){
      return <Loader />
    } else {
      return adventureCardbacks.map(cardback => {
        const {cardBackId, imgAnimated, name} = cardback;
       return <img key={cardBackId} src={imgAnimated} alt={name} />
      })
    }
  };

  return (
      <ul className="container__blocks">
        <li className="container__blocks--block overview">
          <h4 className="container__blocks--block-header">Adventure Image</h4>
          <div className="container__blocks--block-content image">
            <img src={img} alt={name}/>
          </div>
        </li>
        <li className="container__blocks--block overview">
          <h4 className="container__blocks--block-header">Adventure Cardbacks</h4>
          <div className="container__blocks--block-content rewards">
            <div className="card-img-wrapper">
              {mapCardbacks()}
            </div>
          </div>
        </li>
        <li className="container__blocks--block overview">
          <h4 className="container__blocks--block-header">Adventure Cinematic</h4>
          <div className="container__blocks--block-content cinematic">
            <iframe src={cinematic} frameBorder="0" ></iframe>
          </div>
        </li>

        <li className="container__blocks--block overview">
          <h4 className="container__blocks--block-header">Adventure Gameboard</h4>
          <div className="container__blocks--block-content gameboard">
            <img src={gameboard} alt={`${name}'s gameboard`}/>
          </div>
        </li>
      </ul>
  );
};

export default Overview;

Overview.propTypes = {
  adventure: PropTypes.string.isRequired,
};