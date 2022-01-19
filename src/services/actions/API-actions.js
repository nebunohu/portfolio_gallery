export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_REQUEST_SUCCESS = 'GET_DATA_REQUEST_SUCCESS';
export const GET_DATA_REQUEST_FAILED = 'GET_DATA_REQUEST_FAILED';

export function getData(API_URL) {
  return async function(dispatch) {
    dispatch({ type: GET_DATA_REQUEST });
    const headers = new Headers({"content-type": "application/json"})
    try {
      const res = await fetch(API_URL, { method: "GET", mode: "cors", headers});
      if (res.ok) {
        const resData = await res.json();
        dispatch({type: GET_DATA_REQUEST_SUCCESS, data: resData.data});
      } else {
        throw new Error ('Get data fetch error');
      }
    } catch (error) {
      dispatch({type: GET_DATA_REQUEST_FAILED});
      console.log(error);
    }
  }
}