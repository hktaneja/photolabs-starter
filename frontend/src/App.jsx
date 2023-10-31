import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';

const App = () => {
  // Define state to manage photo data
  const [photoData, setPhotoData] = useState([
    {
      id: "1",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      isLiked: false,
    },
    // Add data for the other two photos here
    {
      id: "2",
      location: {
        city: "New York",
        country: "USA",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
      username: "Jane Sample",
      profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
      isLiked: false,
    },
    {
      id: "3",
      location: {
        city: "Paris",
        country: "France",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
      username: "John Doe",
      profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
      isLiked: false,
    },
  ]);

  const toggleLike = (id) => {
    setPhotoData((prevData) =>
      prevData.map((photo) => {
        if (photo.id === id) {
          return { ...photo, isLiked: !photo.isLiked };
        }
        return photo;
      })
    );
  };

  return (
    <div className="App">
      {photoData.map((photo) => (
        <div key={photo.id}>
          <PhotoListItem
            imageSource={photo.imageSource}
            username={photo.username}
            profile={photo.profile}
            location={photo.location}
            isLiked={photo.isLiked}
            toggleLike={() => toggleLike(photo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;