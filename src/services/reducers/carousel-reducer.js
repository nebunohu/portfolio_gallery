import { ADD_ITEM, SET_ACTIVE_ITEM } from '../actions/carousel-actions';

const initialState = {
  items: [],
  activeItem: 0,
};

export function carouselReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    default:
      return initialState;
  }
}

export default carouselReducer;
