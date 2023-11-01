
import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos.js"; // Import the photos data

const PhotoList = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      return { ...prevLikedPhotos, [photoId]: !prevLikedPhotos[photoId] };
    });
  };

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
            location={photo.location}
            isLiked={likedPhotos[photo.id] || false}
            toggleLike={() => toggleLike(photo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;