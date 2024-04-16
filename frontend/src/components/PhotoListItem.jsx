import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, handleFavourite } =
    props;
  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} handleFavourite={handleFavourite} />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <p className="photo-list__user-info">
          {username} <br />
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PhotoListItem;
