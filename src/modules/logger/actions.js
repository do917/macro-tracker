import { cloneDeep } from 'lodash';
import {
  UPDATE_LOGGER,
} from './actionTypes';

const updateLoggerHelper = (type, text, loggerData) => {
  const cLoggerData = cloneDeep(loggerData);
  cLoggerData[type] = text;
  const macroConverter = {
    fat: 9,
    carbs: 4,
    protein: 4,
  };
  const calories = ['fat', 'carbs', 'protein'].reduce((cal, mac) => {
    return cal + (macroConverter[mac] * cLoggerData[mac]);
  }, 0);
  
  cLoggerData.calories = calories;
  return cLoggerData;
};

const updateLogger = (type, text, loggerData) => ({
  type: UPDATE_LOGGER,
  payload: {
    data: updateLoggerHelper(type, text, loggerData),
  },
});

const resetLogger = () => ({
  type: UPDATE_LOGGER,
  payload: {
    data: {
      name: '',
      fat: 0,
      carbs: 0,
      protein: 0,
      calories: 0,
      meal: 'breakfast',
    },
  },
});

export default {
  updateLogger,
  resetLogger,
};
