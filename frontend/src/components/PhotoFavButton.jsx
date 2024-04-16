import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
