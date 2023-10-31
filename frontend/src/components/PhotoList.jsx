
import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      return { ...prevLikedPhotos, [photoId]: !prevLikedPhotos[photoId] };
    });
  };

  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => (
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
