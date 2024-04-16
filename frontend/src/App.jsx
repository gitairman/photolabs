import React from 'react';

import './App.scss';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
// import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(0);
  console.log(photos);

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
