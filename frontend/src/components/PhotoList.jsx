import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos.js";

const PhotoList = () => {
  const [likedPhotos, setLikedPhotos] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      return { ...prevLikedPhotos, [photoId]: !prevLikedPhotos[photoId] };
    });
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
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
              onPhotoClick={() => openModal(photo)} // Pass the openModal function with the photo as an argument
            />
          </li>
        ))}
      </ul>
      <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} selectedPhoto={selectedPhoto} />
    </div>
  );
};

export default PhotoList;