import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default App;