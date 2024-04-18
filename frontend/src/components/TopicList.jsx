import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, handleTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((t) => (
        <TopicListItem key={t.id} topic={t} handleClick={handleTopicClick}/>
      ))}
    </div>
  );
};

export default TopicList;
