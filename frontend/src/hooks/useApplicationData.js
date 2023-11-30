import { useReducer, useEffect } from 'react';
import { reducer, initialState } from "../reducer/reducer";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id });
  };

  const handlePhotoClick = (id) => {
    dispatch({ type: 'SELECT_PHOTO', id });
  };

  const onClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const getSimilarPhotos = () => {
    if (state.selectedPhoto) {
      const modalPhoto = state.photos.filter(
        (photo) =>
          photo.id === state.selectedPhoto.id
      );
      return modalPhoto[0].similar_photos;
    }
    return [];
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_PHOTOS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });

    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_TOPICS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });

  }, []);

  return {
    favourites: state.favourites,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    toggleFavourite,
    handlePhotoClick,
    onClose,
    getSimilarPhotos,
    photos: state.photos,
    topics: state.topics,
    fetchPhotosByTopic,
  };
};


export default useApplicationData;