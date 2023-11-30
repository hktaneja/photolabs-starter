export const initialState = {
  favourites: [],
  modalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

export const reducer = (state, action) => {

  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (state.favourites.includes(action.id)) {
        const newState = {
          ...state,
          favourites: state.favourites.filter((fav) => fav !== action.id)
        };
        return newState;

      } else {
        const newState = {
          ...state,
          favourites: [...state.favourites, action.id]
        };
        return newState;
      }

    case 'SELECT_PHOTO':
      const selectedPhoto = state.photos.find((photo) => photo.id === action.id);
      return {
        ...state,
        selectedPhoto,
        modalOpen: true
      };

    case 'CLOSE_MODAL':

      return {
        ...state,
        modalOpen: false
      };

    case 'SET_PHOTOS':

      return {
        ...state,
        photos: action.payload,
      };

    case 'SET_TOPICS':

      return {
        ...state,
        topics: action.payload,
      };

    case 'SET_PHOTOS_BY_TOPIC':

      return {
        ...state,
        photos: action.payload,
      };


    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};