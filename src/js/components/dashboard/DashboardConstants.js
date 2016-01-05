//TODO:(During PR) Place in generic constants files, bring that in from dev branch (replicate)

const Actions = [
  'FILTER_WALKS',
  'ADD_WALK_FILTER',
  'REMOVE_WALK_FILTER',
  'FILTER_WALKS_BY_DATE',
  'FILTER_LEADERS_BY_DATE',
  'SORT_LEADERS',
].reduce((p, v) => {p[v] = v; return p}, {});

export default Actions;