import { GET_DATA_REQUEST, GET_DATA_REQUEST_FAILED, GET_DATA_REQUEST_SUCCESS } from "../actions/API-actions";

const initialState = {
  dataRequest: false,
  dataRequestSuccess: false,
  dataRequestFailed: false,
}

export function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataRequestSuccess: false,
        dataRequestFailed: false
      }
    }
    case GET_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        dataRequest: false,
        dataRequestSuccess: true,

        data: action.data,
      }
    }
    case GET_DATA_REQUEST_FAILED: {
      return {
        ...state,
        dataRequest: false,
        dataRequestFailed: true,
      }
    }
    default: return state;
  }
}