import {
  SET_CURRENT_PROJECT,
} from '../actions/admin-actions';

const initialState = {
  currentProject: '',
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PROJECT: {
      return {
        ...state,
        currentProject: action.currentProject,
      };
    }
    default: return state;
  }
}
