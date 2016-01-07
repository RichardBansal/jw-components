//TODO: (Post-PR) DashboardStore should be split into multiple stores, like Walks should be within its own store with related functionality

import { dispatch, register } from './DashboardDispatcher';
import { EventEmitter } from 'events';
import Actions from './DashboardConstants';
import {dashboard} from './DashboardStaticData';

const {city, walks, resources, blog, impact} = dashboard;
const {walks: cityWalks, filters} = city;
let filteredWalks = [];
let activeLeaders = [];
let activeFilters = {};
let inActiveFilters = {};
let filterByDate = 'all';
let currentRoute = null;
let sortBy = null;

import ImpactReport from './ImpactReport.jsx';
import DashboardSummary from './DashboardSummary.jsx';
import DashboardResources from './DashboardResources.jsx';
import MyBlogPosts from './MyBlogPosts.jsx';
import Walks from './Walks.jsx';
import WalkLeaders from './WalkLeaders.jsx';

const menuItems = [ { display: `${city.name} Walks`, link: '/cityWalks', active: false, componentName: 'Walks'},
  { display:'My Walks', link: '/userWalks', active: false, componentName: 'Walks'},
  { display:'Walk Leaders and Volunteers', link: '/walkLeaders', active: false, componentName: 'WalkLeaders'},
  { display:'My Blog Posts', link: '/posts', active: false, componentName: 'MyBlogPosts'},
  //{ display:'Impact Report Builder', link: '/impact', active: false, componentName: 'ImpactReport'}, //TODO: Complete with Data
  { display:'Resources', link: 'resources', active: false, componentName: 'DashboardResources'},
];

const CHANGE_EVENT = 'change';

const _firstWalkYear = (year, walks) => {
  return walks.reduce((firstYear,walk)=>{
    const walkYear = new Date((walk.time.slots[0][0])*1000).getFullYear();
    return walkYear < year ? walkYear : year;
  }, year);
};

const generateWalkLeaders = (walks) => {
  let walkLeaders = [];
  walks.forEach(w => {
    if (w.team && w.team.length > 0) {
      w.team.forEach(m => {
        const role = m.role ? m.role.toLowerCase() : '';
        if (role.includes('leader') || role.includes('organizer')) {
          let leaderExists = walkLeaders.findIndex(l => l.firstName === m['name-first'] && l.lastName === m['name-last']);
          if (leaderExists !== -1) walkLeaders[leaderExists].walks.push(w);
          else walkLeaders.push({firstName:m['name-first'], lastName:m['name-last'], walks: [w], email:m['email']});
        }
      });
    }
  });
  return walkLeaders;
};

const _walkLeaders = generateWalkLeaders(walks);

const _walkLeadersPerYear = (year, walkLeaders) => {
  return walkLeaders.reduce((sum, walkLeader)=>{
    const ledWalkThisYear = walkLeader.walks.find(w => new Date(JSON.parse(w.time.slots[0][0])*1000).getFullYear() === year);
    return ledWalkThisYear ? sum + 1 : sum;
  }, 0);
};

const _walksPerYear = (year, walks) => {
  return walks.reduce((sum,walk)=>{
    const walkThisYear = new Date((walk.time.slots[0][0])*1000).getFullYear() === year;
    return walkThisYear ? sum + 1 : sum;
  }, 0);
};

const _generateRegionSummary = (walks) => {
  const year = (new Date()).getFullYear();
  return {
    year,
    walkLeaders: _walkLeadersPerYear(year, _walkLeaders),
    walks: _walksPerYear(year, walks),
    participants: 111, //TODO: This information is not available
    originalYear: _firstWalkYear(year, walks),
    totalWalkLeaders: _walkLeaders.length,
    totalWalks: walks.length,
    name: city.name,
  }
};

const _regionSummary = _generateRegionSummary(walks);

const _retrieveWalks = () => {
  debugger;
  if (currentRoute === '/cityWalks') return cityWalks;
  if (currentRoute === '/userWalks') return walks;
};

const _filterWalks = (filters = activeFilters, filterByDate = 'all') => {
  let allWalks = _retrieveWalks();

  const filtersArray = Object.keys(filters).reduce((array, key) => array.concat(filters[key]), []);

  if (!filtersArray.length) filteredWalks = allWalks;
  else {
    filteredWalks = allWalks.filter(walk => {
      return filtersArray.reduce((p, c)=> {
        //TODO: Assumed wards is a single string
        const ward = walk.wards ? walk.wards.indexOf(c) !== -1 : false;
        const theme = walk.checkboxes ? Object.keys(walk.checkboxes).indexOf('theme-' + c) !== -1 : false;
        const accessibility = walk.checkboxes ? Object.keys(walk.checkboxes).indexOf('accessible-' + c) !== -1 : false;

        return (p && (ward || theme || accessibility));
      }, true);
    });
  }

  if (!filterByDate.length || filterByDate === 'all') return;
  else {
    filteredWalks = filteredWalks.filter(walk => {
      const currentDate = Date.now();
      if (filterByDate === 'past')  return walk.time.slots[0][0] * 1000 <= currentDate;
      else if (filterByDate === 'future') return walk.time.slots[0][0] * 1000 >= currentDate;
    });
  }
};

