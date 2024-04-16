import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((p) => (
        <li key={p.id}>
          <PhotoListItem
            location={p.location}
            imageSource={p.urls.full}
            username={p.user.username}
            profile={p.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
