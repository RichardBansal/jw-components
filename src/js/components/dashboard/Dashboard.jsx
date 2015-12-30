import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';

import DashboardStore from './DashboardStore';

import DashboardHeader from './DashboardHeader.jsx';
import DashboardMenu from './DashboardMenu.jsx';
import CityWalks from './CityWalks.jsx';
import WalkLeaders from './WalkLeaders.jsx';
import MyWalks from './MyWalks.jsx';
import DashboardSummary from './DashboardSummary.jsx';
import DashboardResources from './DashboardResources.jsx';
import DashboardTemplate from './DashboardTemplate.jsx';

import {dashboard} from './DashboardStaticData';
import './view.less';

//const getDashboard = (props) => ({
//  dashboard: props.dashboard || dashboard,
//});

// Dashboard Template
// Dashboard MainPage

const DashboardPage = () => {
  return (
    <div>
      <DashboardSummary {...DashboardStore.getWalkLeadersAndVolunteers()} {...DashboardStore.getCityData()}/>
      <DashboardResources {...DashboardStore.getResources()}/>
    </div>
  );
}

const Dashboard = () => (
  <Router>
    <Route path="/" component={DashboardTemplate}>
      <IndexRoute component={DashboardPage}/>
      <Route path="cityWalks" component={CityWalks}/>
      <Route path="myWalks" component={MyWalks}/>
      <Route path="walkLeaders" component={WalkLeaders}/>
      <Route path="resources" component={DashboardResources}/>
      //TODO: Add ImpactReport.jsx as a component here
    </Route>
  </Router>
);

//export default class Dashboard extends React.Component {
//  constructor(props, ...args) {
//    super(props, ...args);
//  }
//
//  render() {
//    return <div></div>;
//  }
//}

//constructor(props, ...args) {
//  super(props, ...args);
//  this.state = getDashboard(props);
//}
//<DashboardHeader {...this.state.dashboard}/>
//<DashboardMenu {...this.state.dashboard}/>
//<CityWalks {...this.state.dashboard}/>
//<WalkLeaders {...this.state.dashboard}/>
//<MyWalks {...this.state.dashboard}/>
//<DashboardSummary {...this.state.dashboard.city}/>
//<DashboardResources {...this.state.dashboard.resources}/>
//render() {
//  debugger;


Dashboard.PropTypes = {
  //TODO:
};

export default Dashboard;