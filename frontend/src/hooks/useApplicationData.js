import photos from 'mocks/photos';
import topics from 'mocks/topics';

const { useReducer } = require('react');

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

const initialState = {
  favPhotos: [],
  showModal: false,
  singlePhotoDetail: {},
  photos,
  topics,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_FAV_PHOTO':
    return { ...state, favPhotos: [...state.favPhotos, action.payload] };
  case 'REMOVE_FAV_PHOTO':
    return {
      ...state,
      favPhotos: state.favPhotos.filter((p) => p !== action.payload),
    };
  case 'SET_PHOTO_DATA':
    return { ...state, photos: action.payload };
  case 'SET_TOPIC_DATA':
    return { ...state, topics: action.payload };
  case 'SELECT_PHOTO':
    return {
      ...state,
      singlePhotoDetail: state.photos.find((p) => p.id === action.payload),
    };
  case 'DISPLAY_PHOTO_DETAILS':
    return { ...state, showModal: action.payload };
  case 'CLOSE_PHOTO_DETAILS':
    return { ...state, showModal: action.payload };
  default:
    return state;
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFavourite = (id) =>
    isAlreadyFavourite(id) ? removeFromFavourites(id) : addToFavourites(id);

  const isAlreadyFavourite = (id) => state.favPhotos.includes(id);

  const addToFavourites = (id) =>
    dispatch({ type: 'ADD_FAV_PHOTO', payload: id });

  const removeFromFavourites = (id) =>
    dispatch({ type: 'REMOVE_FAV_PHOTO', payload: id });


  const handleClickPhoto = (id) => {
 
    dispatch({ type: 'SELECT_PHOTO', payload: id });

    dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: true });
  };

  const closeModal = () => {

    dispatch({ type: 'CLOSE_PHOTO_DETAILS', payload: false });
  };


  const onPhotoSelect = handleClickPhoto;
  const updateToFavPhotoIds = handleFavourite;
  const onLoadTopic = () => {};
  const onClosePhotoDetailsModal = closeModal;

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};
