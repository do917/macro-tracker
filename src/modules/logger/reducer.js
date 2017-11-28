import {
  UPDATE_LOGGER,
} from './actionTypes';

const defaultState = {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};

const reducer = (state = defaultState, action) => {
  if (action.type === UPDATE_LOGGER) {
    return action.payload.data;
  }
  return state;
};

export default reducer;