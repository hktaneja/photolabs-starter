import React, { useState } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  // Local state to store liked photos
  const [likedPhotos, setLikedPhotos] = useState({});

  // Function to toggle liking a photo
  const toggleLike = (photoId) => {
    // Check if the photo is already liked and toggle its state
    setLikedPhotos((prevLikedPhotos) => ({
      ...prevLikedPhotos,
      [photoId]: !prevLikedPhotos[photoId],
    }));
  };

  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={likedPhotos} />
      <PhotoList likedPhotos={likedPhotos} toggleLike={toggleLike} />
      {/* Insert React */}
    </div>
  );
};

export default HomeRoute;