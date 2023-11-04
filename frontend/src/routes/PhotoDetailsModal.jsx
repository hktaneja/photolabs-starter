import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, similarPhotos, onLikePhoto }) => {
  if (!isOpen || !selectedPhoto) return null;

  const handleFavButtonClick = (e, photoId) => {
    e.stopPropagation(); // Prevent click on PhotoFavButton from propagating to the parent div
    // Notify the parent component (HomeRoute) about the like action
    console.log("photoId is:" + photoId);
    onLikePhoto(photoId);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          selected={selectedPhoto.isLiked}
          onClick={(e) => handleFavButtonClick(e, selectedPhoto.id)}
        />
        <img
          src={selectedPhoto.urls.full}
          alt={`Photo by ${selectedPhoto.user.username}`}
          className="photo-details-modal__image"
        />

        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-info">{selectedPhoto.user.username}</div>
          <div className="photo-details-modal__photographer-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </div>
        </div>

        <div className="photo-details-modal__similar-photos">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
        </div>
        <div className="photo-details-modal__images">
          {similarPhotos.map((photo) => (
            <div key={photo.id} className="photo-details-modal__image">
              <PhotoFavButton
                selected={photo.isLiked}
                onClick={(e) => handleFavButtonClick(e, photo.id)}
                
              />
              <img
                src={photo.urls.full}
                alt={`Photo by ${photo.user.username}`}
                className="photo-details-modal__image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;