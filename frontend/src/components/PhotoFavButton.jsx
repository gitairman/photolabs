import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ id, favArr, handleFavourite }) => {
  const handleClick = () => handleFavourite(id);

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favArr.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
