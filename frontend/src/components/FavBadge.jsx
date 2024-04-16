import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={!!isFavPhotoExist.length}
        selected={!!isFavPhotoExist.length}
      />
      <div className="fav-badge__count">
        <span>{isFavPhotoExist.length}</span>
      </div>
    </div>
  );
};

export default FavBadge;
