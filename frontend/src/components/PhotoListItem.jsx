import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

// PhotoListItem component
const PhotoListItem = ({
  id,
  location,
  imageSource,
  username,
  profile,
  user,
  urls,
  getSimilarPhotos,
  toggleFavourite,
  selected,
  onPhotoClick
}) => { 

  // Render method
  return (    
    <div className="photo-list__item">
      {/* PhotoFavButton component */}
      <PhotoFavButton
        id={id}
        selected={selected}
        onClick={toggleFavourite}
        getSimilarPhotos={getSimilarPhotos}
      />
      
      {/* Photo image */}
      <img className='photo-list__image'
        onClick={() => onPhotoClick(id)}
        src={urls.full || imageSource}
        alt={`Photo ${id}`}
      />

      {/* User details */}
      <div className="photo-list--details--parent">  
        {/* User profile image */}
        <img className='photo-list__user-profile'
          src={user.profile}
          alt={`Photo ${id}`}
        />  
        {/* User information */}
        <div className="photo-list--user-details">        
          <p className="photo-list__user-info"> {user.name}
          </p>             
          <p className="photo-list__user-location ">
            {location.city}, {location.country}
          </p> 
        </div>
      </div>
    </div>    
  );
};

// Export PhotoListItem component
export default PhotoListItem;