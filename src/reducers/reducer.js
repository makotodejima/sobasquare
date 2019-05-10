import { combineReducers, applyMiddleware } from "redux";

function sobayas(state = [], action) {
  switch (action.type) {
    case "SET_SOBAYAS":
      return [...action.sobayas];
    case "SORT_SOBAYAS":
      if (action.order == "asc") {
        return [...state].sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          } else if (a.id > b.id) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (action.order == "desc") {
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

    default:
      return state;
  }
}

function likes(state = {}, action) {
  switch (action.type) {
    case "SET_LIKE":
      return { ...state, [action.sobaya]: action.likes };
    default:
      return state;
  }
}

export default combineReducers({ sobayas, likes });

// this is Logger Middleware, not a reducer
const logger = store => next => action => {
  console.log("action: ", action);
  const result = next(action);
  console.log("current state: ", store.getState());
  return result;
};

export const middleware = applyMiddleware(logger);
