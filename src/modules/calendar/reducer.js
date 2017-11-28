import {
  UPDATE_DATE,
} from './actionTypes';

const defaultState = {
  selectedDate: '',
};

const reducer = (state = defaultState, action) => {
  if (action.type === UPDATE_DATE) {
    return {
      ...state,
      selectedDate: action.payload.data,
    };
  }


  return state;
};

export default reducer;
