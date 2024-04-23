import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBar from './SearchBar';

const TopNavigation = ({ topics, favPhotos, handleTopicClick, handleLogoClick, handleSearch }) => {
  return (
    <div className="top-nav-bar">
      <span onClick={handleLogoClick} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick}/>
      <SearchBar handleSearch={handleSearch}/>
      <FavBadge isFavPhotoExist={favPhotos} />
    </div>
  );
};

export default TopNavigation;
