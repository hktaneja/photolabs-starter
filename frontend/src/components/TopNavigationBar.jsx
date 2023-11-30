import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

// TopNavigationBar component
const TopNavigationBar = ({
  topics,
  isFavPhotoExist,
  fetchPhotosByTopic
}) => {

  // Render method
  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      {/* TopicList component */}
      <TopicList
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      
      {/* FavBadge component */}
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  );
};

// Export TopNavigationBar component
export default TopNavigationBar;