import { applyMiddleware } from "redux";
import sobayas from "../data/sobayas";

const initialState = { sobayas: sobayas, visibilityFilter: "" };

function rootReducers(state = initialState, action) {
  switch (action.type) {
    // case "SET_SOBAYAS":
    //   return [...action.sobayas];
    case "SET_VISIBILITY_FILTER":
      return setVisibilityFilter(state, action);
    case "SET_LIKE":
      return setLike(state, action);

    case "SORT_SOBAYAS":
      return sortSobayas(state, action);
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
    case "SET_LIKE":
      return { ...state, [action.sobaya]: action.likes };
    default:
      return state;
  }
}

function sortSobayas(state, action) {
  if (action.order === "asc") {
    return [...state].sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (action.order === "desc") {
    return [...state].sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

export default rootReducers;

// this is Logger Middleware, not a reducer
const logger = store => next => action => {
  console.log("action: ", action);
  const result = next(action);
  console.log("current state: ", store.getState());
  return result;
};

export const middleware = applyMiddleware(logger);
