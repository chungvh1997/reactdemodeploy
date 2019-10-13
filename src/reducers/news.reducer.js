/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
import * as Types from "../variables/actionTypes";
var initialState = {
  home: [],
  contact: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_HOME:
      // console.log(action);
      
      // state = { ...state, news: action.dataNews };
      state = { ...state, home: action.data };
      return state;
      
    default:
      return { ...state };
  }
};

export default userReducer;
