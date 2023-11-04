  import React from 'react';
  import PhotoFavButton from './PhotoFavButton';
  import '../styles/PhotoListItem.scss';

  const PhotoListItem = (props) => {
    const { imageSource, username, profile, location, isLiked, toggleLike, onPhotoClick } = props;
    const handlePhotoClick = () => {
      if (onPhotoClick) {
        onPhotoClick();
      }
    };
    const handleFavButtonClick = (e) => {
      e.stopPropagation(); // Prevent click on PhotoFavButton from propagating to the parent div
      toggleLike();
    };
    return (
      <div className="photo-list__item" onClick={handlePhotoClick}>
        <PhotoFavButton selected={isLiked} onClick={handleFavButtonClick} />        
        <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
        <div className="photo-list__user-details">
          <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />          
          <div className="photo-list__user-info">
            <div className="photo-list__username">{username}</div>
              <div className="photo-list__user-location">
                {location.city}, {location.country}
              </div>
          </div>          
        </div>
      </div>
    );
  };

  export default PhotoListItem;