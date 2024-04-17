import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const HomeRoute = ({ photos, topics }) => {
  // const [favPhotos, setFavPhotos] = useState([]);
  // const handleFavourite = (id) =>
  //   isAlreadyFavourite(id) ? removeFromFavourites(id) : addToFavourites(id);

  // const isAlreadyFavourite = (id) => favPhotos.includes(id);
  // const addToFavourites = (id) => setFavPhotos([...favPhotos, id]);
  // const removeFromFavourites = (id) =>
  //   setFavPhotos(favPhotos.filter((p) => p !== id));

  // const [showModal, setShowModal] = useState(false);
  // const [singlePhotoDetail, setSinglePhotoDetail] = useState({});
  // const handleClickPhoto = (id) => {
  //   setSinglePhotoDetail(photos.find((p) => p.id === id));
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

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
