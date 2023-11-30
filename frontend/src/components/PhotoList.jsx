import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({
  photos,
  favourites,
  toggleFavourite,
  onPhotoClick,
  getSimilarPhotos
}) => {
   
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            favourites={favourites}
            selected={favourites.includes(photo.id)}
            toggleFavourite={() => toggleFavourite(photo.id)}
            {...photo}
            onPhotoClick={onPhotoClick}
            getSimilarPhotos={getSimilarPhotos}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;