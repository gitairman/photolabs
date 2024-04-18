

const { useReducer, useEffect } = require('react');

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

const initialState = {
  favPhotos: [],
  showModal: false,
  singlePhotoDetail: {},
  photos: [],
  topics: [],
  photosURL: '/api/photos',
  topicsURL: '/api/topics',
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

  useEffect(() => {
    Promise.all([
      fetch(state.photosURL).then(res => res.json()),
      fetch(state.topicsURL).then(res => res.json()),
    ])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      });
  }, []);

  const handleFav = (id) => isFav(id) ? removeFav(id) : addFav(id);
  const isFav = (id) => state.favPhotos.includes(id);
  const addFav = (id) => dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: id });
  const removeFav = (id) => dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: id });


  const handleClickPhoto = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, payload: false });
  };

  const onPhotoSelect = handleClickPhoto;
  const updateToFavPhotoIds = handleFav;
  const onLoadTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  };
  const onClosePhotoDetailsModal = closeModal;

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};
