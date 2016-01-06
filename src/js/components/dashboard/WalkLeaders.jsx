import React from 'react';
import ReactDOM from 'react-dom';
import DashboardStore from './DashboardStore';
import DashboardActions from './DashboardActions';

import WalkLeader from './WalkLeader.jsx';

const getWalkLeaders = (props) => ({
  filterByDate: props.filterByDate || DashboardStore.getDateFilter(), // 'past' 'future' 'all'
  sortBy: props.sortBy || DashboardStore.getSortBy(), //'alpha', 'walks', ''
  activeLeaders: props.activeLeaders || DashboardStore.getWalkLeadersAndVolunteers(props.location),
});

export default class WalkLeaders extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = getWalkLeaders(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    DashboardStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    DashboardStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    debugger;
    this.setState(getWalkLeaders(this.props));
  }

  render() {

    const {activeLeaders} = this.state;
    const {name} = DashboardStore.getCityData();
    const {filterLeadersByDate, sortLeaders} = DashboardActions;

    const WalkLeaders = activeLeaders.map((wL,i) => (<WalkLeader {...wL} key={i}/> ));

    //TODO: Show button is active for onClick
    return (<section className="dashboardWalkLeaders">
      <button className="buttonAllWalks" onClick={() => filterLeadersByDate('all')}>All Walks</button>
      <button className="buttonUpcomingWalks" onClick={() => filterLeadersByDate('future')}>Upcoming Walks Only</button>
      <button className="buttonPastWalks" onClick={() => filterLeadersByDate('past')}>Past Walks Only</button><br/>
      <button className="buttonSortAlphabetically" onClick={() => sortLeaders('alpha')}>Sort Alphabetically by First Name</button>
      <button className="buttonSortByMostWalks" onClick={() => sortLeaders('count')}>Sort by Most Walks</button>
      {WalkLeaders}
    </section>);
  };
}

WalkLeaders.PropTypes = {
  filterByDate: React.PropTypes.string.isRequired,
  sortBy: React.PropTypes.string.isRequired,
  activeLeaders: React.PropTypes.array.isRequired,
};

export default WalkLeaders;