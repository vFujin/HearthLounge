import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import './styles.css';

const Img = ({src}) => <img src={src} alt="" />;

const CardInText = ({label, imgSrc, rarity}) => (
  <Tooltip title={<Img src={imgSrc} />} placement="top" overlayClassName="cardInText">
    <card className={`${rarity} in-text`}>
      {label}
    </card>
  </Tooltip>
);

CardInText.propTypes = {
  label: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired
};

export default CardInText;