//TODO: (Post-PR) Create a common filter and list Component

const _filterWalkLeaders = (filterByDate = '') => {

  if (!filterByDate.length || filterByDate === 'all') activeLeaders = _walkLeaders;
  else {
    activeLeaders = _walkLeaders.filter(leader => {
      const currentDate = Date.now();
      if (filterByDate === 'past') {
        return leader.walks.reduce((p, walk) => {
          if(p) return p;
          return walk.time.slots[0][0] * 1000 <= currentDate;
        }, false);
      }
      if (filterByDate === 'future') {
        return leader.walks.reduce((p, walk) => {
          if(p) return p;
          return walk.time.slots[0][0] * 1000 >= currentDate;
        }, false);
      }
      return true; //filterByDate === 'all'
    });
  }
};

const _sortWalkLeaders = (sortSelected) => {
  //TODO: Toggle off and on or reset
  if (sortBy === sortSelected) return;
  else if (sortSelected === 'alpha') {
    activeLeaders.sort((pLeader, cLeader)=>{
      return pLeader.firstName > cLeader.firstName;
    });
  }
  else { //'count'
    activeLeaders.sort((pLeader, cLeader)=>{
      return pLeader.walks.length < cLeader.walks.length;
    });
  }
};

const _toggleWalkFilter = (filter, filterName) => {

  if (!Object.keys(activeFilters).includes(filterName)) {
    activeFilters[filterName] = [];
  }

  const activeFilterIndex = activeFilters[filterName].findIndex(f => f.filter === filter);

  if (activeFilterIndex === -1) {
    activeFilters[filterName].push({filter, state:true});
  } else {
    let filter = activeFilters[filterName][activeFilterIndex];
    filter.state = !filter.state;
  }
};

const _removeWalkFilter = (filter, filterName) => {
  const activeFilterIndex = activeFilters[filterName].findIndex(f => f.filter === filter);

  if(activeFilterIndex !== -1) activeFilters[filterName].splice(activeFilterIndex, 1);
};

const _generateCSV = () => {
  //TODO: Configuration (what to export) + Complete Functionality
  return encodeURI("data:text/csv;charset=utf-8,Title \n" + (filteredWalks.map(w => (`\"${w.title} \"`))).join('\n'));
}

const DashboardStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCityData() {
    return city;
  },

  getFilters() {
    return filters;
  },

  getMyWalks() {
    return walks;
  },

  getActiveFilters() {
    return {activeFilters, inActiveFilters};
  },

  getDateFilter() {
    return filterByDate;
  },

  getSortBy() {
    return sortBy;
  },

  generateCSV() {
    return _generateCSV();
  },

  getWalks(pathname) {
    debugger;
    //const {pathname} = route;

    if (pathname !== currentRoute) {
      currentRoute = pathname;
      filteredWalks = _retrieveWalks();
      activeFilters = {};
      inActiveFilters = {};
      filterByDate = 'all';
    }

    return filteredWalks;
  },

  getWalkLeadersAndVolunteers(pathname) {
    //const {pathname} = route;

    if (pathname !== currentRoute) {
      currentRoute = pathname;
      filterByDate = 'all';
      sortBy = null;
      activeLeaders = _walkLeaders;
    }

    return activeLeaders;
  },

  getResources() {
    return resources;
  },

  getMyBlogPosts() {
    return blog;
  },

  getLatestPost() {
    return {post:blog[0]};
  },

  getRegionSummary() {
    return _regionSummary;
  },

  getMenuItems() {
    return menuItems;
  },

  dispatcherIndex: register(function(action) {
    switch (action.type) {
      case Actions.FILTER_WALKS:
        _filterWalks(action.filters);
        break;
      case Actions.TOGGLE_WALK_FILTER:
        _toggleWalkFilter(action.filter, action.filterName);
        _filterWalks();
        break;
      case Actions.REMOVE_WALK_FILTER:
        _removeWalkFilter(action.filter, action.filterName);
        _filterWalks();
        break;
      case Actions.FILTER_WALKS_BY_DATE:
        _filterWalks(activeFilters,action.filter);
        filterByDate = action.filter;
        break;
      case Actions.FILTER_LEADERS_BY_DATE:
        debugger;
        _filterWalkLeaders(action.filter);
        filterByDate = action.filter;
        break;
      case Actions.SORT_LEADERS:
        _sortWalkLeaders(action.sortBy);
        sortBy = action.sortBy;
        break;
      case Actions.TOGGLE_MENU:
        //TODO: refactor into separate component
        let menuItem = menuItems.find(i => i.display === action.item);
        menuItem.active = !menuItem.active;
    }

    DashboardStore.emitChange();
  }),
});

export default DashboardStore;