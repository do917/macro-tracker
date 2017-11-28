import { cloneDeep } from 'lodash';
import {
  ADD_FOOD,
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

const addFood = (newFood, date, meal, summaries) => ({
  type: ADD_FOOD,
  payload: {
    data: addFoodHelper(newFood, date, meal, summaries),
  },
});

export default {
  addFood,
};
