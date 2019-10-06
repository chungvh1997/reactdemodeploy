import * as Types from "../variables/actionTypes";
import callApi from "../utils/callApi";
export const actGetNews = () => {
  return dispatch => {
    return callApi(`news`, "GET").then(res => {
      dispatch(actGetListNew(res));
    });
  };
};
export const actGetListNew = dataNews => {
  return {
    type: Types.GET_NEWS,
    dataNews
  };
};
