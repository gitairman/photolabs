import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({ photos, topics }) => {
  const [favPhotos, setFavPhotos] = useState([]);
  const handleFavourite = (id) => {
    if (isAlreadyFavourite(id)) removeFromFavourites(id);
    else addToFavourites(id);
  };

  const isAlreadyFavourite = (id) => favPhotos.includes(id);
  const addToFavourites = (id) => setFavPhotos([...favPhotos, id]);
  const removeFromFavourites = (id) =>
    setFavPhotos(favPhotos.filter((p) => p !== id));

  const [showModal, setShowModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState({});
  const handleClickPhoto = (id) => {
    setSinglePhotoDetail(photos.find((p) => p.id === id));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} />
      <PhotoList
        photos={photos}
        favArr={favPhotos}
        handleFavourite={handleFavourite}
        handleClick={handleClickPhoto}
      />
      {showModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={singlePhotoDetail}
          favArr={favPhotos}
          handleFavourite={handleFavourite}
          handleClick={handleClickPhoto}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
