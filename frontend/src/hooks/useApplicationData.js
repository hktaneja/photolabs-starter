import { useReducer, useEffect } from 'react';
import { reducer, initialState } from "../reducer/reducer";

// Custom hook for managing application data
const useApplicationData = () => {
  // State management using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Toggle favorite for a photo
  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id });
  };

  // Handle photo click
  const handlePhotoClick = (id) => {
    dispatch({ type: 'SELECT_PHOTO', id });
  };

  // Close modal
  const onClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  // Get similar photos for the selected photo
  const getSimilarPhotos = () => {
    if (state.selectedPhoto) {
      const modalPhoto = state.photos.filter(
        (photo) => photo.id === state.selectedPhoto.id
      );
      return modalPhoto[0].similar_photos;
    }
    return [];
  };

  // Fetch photos for a specific topic
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

  // Initial data fetching using useEffect
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

  // Return data and functions for component consumption
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

// Export custom hook
export default useApplicationData;