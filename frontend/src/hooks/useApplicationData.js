import photos from 'mocks/photos';
import topics from 'mocks/topics';

const { useState } = require('react');

export const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const handleFavourite = (id) =>
    isAlreadyFavourite(id) ? removeFromFavourites(id) : addToFavourites(id);

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

  const state = { photos, topics, favPhotos, showModal, singlePhotoDetail };
  const onPhotoSelect = handleClickPhoto;
  const updateToFavPhotoIds = handleFavourite;
  const onLoadTopic = () => {};
  const onClosePhotoDetailsModal = closeModal;

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};
