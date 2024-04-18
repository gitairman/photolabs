import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const HomeRoute = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation topics={state.topics} favPhotos={state.favPhotos} handleClick={onLoadTopic}/>
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
