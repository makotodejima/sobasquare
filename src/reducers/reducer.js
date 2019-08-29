import { applyMiddleware } from 'redux';
import sobayas from '../data/sobayas';

const initialState = {
  selected: -1,
  sobayas,
  visibilityFilter: '',
  sortBy: 'asc',
  like: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED':
      return { ...state, selected: action.id };
    case 'SET_VISIBILITY_FILTER':
      return setVisibilityFilter(state, action);
    case 'SET_LIKE':
      return setLike(state, action);
    case 'SET_SORT_BY':
      return setSortBy(state, action);
    default:
      return state;
  }
}

function setVisibilityFilter(state, action) {
  return {
    ...state,
    visibilityFilter: action.visibilityFilter,
  };
}

function setLike(state, action) {
  switch (action.type) {
    case 'SET_LIKE':
      const like = { ...state.like, [action.id]: action.likeSummary };
      return { ...state, like };
    default:
      return state;
  }
}

function setSortBy(state, action) {
  switch (action.type) {
    case 'SET_SORT_BY':
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}

export default rootReducer;

// Logger Middleware
const logger = store => next => action => {
  // console.log('will dispatch: ', action);
  const result = next(action);
  // console.log('current state: ', store.getState());
  return result;
};

export const middleware = applyMiddleware(logger);
