const Actions = [
  'FILTER_WALKS',
  'TOGGLE_WALK_FILTER',
  'REMOVE_WALK_FILTER',
  'FILTER_WALKS_BY_DATE',
  'FILTER_LEADERS_BY_DATE',
  'SORT_LEADERS',
  'TOGGLE_MENU',
].reduce((p, v) => {p[v] = v; return p}, {});

export default Actions;