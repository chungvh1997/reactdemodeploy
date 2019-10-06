/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
import * as Types from "../variables/actionTypes";
var initialState = {
  news: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_NEWS:
      state = { ...state, news: action.dataNews };
      return state;
    default:
      return { ...state };
  }
};

export default userReducer;
