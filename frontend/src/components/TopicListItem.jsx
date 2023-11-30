import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  console.log(props.title);

  return (
    <div className="topic-list--item">
    <li onClick={() => props.fetchPhotosByTopic(props.id)}
     
        className={props.id === props.title ? "topic-list--item-link--active" : "topic-list--item-link" }>
      {props.title}
    </li>
    </div>
  );
};


export default TopicListItem;