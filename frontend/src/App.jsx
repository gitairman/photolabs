import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(0);
  console.log(photos);

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
