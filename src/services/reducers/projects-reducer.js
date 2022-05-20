import { GET_DATA_REQUEST, GET_DATA_REQUEST_FAILED, GET_DATA_REQUEST_SUCCESS } from '../actions/API-actions';
import { CLEAR_PROJECTS_DATA, CLEAR_SUCCESS_FLAG } from '../actions/projects-actions';

const initialState = {
  dataRequest: false,
  dataRequestSuccess: false,
  dataRequestFailed: false,

  data: [],
};

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataRequestSuccess: false,
        dataRequestFailed: false,
      };
    }
    case GET_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        dataRequest: false,
        dataRequestSuccess: true,

        data: action.data,
      };
    }
    case GET_DATA_REQUEST_FAILED: {
      return {
        ...state,
        dataRequest: false,
        dataRequestFailed: true,
      };
    }
    case CLEAR_PROJECTS_DATA: {
      return {
        ...state,
        data: [],
      };
    }
    case CLEAR_SUCCESS_FLAG: {
      return {
        ...state,
        dataRequestSuccess: false,
      };
    }
    default: return state;
  }
}

export default projectsReducer;
