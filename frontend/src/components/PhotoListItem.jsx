import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

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

  return (    
   
      <div className="photo-list__item">
      
          <PhotoFavButton
            id={id}
            selected={selected}
            onClick={toggleFavourite}
            getSimilarPhotos={getSimilarPhotos}
          />
        
        <img className='photo-list__image'
          onClick={() => onPhotoClick(id)}
          src={urls.full || imageSource}
          alt={`Photo ${id}`}
        />
       <div className="photo-list--details--parent">  

          <img className='photo-list__user-profile'
            src={user.profile}
            alt={`Photo ${id}`}
          />  
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
export default PhotoListItem;