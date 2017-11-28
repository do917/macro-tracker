import { cloneDeep } from 'lodash';
import {
  ADD_FOOD,
  DELETE_FOOD,
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
  type: ADD_FOOD,
  payload: {
    data: addFoodHelper(newFood, date, meal, summaries),
  },
});

const deleteEntry = (date, meal, i, summaries) => ({
  type: ADD_FOOD,
  payload: {
    data: deleteFoodHelper(date, meal, i, summaries),
  },
});

export default {
  addFood,
  deleteEntry,
};
