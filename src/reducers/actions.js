export const actionTypes = {
  SET_LIKE: 'SET_LIKE',
  SET_SORT_BY: 'SET_SORT_BY',
  SET_SELECTED: 'SET_SELECTED',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
};

export const setSortBy = sortBy => ({ type: actionTypes.SET_SORT_BY, sortBy });

export const setSelected = id => ({ type: actionTypes.SET_SELECTED, id });

export const setVisibilityFilter = visibilityFilter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  visibilityFilter,
});

export const setLike = (id, likeSummary) => ({
  type: actionTypes.SET_LIKE,
  id,
  likeSummary,
});
