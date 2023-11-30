import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({
  topics,
  fetchPhotosByTopic
}) => {

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id} {...topic}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
      ))}
    </ul>
  );
};

export default TopicList;