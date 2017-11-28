import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import reduxLogger from 'redux-logger';
import modules from './modules';

const {
  logger,
  summary,
  calendar,
} = modules;

const allMiddlewares = [];
const reducers = combineReducers({
  logger: logger.reducer,
  summary: summary.reducer,
  calendar: calendar.reducer,
});

if (process.env.NODE_ENV === 'development') {
  allMiddlewares.unshift(reduxLogger);
}

const store = createStore(
  reducers,
  applyMiddleware(...allMiddlewares),
);

export default store;
