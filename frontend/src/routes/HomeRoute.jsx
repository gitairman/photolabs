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
    onLogoClick,
  } = useApplicationData();
  console.log('hello');
  return (
    <div className="home-route">
      <TopNavigation
        topics={state.topics}
        favPhotos={state.favPhotos}
        handleTopicClick={onLoadTopic}
        handleLogoClick={onLogoClick}
      />
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
