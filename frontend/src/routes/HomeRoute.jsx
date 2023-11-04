import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import topics from '../mocks/topics'; // Import the topics data

const HomeRoute = () => {
  const [likedPhotos, setLikedPhotos] = useState({});
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const handleLikePhoto = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      const updatedLikedPhotos = { ...prevLikedPhotos };
      updatedLikedPhotos[photoId] = !prevLikedPhotos[photoId];

      const isAnyPhotoLiked = Object.values(updatedLikedPhotos).some((isLiked) => isLiked);
      setIsFavPhotoExist(isAnyPhotoLiked);

      return updatedLikedPhotos;
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList likedPhotos={likedPhotos} onLikePhoto={handleLikePhoto} />
    </div>
  );
};

export default HomeRoute;




