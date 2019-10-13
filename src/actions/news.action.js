import * as Types from "../variables/actionTypes";
import callApi from "../utils/callApi";
export const actGetNewsx = () => {
  return dispatch => {
    return callApi(`home`, "GET").then(res => {
      // console.log(res);
      dispatch(actGetListHome(res));
    });
  };
};
// dispatch goi toi action 
export const actGetListHome = data => {
  return {
    type: Types.GET_HOME,
    data
  };
};
// GET_NEWS key
// data

// export const actGetContact = () => {
//   return dispatch => {
//     return callApi(`news`, "GET").then(res => {
//       console.log(res);
      
//       dispatch(actGetListNew(res));
//     });
//   };
// };
// export const actGetListNew = dataNews => {
//   return {
//     type: Types.GET_NEWS,
//     dataNews
//   };
// };
