import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

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

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} />
      <PhotoList
        photos={photos}
        favArr={favPhotos}
        handleFavourite={handleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
