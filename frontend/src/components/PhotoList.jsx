import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos.js";

const PhotoList = ({ onLikePhoto, likedPhotos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]); // State variable for similar photos

  // Function to find similar photos based on the similar_photos property
  const findSimilarPhotos = (photo) => {
    if (photo.similar_photos && Object.keys(photo.similar_photos).length > 0) {
      // Extract similar photo IDs from the similar_photos object and convert them into an array
      const similarPhotoIds = Object.values(photo.similar_photos).map((similarPhoto) => similarPhoto.id);
      // Filter photos based on whether their IDs are in similarPhotoIds
      const similarPhotos = photos.filter((p) => similarPhotoIds.includes(p.id) && p.id !== photo.id);
      return similarPhotos;
    } else {
      console.log("No similar photos found.");
      return [];
    }
  };

  const toggleLike = (photoId) => {
    onLikePhoto(photoId); // Call the callback function to indicate a like
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);

    // Find similar photos for the selected photo
    const similarPhotosForSelected = findSimilarPhotos(photo);
    setSimilarPhotos(similarPhotosForSelected);

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
              onPhotoClick={() => openModal(photo)}
            />
          </li>
        ))}
      </ul>
      <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} selectedPhoto={selectedPhoto} similarPhotos={similarPhotos} onLikePhoto={onLikePhoto}  />
    </div>
  );
};

export default PhotoList;