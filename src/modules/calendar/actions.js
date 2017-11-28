import {
  UPDATE_DATE,
} from './actionTypes';

const updateSelectedDate = (date) => ({
  type: UPDATE_DATE,
  payload: {
    data: date,
  },
});

export default {
  updateSelectedDate,
};
