import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-profile">
        <img className="photo-list__image" src={profile} />
        <div className="photo-list__user-details">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
