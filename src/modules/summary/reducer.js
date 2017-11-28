import {
  UPDATE_FOOD,
} from './actionTypes';


const defaultState = {
  data: {},
};

const reducer = (state = defaultState, action) => {
  if (action.type === UPDATE_FOOD) {
    return {
      ...state,
      data: action.payload.data,
    };
  }

  return state;
};

export default reducer;
