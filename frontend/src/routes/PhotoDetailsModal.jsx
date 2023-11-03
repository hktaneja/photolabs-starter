import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, similarPhotos }) => {
  if (!isOpen || !selectedPhoto) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
     
        <div className="photo-details-modal__images">
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