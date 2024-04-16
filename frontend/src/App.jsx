import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(0);
  console.log(photos);

  return (
    <div className="App">
      {/* {photos.map((_, i) => (
        <PhotoListItem key={i} {...sampleDataForPhotoListItem} />
      ))} */}
      <PhotoList />
    </div>
  );
};

export default App;
