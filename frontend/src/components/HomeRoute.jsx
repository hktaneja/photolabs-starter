import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

// HomeRoute component
const HomeRoute = ({
  photos,
  topics,
  favourites,
  toggleFavourite,
  onPhotoClick,
  fetchPhotosByTopic
}) => {

  // Render method
  return (
    <div className="home-route">
      {/* Top Navigation Bar */}
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favourites.length}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {/* Content */}
      <div className="home-route__content">
        {/* Photo List */}
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

// Export HomeRoute component
export default HomeRoute;