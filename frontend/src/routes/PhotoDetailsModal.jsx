import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

// PhotoDetailsModal component
export const PhotoDetailsModal = (props) => {

  // Render method
  return (
    <div className='photo-details-modal'>
      {/* Header */}
      <div className="photo-details-modal__header">
        <button className='photo-details-modal__close-button'
          onClick={props.onClose}
        >
          {/* Close button icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_428_287)">
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {/* Content */}
      <div className='photo-details-modal__content'>
        {/* Image wrap */}
        <div className="photo-details-modal__image-wrap">
          <>
            {/* Favorite button */}
            {props.selectedPhoto && (
              <PhotoFavButton
                onClick={() => props.toggleFavourite(props.selectedPhoto.id)}
                selected={props.favourites.includes(props.selectedPhoto.id)}
                className="photo-details-modal__fav-button"
              />
            )}
            {/* Selected photo */}
            {props.selectedPhoto && (
              <img className='photo-details-modal__image'
                src={props.selectedPhoto.urls.regular}
              />
            )}
          </>
        </div>

        {/* Photographer details */}
        <div className='photo-details-modal__photographer-details'>
          <img
            src={props.selectedPhoto.user.profile} className='photo-details-modal__user-profile'
          />
          {/* Photographer info */}
          <section className='photo-details-modal__photographer-info'>
            <p className="photo-details-modal__user-info">
              {props.selectedPhoto.user.username}
            </p>
            <p className="photo-details-modal__user-location">
              {props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}
            </p>
          </section>
        </div>
        {/* Similar photos */}
        <section className="photo-details-modal__similar-photos">
          <p className="photo-details-modal__similar-photos-header">
            Similar Photos
          </p>
          {/* PhotoList component */}
          <PhotoList
            photos={props.getSimilarPhotos()}
            favourites={props.favourites}
            toggleFavourite={props.toggleFavourite}
          />
        </section>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;