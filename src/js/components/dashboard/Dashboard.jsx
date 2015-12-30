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
import ImpactReport from './ImpactReport.jsx'; //TODO: Data for ImpactReport
import DashboardSummary from './DashboardSummary.jsx';
import DashboardResources from './DashboardResources.jsx';
import DashboardTemplate from './DashboardTemplate.jsx';
import MyBlogPosts from './MyBlogPosts.jsx';

import {dashboard} from './DashboardStaticData';
import './view.less';

const DashboardPage = () => {
  return (
    <div>
      <DashboardSummary {...DashboardStore.getWalkLeadersAndVolunteers()} {...DashboardStore.getCityData()}/>
      <DashboardResources {...DashboardStore.getResources()}/>
    </div>
  );
};

const Dashboard = () => (
  <Router>
    <Route path="/" component={DashboardTemplate}>
      <IndexRoute component={DashboardPage}/>
      <Route path="cityWalks" component={CityWalks}/>
      <Route path="myWalks" component={MyWalks}/>
      <Route path="walkLeaders" component={WalkLeaders}/>
      <Route path="resources" component={DashboardResources}/>
      <Route path="posts" component={MyBlogPosts}/>
      <Route path="impact" component={ImpactReport}/>
    </Route>
  </Router>
);

Dashboard.PropTypes = {
  //TODO:
};

export default Dashboard;