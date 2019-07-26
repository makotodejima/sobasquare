import { applyMiddleware } from "redux";
import sobayas from "../data/sobayas";

const initialState = {
  selected: null,
  sobayas: sobayas,
  visibilityFilter: "",
  sortBy: "asc",
  like: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED":
      return { ...state, selected: action.id };
    case "SET_VISIBILITY_FILTER":
      return setVisibilityFilter(state, action);
    case "SET_LIKE":
      return setLike(state, action);
    case "SET_SORT_BY":
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
    case "SET_LIKE":
      const like = { ...state.like, [action.id]: action.likeSummary };
      return { ...state, like };
    default:
      return state;
  }
}

function setSortBy(state, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}

export function sortSobayas(sobayas, sortBy) {
  if (sortBy === "asc") {
    return sobayas.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "desc") {
    return sobayas.sort((a, b) => {
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

export default rootReducer;

// this is Logger Middleware, not a reducer
const logger = store => next => action => {
  console.log("action: ", action);
  const result = next(action);
  console.log("current state: ", store.getState());
  return result;
};

export const middleware = applyMiddleware(logger);
