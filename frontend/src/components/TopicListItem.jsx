import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({topic, handleClick}) => {
  return (
    <div onClick={() => handleClick(topic.id)} className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
