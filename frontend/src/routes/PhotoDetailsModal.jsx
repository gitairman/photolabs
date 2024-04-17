import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  closeModal,
  photo: p,
  favArr,
  handleFavourite,
  handleClick,
}) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={closeModal}
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <br />
      <PhotoFavButton
        id={p.id}
        favArr={favArr}
        handleFavourite={handleFavourite}
      />
      <img className="photo-details-modal__image" src={p.urls.full} />
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={p.user.profile}
        />
        <p className="photo-details-modal__photographer-info">
          {p.user.username} <br />
          <span className="photo-details-modal__photographer-location">
            {p.location.city}, {p.location.country}
          </span>
        </p>
      </div>
      <div className="photo-details-modal__header">Similar Photos</div>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={Object.values(p.similarPhotos)}
          favArr={favArr}
          handleFavourite={handleFavourite}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
