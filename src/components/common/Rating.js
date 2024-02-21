import React from 'react';
import { TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';

const Rating = ({ value, max }) => {
  const stars = [];
  const roundedValue = Math.round(value * 2) / 2; // Round to nearest half

  for (let i = 0; i < max; i++) {
    if (roundedValue >= i + 1) {
      // Full star
      stars.push(<TbStarFilled className="active" key={i} />);
    } else if (roundedValue >= i + 0.5) {
      // Half star
      stars.push(<TbStarHalfFilled className="active" key={i} />);
    } else {
      // Empty star
      stars.push(<TbStarFilled key={i} />);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
