const { useReducer, useEffect, useRef } = require('react');

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  FILTER_PHOTO_DATA: 'FILTER_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
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
  case 'FILTER_PHOTO_DATA':
    return { ...state, photos: action.payload, photosURL: '' };
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
  case 'GET_PHOTOS_BY_TOPICS':
    return { ...state, photosURL: action.payload };
  default:
    return state;
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);

  useEffect(() => {
    document.addEventListener('click', onModalOffClick);
    const isFirstRender = state.photos.length === 0 && state.topics.length === 0;
    if (isFirstRender) return initApp();
    getPhotosByTopic();
    return () => document.addEventListener('click', onModalOffClick);
  }, [state.photosURL]);

  useEffect(() => {
    stateRef.current = state;
  });

  const initApp = () => {
    Promise.all([
      fetch(state.photosURL).then((res) => res.json()),
      fetch(state.topicsURL).then((res) => res.json()),
    ])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((err) => console.log(err));
  };

  const getPhotosByTopic = () => {
    if (!state.photosURL) return;
    fetch(state.photosURL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => console.log(err));
  };

  const handleFav = (id) => (isFav(id) ? removeFav(id) : addFav(id));
  const isFav = (id) => state.favPhotos.includes(id);
  const addFav = (id) => dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: id });
  const removeFav = (id) => dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: id });

  const onPhotoSelect = (id) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id });
  };

  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, payload: false });
  const onLogoClick = () => {
    if (state.photosURL === '/api/photos') return;
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: '/api/photos' });
  };
  const onLoadTopic = (id) => {
    if (state.photosURL === `/api/topics/photos/${id}`) return;
    dispatch({
      type: ACTIONS.GET_PHOTOS_BY_TOPICS,
      payload: `/api/topics/photos/${id}`,
    });
  };

  const onModalOffClick = ({target}) => {
    const modalIsOpen = stateRef.current.showModal;
    const isImage = target.classList.contains('photo-list__image');
    if (!modalIsOpen || isImage) return;

    const modalEl = document.getElementById('modal');
    const rootEl = document.getElementById('root');

    let currEl = target;
    while (currEl !== rootEl) {
      if (currEl === modalEl) return;
      currEl = currEl.parentNode;
    }
    return closeModal();
  };

  const onSearch = (searchTerm) => {
    const filteredPhotos = [];
    state.photos.forEach((photo) => {
      const [city, country] = Object.values(photo.location);
      const [username, name] = Object.values(photo.user);
      if (city.toLowerCase().includes(searchTerm) || country.toLowerCase().includes(searchTerm) || username.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm)) {
        filteredPhotos.push(photo);
      }
    });
    dispatch({ type: ACTIONS.FILTER_PHOTO_DATA, payload: filteredPhotos });
  };

  const updateToFavPhotoIds = handleFav;
  const onClosePhotoDetailsModal = closeModal;

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    onLogoClick,
    onSearch
  };
};
