import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photoData = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
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
  },
];

const App = () => {
  return (
    <div className="App">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.imageSource}
          username={photo.username}
          profile={photo.profile}
          location={photo.location}
        />
      ))}
    </div>
  );
};

export default App;