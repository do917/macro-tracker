import {
  ADD_FOOD,
} from './actionTypes';


const defaultState = {
  data: {},
};

const reducer = (state = defaultState, action) => {
  if (action.type === ADD_FOOD) {
    return {
      ...state,
      data: action.payload.data,
    };
  }

  return state;
};

export default reducer;
