import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <img className="photo-list__user-profile" src={profile} />
          <span>{username} </span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
