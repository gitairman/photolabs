import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, handleClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((t) => (
        <TopicListItem key={t.id} topic={t} handleClick={handleClick}/>
      ))}
    </div>
  );
};

export default TopicList;
