import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const HomeRoute = ({ photos, topics }) => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData(photos, topics);

  return (
    <div className="home-route">
      <TopNavigation topics={state.topics} favPhotos={state.favPhotos} />
      <PhotoList
        photos={state.photos}
        favArr={state.favPhotos}
        handleFavourite={updateToFavPhotoIds}
        handleClick={onPhotoSelect}
      />
      {state.showModal && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          photo={state.singlePhotoDetail}
          favArr={state.favPhotos}
          handleFavourite={updateToFavPhotoIds}
          handleClick={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default HomeRoute;
