import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favArr, handleFavourite, handleClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((p) => (
        <li key={p.id}>
          <PhotoListItem
            id={p.id}
            location={p.location}
            imageSource={p.urls.full}
            username={p.user.username}
            profile={p.user.profile}
            favArr={favArr}
            handleFavourite={handleFavourite}
            handleClick={handleClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
