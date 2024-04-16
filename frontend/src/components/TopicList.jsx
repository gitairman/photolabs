import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((t) => (
        <TopicListItem key={t.id} label={t.title} />
      ))}
    </div>
  );
};

export default TopicList;
