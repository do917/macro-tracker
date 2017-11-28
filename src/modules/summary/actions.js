import { cloneDeep } from 'lodash';
import {
  UPDATE_FOOD,
} from './actionTypes';

const addFoodHelper = (newFood, date, meal, summaries) => {
  const cSummaries = cloneDeep(summaries);
  if (cSummaries[date] && cSummaries[date][meal]) {
    cSummaries[date][meal].push(newFood);
  } else if (cSummaries[date]) {
    cSummaries[date][meal] = [newFood];
  } else {
    cSummaries[date] = {};
    cSummaries[date][meal] = [newFood];
  }

  return cSummaries;
};

const deleteFoodHelper = (date, meal, i, summaries) => {
  const cSummaries = cloneDeep(summaries);
  cSummaries[date][meal].splice(i, 1);
  return cSummaries;

};

const addFood = (newFood, date, meal, summaries) => ({
  type: UPDATE_FOOD,
  payload: {
    data: addFoodHelper(newFood, date, meal, summaries),
  },
});

const deleteEntry = (date, meal, i, summaries) => ({
  type: UPDATE_FOOD,
  payload: {
    data: deleteFoodHelper(date, meal, i, summaries),
  },
});

export default {
  addFood,
  deleteEntry,
};
