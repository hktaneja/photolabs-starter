import { useState } from 'react';

export default function useApplicationData() {
  const [state, setState] = useState({
    // Define your initial state here
    favPhotoIds: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
  });

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favPhotoIds: [...prev.favPhotoIds, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      isPhotoDetailsModalOpen: false,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}