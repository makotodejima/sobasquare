export function likes(state = {}, action) {
  switch (action.type) {
    case "SET_LIKE":
      return { ...state, [action.sobaya]: action.likes };
    default:
      return state;
  }
}

export const logger = store => next => action => {
  console.log("action: ", action);
  const result = next(action);
  console.log("current state: ", store.getState());
  return result;
};
