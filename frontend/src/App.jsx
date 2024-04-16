import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(0);
  console.log(photos);

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
