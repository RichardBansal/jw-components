import Actions from './DashboardConstants';
import { dispatch } from './DashboardDispatcher';

export default {

  filterWalks(filters) {
    dispatch({type: Actions.FILTER_WALKS, filters});
  },

  removeFilter(filter) {
    dispatch({type: Actions.REMOVE_WALK_FILTER, filter});
  },

  toggleFilter(filter) {
    dispatch({type: Actions.TOGGLE_WALK_FILTER, filter});
  },

  filterByDate(filter) {
    dispatch({type: Actions.FILTER_WALKS_BY_DATE, filter});
  },

  filterLeadersByDate(filter) {
    dispatch({type: Actions.FILTER_LEADERS_BY_DATE, filter});
  },

  sortLeaders(sortBy) {
    dispatch({type: Actions.SORT_LEADERS, sortBy});
  },

  toggleMenuItems(item) {
    dispatch({type: Actions.TOGGLE_MENU, item});
  },
}